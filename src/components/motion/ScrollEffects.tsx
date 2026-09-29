"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Global scroll animation engine:
// 1. Scroll reveal  - har section ke heading, cards aur grid items staggered tarike se reveal hote hain
// 2. Parallax       - sections ke background glow blobs scroll ke saath alag speed pe chalte hain
// 3. 3D tilt        - cards (.cyber-glass-hover / [data-tilt]) mouse ke saath tilt + spotlight
// Kisi section ko skip karna ho to us par data-no-reveal lagayein.

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const MAX_DEPTH = 4;

type Variant = "up" | "left" | "right" | "zoom";

const FROM: Record<Variant, Keyframe> = {
  up: { opacity: 0, transform: "translate3d(0, 48px, 0)", filter: "blur(8px)" },
  left: { opacity: 0, transform: "translate3d(-70px, 0, 0)", filter: "blur(8px)" },
  right: { opacity: 0, transform: "translate3d(70px, 0, 0)", filter: "blur(8px)" },
  zoom: { opacity: 0, transform: "translate3d(0, 40px, 0) scale(0.92)" },
};
const TO: Keyframe = { opacity: 1, transform: "none", filter: "blur(0px)" };

interface Target {
  el: HTMLElement;
  variant: Variant;
  delay: number;
}

const isGrid = (el: Element) => getComputedStyle(el).display === "grid";
const isDecorative = (el: Element) =>
  el.getAttribute("aria-hidden") === "true" ||
  (el.classList.contains("absolute") && el.classList.contains("pointer-events-none"));

function play(el: HTMLElement, variant: Variant, delay: number) {
  el.animate([FROM[variant], TO], {
    duration: variant === "zoom" ? 900 : 1100,
    delay,
    easing: EASE,
    fill: "backwards",
  });
  el.style.opacity = el.dataset.prevOpacity ?? "";
  delete el.dataset.prevOpacity;
}

function collect(parent: Element, out: Target[], depth: number) {
  const children = Array.from(parent.children).filter(
    (c): c is HTMLElement => c instanceof HTMLElement && !isDecorative(c),
  );

  children.forEach((child, i) => {
    if (isGrid(child)) {
      const items = Array.from(child.children) as HTMLElement[];
      const pair = items.length === 2;
      items.forEach((item, j) =>
        out.push({
          el: item,
          variant: pair ? (j === 0 ? "left" : "right") : "zoom",
          delay: Math.min(j * 90, 720),
        }),
      );
    } else if (child.querySelector(":scope > h2") && child.children.length <= 5) {
      // Section heading block: badge, title, paragraph ek-ek karke
      Array.from(child.children).forEach((item, j) =>
        out.push({ el: item as HTMLElement, variant: "up", delay: j * 120 }),
      );
    } else if (depth < MAX_DEPTH && hasGridInside(child)) {
      collect(child, out, depth + 1);
    } else {
      out.push({ el: child, variant: "up", delay: Math.min(i * 110, 440) });
    }
  });
}

function hasGridInside(el: Element) {
  return Array.from(el.querySelectorAll("div, ul")).some(isGrid);
}

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const main = document.querySelector("main");
    if (!main) return;

    const cleanups: Array<() => void> = [];

    // ---------- 1. Scroll reveal ----------
    if (!reduced) {
      const targets: Target[] = [];
      main.querySelectorAll<HTMLElement>("section:not([data-no-reveal])").forEach((section) => {
        const root = section.querySelector(".site-container") ?? section;
        collect(root, targets, 0);
      });

      const pending = new Map<Element, Target>();
      targets.forEach((t) => {
        if (t.el.dataset.revealed) return;
        t.el.dataset.prevOpacity = t.el.style.opacity;
        t.el.style.opacity = "0";
        pending.set(t.el, t);
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const t = pending.get(entry.target);
            if (!t) return;
            t.el.dataset.revealed = "true";
            play(t.el, t.variant, t.delay);
            pending.delete(entry.target);
            io.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
      );
      pending.forEach((_, el) => io.observe(el));

      // Filter/tab change se naye cards aayein to unhe bhi animate karo
      const grids = new Set(targets.map((t) => t.el.parentElement).filter(Boolean));
      const mo = new MutationObserver((mutations) => {
        let n = 0;
        mutations.forEach((m) =>
          m.addedNodes.forEach((node) => {
            const parent = node.parentElement;
            if (node instanceof HTMLElement && parent && grids.has(parent) && isGrid(parent)) {
              play(node, "zoom", Math.min(n++ * 60, 480));
            }
          }),
        );
      });
      mo.observe(main, { childList: true, subtree: true });

      cleanups.push(() => {
        io.disconnect();
        mo.disconnect();
        pending.forEach((t) => {
          t.el.style.opacity = t.el.dataset.prevOpacity ?? "";
          delete t.el.dataset.prevOpacity;
        });
      });
    }

    // ---------- 2. Parallax background blobs ----------
    if (!reduced) {
      const blobs = Array.from(
        main.querySelectorAll<HTMLElement>("section:not([data-no-reveal]) > .blur-3xl"),
      ).filter((b) => !Array.from(b.classList).some((c) => c.startsWith("animate-")));

      let raf = 0;
      const update = () => {
        raf = 0;
        const vh = window.innerHeight;
        blobs.forEach((b, i) => {
          const r = b.parentElement!.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const progress = (r.top + r.height / 2 - vh / 2) / vh;
          const speed = i % 2 === 0 ? 120 : -90;
          b.style.transform = `translate3d(0, ${progress * speed}px, 0)`;
        });
      };
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(update);
      };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        cancelAnimationFrame(raf);
        blobs.forEach((b) => (b.style.transform = ""));
      });
    }

    // ---------- 3. 3D tilt + spotlight on cards ----------
    if (!reduced && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      let active: HTMLElement | null = null;

      const reset = (el: HTMLElement) => {
        el.style.transform = "";
        el.classList.remove("is-tilting");
      };

      const onMove = (e: PointerEvent) => {
        const el = (e.target as Element | null)?.closest<HTMLElement>(".cyber-glass-hover, [data-tilt]");
        if (active && active !== el) reset(active);
        active = el ?? null;
        if (!el) return;

        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const strength = Math.max(3, 10 - r.width / 80);
        el.classList.add("is-tilting");
        el.style.setProperty("--spot-x", `${px * 100}%`);
        el.style.setProperty("--spot-y", `${py * 100}%`);
        el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * strength}deg) rotateY(${(px - 0.5) * strength}deg) translateY(-4px)`;
      };
      const onLeave = () => {
        if (active) reset(active);
        active = null;
      };

      document.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        document.removeEventListener("pointermove", onMove);
        document.documentElement.removeEventListener("pointerleave", onLeave);
        onLeave();
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
