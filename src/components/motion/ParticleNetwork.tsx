"use client";

import { useEffect, useRef } from "react";

// Hero ke peeche live "network" animation (canvas):
// - depth wale glowing nodes jo dheere drift karte aur twinkle karte hain
// - paas ke nodes ke beech chamakti connection lines
// - lines par chalte hue "data packets"
// - mouse: parallax + cursor se nodes tak lines + halka attraction
// - click: shockwave ripple jo nodes ko bahar dhakelta hai

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number; // depth 0.35 (door) .. 1 (paas)
  phase: number;
  hub: boolean;
}

interface Packet {
  a: Node;
  b: Node;
  t: number;
  speed: number;
}

interface Ripple {
  x: number;
  y: number;
  r: number;
  life: number;
}

const CYAN = "56, 189, 248";
const LIGHT = "165, 243, 252";

export default function ParticleNetwork({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    const ripples: Ripple[] = [];
    let linkDist = 150;

    const mouse = { x: -9999, y: -9999, active: false };
    const parallax = { x: 0, y: 0, tx: 0, ty: 0 };

    const build = () => {
      const rect = host.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(120, Math.max(35, (w * h) / 13000)));
      linkDist = w < 640 ? 110 : 150;
      nodes = Array.from({ length: count }, () => {
        const z = 0.35 + Math.random() * 0.65;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25 * z,
          vy: (Math.random() - 0.5) * 0.25 * z,
          z,
          phase: Math.random() * Math.PI * 2,
          hub: Math.random() < 0.08,
        };
      });
      packets = [];
    };

    // Depth ke hisaab se parallax shift ke saath screen position
    const pos = (n: Node) => ({
      x: n.x + parallax.x * n.z * 28,
      y: n.y + parallax.y * n.z * 28,
    });

    const spawnPacket = () => {
      const a = nodes[(Math.random() * nodes.length) | 0];
      let best: Node | null = null;
      let bestD = linkDist;
      for (const b of nodes) {
        if (b === a) continue;
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < bestD && Math.random() < 0.6) {
          best = b;
          bestD = d;
        }
      }
      if (best) packets.push({ a, b: best, t: 0, speed: 0.008 + Math.random() * 0.012 });
    };

    let time = 0;
    let raf = 0;
    let running = false;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, w, h);

      parallax.x += (parallax.tx - parallax.x) * 0.05;
      parallax.y += (parallax.ty - parallax.y) * 0.05;

      // --- update nodes ---
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;

          // Cursor ki taraf halka khinchav
          if (mouse.active) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const d = Math.hypot(dx, dy);
            if (d < 180 && d > 1) {
              const f = (1 - d / 180) * 0.02 * n.z;
              n.vx += (dx / d) * f;
              n.vy += (dy / d) * f;
            }
          }

          // Shockwave push
          for (const r of ripples) {
            const dx = n.x - r.x;
            const dy = n.y - r.y;
            const d = Math.hypot(dx, dy);
            if (Math.abs(d - r.r) < 40 && d > 1) {
              const f = 0.9 * r.life * n.z;
              n.vx += (dx / d) * f;
              n.vy += (dy / d) * f;
            }
          }

          // Speed limit + dheere normal speed pe wapas
          const sp = Math.hypot(n.vx, n.vy);
          const max = 1.6 * n.z;
          if (sp > max) {
            n.vx = (n.vx / sp) * max;
            n.vy = (n.vy / sp) * max;
          }
          n.vx *= 0.995;
          n.vy *= 0.995;
          if (sp < 0.05) {
            n.vx += (Math.random() - 0.5) * 0.02;
            n.vy += (Math.random() - 0.5) * 0.02;
          }

          if (n.x < -20) n.x = w + 20;
          if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h + 20;
          if (n.y > h + 20) n.y = -20;
        }
      }

      // --- links ---
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const pa = pos(a);
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (Math.abs(dx) > linkDist || Math.abs(dy) > linkDist) continue;
          const d = Math.hypot(dx, dy);
          if (d > linkDist) continue;
          const pb = pos(b);
          const alpha = (1 - d / linkDist) * 0.35 * Math.min(a.z, b.z);
          ctx.strokeStyle = `rgba(${CYAN}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(pa.x, pa.y);
          ctx.lineTo(pb.x, pb.y);
          ctx.stroke();
        }
      }

      // --- cursor links ---
      if (mouse.active) {
        for (const n of nodes) {
          const p = pos(n);
          const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (d < 200) {
            const g = ctx.createLinearGradient(mouse.x, mouse.y, p.x, p.y);
            g.addColorStop(0, `rgba(${LIGHT}, ${(1 - d / 200) * 0.6})`);
            g.addColorStop(1, `rgba(${CYAN}, 0)`);
            ctx.strokeStyle = g;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        }
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 60);
        glow.addColorStop(0, `rgba(${LIGHT}, 0.25)`);
        glow.addColorStop(1, `rgba(${CYAN}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- nodes ---
      for (const n of nodes) {
        const p = pos(n);
        const twinkle = 0.55 + 0.45 * Math.sin(time * 0.03 + n.phase);
        const size = (n.hub ? 2.6 : 1.4) * n.z + 0.4;

        if (n.hub) {
          // Hub nodes ke around pulse ring
          const pulse = (time * 0.012 + n.phase) % 1;
          ctx.strokeStyle = `rgba(${CYAN}, ${(1 - pulse) * 0.5})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, size + pulse * 18, 0, Math.PI * 2);
          ctx.stroke();
        }

        const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 5);
        halo.addColorStop(0, `rgba(${CYAN}, ${0.35 * twinkle * n.z})`);
        halo.addColorStop(1, `rgba(${CYAN}, 0)`);
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${LIGHT}, ${(0.5 + 0.5 * twinkle) * n.z})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- data packets ---
      if (!reduced) {
        if (time % 14 === 0 && packets.length < 18) spawnPacket();
        packets = packets.filter((pk) => {
          pk.t += pk.speed;
          if (pk.t >= 1 || Math.hypot(pk.a.x - pk.b.x, pk.a.y - pk.b.y) > linkDist * 1.2) return false;
          const pa = pos(pk.a);
          const pb = pos(pk.b);
          const x = pa.x + (pb.x - pa.x) * pk.t;
          const y = pa.y + (pb.y - pa.y) * pk.t;
          const tail = Math.max(0, pk.t - 0.18);
          const tx = pa.x + (pb.x - pa.x) * tail;
          const ty = pa.y + (pb.y - pa.y) * tail;

          const g = ctx.createLinearGradient(tx, ty, x, y);
          g.addColorStop(0, `rgba(${LIGHT}, 0)`);
          g.addColorStop(1, `rgba(${LIGHT}, 0.9)`);
          ctx.strokeStyle = g;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.lineWidth = 1;

          ctx.fillStyle = "rgba(255,255,255,0.95)";
          ctx.shadowColor = `rgba(${LIGHT}, 1)`;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(x, y, 1.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          return true;
        });
      }

      // --- ripples ---
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.r += 6;
        r.life *= 0.96;
        ctx.strokeStyle = `rgba(${LIGHT}, ${r.life * 0.6})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1;
        if (r.life < 0.03) ripples.splice(i, 1);
      }

      if (running) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // --- events (canvas pointer-events-none hai, isliye host section pe sunte hain) ---
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = e.pointerType === "mouse";
      parallax.tx = (mouse.x / w - 0.5) * -2;
      parallax.ty = (mouse.y / h - 0.5) * -2;
    };
    const onLeave = () => {
      mouse.active = false;
      parallax.tx = 0;
      parallax.ty = 0;
    };
    const onDown = (e: PointerEvent) => {
      if ((e.target as Element).closest("a, button")) return;
      const r = canvas.getBoundingClientRect();
      ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, r: 0, life: 1 });
    };

    build();
    if (reduced) draw();

    const ro = new ResizeObserver(() => build());
    ro.observe(host);

    // Screen se bahar ya tab hidden ho to animation band (performance)
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    io.observe(host);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    host.addEventListener("pointerdown", onDown);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      host.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={`absolute inset-0 pointer-events-none ${className}`} />;
}
