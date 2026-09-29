// Inner pages (About, Services, Why Choose Us, Partners, Industries, Contact, Service Detail)
// ke extra sections ka content. Text yahan badlein, pages apne aap update ho jayenge.

import type { ServiceItem } from "./services";

export type IconName =
  | "search"
  | "pencil"
  | "truck"
  | "wrench"
  | "shield"
  | "headset"
  | "clipboard"
  | "package"
  | "refresh"
  | "phone"
  | "mail"
  | "message"
  | "calendar"
  | "check"
  | "building"
  | "rocket";

export interface ProcessStep {
  title: string;
  description: string;
  icon: IconName;
}

export interface FaqItem {
  q: string;
  a: string;
}

// ---------- Process timelines ----------

export const deliveryProcess: ProcessStep[] = [
  { title: "Discovery & Site Survey", icon: "search", description: "Our engineers visit your premises, map existing infrastructure and document business requirements." },
  { title: "Solution Design", icon: "pencil", description: "We prepare network diagrams, bill of materials and a clear scope with timelines for your approval." },
  { title: "Supply & Installation", icon: "truck", description: "Equipment is procured, staged and installed by our in-house team with minimal disruption to operations." },
  { title: "Testing & Handover", icon: "clipboard", description: "Every system is configured, tested and documented, and your staff receive a walkthrough before sign-off." },
  { title: "Ongoing Support", icon: "headset", description: "Post-deployment monitoring, maintenance visits and helpdesk support keep your systems running." },
];

export const procurementProcess: ProcessStep[] = [
  { title: "Requirement Mapping", icon: "clipboard", description: "We understand the workload, user count and budget before recommending any brand or model." },
  { title: "Vendor-Neutral Sizing", icon: "search", description: "Options from multiple OEMs are compared on performance, licensing and long-term cost." },
  { title: "Sourcing & Staging", icon: "package", description: "Hardware and licences are sourced, then pre-configured in our workshop before delivery." },
  { title: "Deployment", icon: "truck", description: "Our engineers install and integrate the equipment with your existing environment." },
  { title: "Warranty & RMA", icon: "refresh", description: "We coordinate warranty claims and replacements with the manufacturer on your behalf." },
];

export const sectorOnboarding: ProcessStep[] = [
  { title: "Sector Assessment", icon: "building", description: "We review how your industry operates, its peak hours, security needs and regulatory requirements." },
  { title: "Compliance Planning", icon: "shield", description: "Designs account for the approvals and standards that apply to your sector and location." },
  { title: "Phased Rollout", icon: "rocket", description: "Work is scheduled around your business hours so branches, stores or wards stay operational." },
  { title: "Staff Enablement", icon: "headset", description: "Your team gets practical training on the new systems along with handover documentation." },
];

export const contactJourney: ProcessStep[] = [
  { title: "Send Your Enquiry", icon: "message", description: "Reach us by phone, WhatsApp, email or the quote form with a short description of your need." },
  { title: "Quick Call-Back", icon: "phone", description: "A member of our team contacts you to clarify requirements during business hours." },
  { title: "Site Visit / Remote Review", icon: "calendar", description: "Where needed, an engineer visits your site or reviews the setup remotely." },
  { title: "Proposal & Quotation", icon: "check", description: "You receive a clear proposal with scope, timeline and pricing to review." },
];

export const companyJourney: ProcessStep[] = [
  { title: "Listen First", icon: "headset", description: "Every engagement starts with understanding your business, not pushing a product." },
  { title: "Engineer the Right Fit", icon: "pencil", description: "We design solutions sized for today with room to grow tomorrow." },
  { title: "Deliver Turnkey", icon: "truck", description: "One team handles supply, installation, configuration and documentation." },
  { title: "Stay Accountable", icon: "shield", description: "Maintenance, AMC and support mean we remain your long-term IT partner." },
];

// ---------- Engagement models ----------

export interface EngagementModel {
  name: string;
  tagline: string;
  icon: IconName;
  featured?: boolean;
  points: string[];
  cta: string;
}

export const engagementModels: EngagementModel[] = [
  {
    name: "Turnkey Project",
    tagline: "New office, branch or full infrastructure upgrade",
    icon: "rocket",
    points: [
      "Site survey & solution design",
      "Supply of hardware and licences",
      "Installation, configuration & testing",
      "Documentation and handover",
    ],
    cta: "Plan a Project",
  },
  {
    name: "Annual Maintenance (AMC)",
    tagline: "Predictable yearly support for your IT estate",
    icon: "shield",
    featured: true,
    points: [
      "Scheduled preventive maintenance visits",
      "Priority response for breakdowns",
      "Helpdesk for day-to-day issues",
      "Asset and warranty tracking",
    ],
    cta: "Request AMC Proposal",
  },
  {
    name: "On-Demand Support",
    tagline: "Pay-per-call help when you need it",
    icon: "wrench",
    points: [
      "Troubleshooting & repairs",
      "Moves, adds and changes",
      "Remote or on-site assistance",
      "No long-term commitment",
    ],
    cta: "Book a Technician",
  },
];

// ---------- Service areas ----------

export const dubaiAreas = [
  "Bur Dubai",
  "Deira",
  "Business Bay",
  "DIFC",
  "Downtown Dubai",
  "Dubai Marina",
  "JLT",
  "Al Quoz",
  "Jebel Ali",
  "Dubai Silicon Oasis",
  "Dubai South",
  "Al Barsha",
];

export const uaeEmirates = ["Dubai", "Sharjah", "Abu Dhabi", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"];

// ---------- FAQs ----------

export const aboutFaqs: FaqItem[] = [
  { q: "Where is CATS COMPUTERS L.L.C located?", a: "Our office is at Office #6, Water Tank Building, near Souq Al Fahidi, Al Musallah Street, Bur Dubai. You are welcome to visit during business hours, Monday to Saturday." },
  { q: "What kind of companies do you work with?", a: "We support offices, retail stores, hospitality, healthcare, logistics, education and government-related organisations, from small teams to multi-branch businesses." },
  { q: "Do you only sell hardware?", a: "No. We handle the complete lifecycle: consultation, design, supply, installation, configuration, and ongoing maintenance and support." },
  { q: "Can you work with our existing IT vendor or team?", a: "Yes. We regularly collaborate with in-house IT staff and other vendors, and can take over specific systems or the full environment." },
];

export const servicesFaqs: FaqItem[] = [
  { q: "Can I combine multiple services in one project?", a: "Yes. Many clients bundle networking, CCTV, access control and AMC together. A single design and one point of contact reduces cost and coordination effort." },
  { q: "Do you provide a site survey before quoting?", a: "For most infrastructure, cabling and security projects we recommend a site survey so the quotation reflects your actual premises and requirements." },
  { q: "How long does a typical installation take?", a: "It depends on scope. Small office setups can be completed in days, while multi-floor or multi-branch projects are scheduled in phases. You receive a timeline with the proposal." },
  { q: "Do you support systems you didn't install?", a: "Yes. We can audit, maintain and support existing equipment, and include it under an AMC after an initial health check." },
  { q: "Is remote support available?", a: "Yes. Many issues are resolved remotely, and an engineer is dispatched on-site when hands-on work is required." },
];

export const whyFaqs: FaqItem[] = [
  { q: "What makes you different from a hardware reseller?", a: "We take responsibility for the outcome, not just the box: design, installation, documentation and long-term support are part of how we work." },
  { q: "Do you offer after-sales support?", a: "Yes. Every project can be followed by an AMC or on-demand support so your systems keep running after handover." },
  { q: "Will we get documentation for our setup?", a: "Yes. Handover includes the key configuration details, diagrams and credentials your team needs to operate the systems." },
  { q: "Can you work outside office hours?", a: "Where business continuity requires it, installations and maintenance can be scheduled after hours or on weekends by prior arrangement." },
];

export const partnersFaqs: FaqItem[] = [
  { q: "Can you supply a specific brand we already use?", a: "In most cases, yes. Share the brand and model and we will confirm availability, lead time and compatible alternatives." },
  { q: "Do products come with manufacturer warranty?", a: "Products are covered by the respective manufacturer's warranty terms. We coordinate warranty claims and replacements on your behalf." },
  { q: "How do you choose which brand to recommend?", a: "Recommendations are based on your workload, scale, budget and existing ecosystem, so you get the right fit rather than a fixed brand." },
  { q: "Do you handle software licensing and renewals?", a: "Yes. We can supply licences and subscriptions and remind you ahead of renewal dates to avoid service interruptions." },
];

export const industriesFaqs: FaqItem[] = [
  { q: "Can you work around our business hours?", a: "Yes. For retail, hospitality and healthcare clients we plan installations in phases or after hours so operations are not disrupted." },
  { q: "Do you handle multi-branch rollouts?", a: "Yes. We standardise the design once and replicate it across branches, keeping configurations consistent and easier to manage." },
  { q: "Do your designs consider regulatory requirements?", a: "Yes. Security, CCTV and network designs take into account the approvals and standards relevant to your sector and location in the UAE." },
  { q: "Is our industry not listed?", a: "Our solutions are adaptable. Contact us with your requirements and we will recommend a suitable approach." },
];

export const contactFaqs: FaqItem[] = [
  { q: "What are your business hours?", a: "Monday to Saturday, 9:00 AM to 8:00 PM (GST). Messages received outside these hours are answered on the next working day." },
  { q: "Which is the fastest way to reach you?", a: "For urgent matters, call +971 4 227 3378 or message us on WhatsApp at +971 55 227 3378." },
  { q: "Is the initial consultation free?", a: "Yes, the initial discussion to understand your requirement is free of charge." },
  { q: "What should I include in my enquiry?", a: "A short description of the need, your location, approximate number of users or devices, and your preferred timeline helps us respond faster." },
];

// Service detail page ke liye har service ke hisaab se FAQs
export function serviceFaqs(service: ServiceItem): FaqItem[] {
  const short = service.title.split(" & ")[0];
  return [
    { q: `What is included in your ${service.title} service?`, a: `${service.description} The exact scope is confirmed in a written proposal after we understand your requirement.` },
    { q: `Do you provide a site survey for ${short}?`, a: "Yes. For on-premise work we recommend a site visit so the design and quotation match your actual environment." },
    { q: "Can this be covered under an AMC?", a: "Yes. After installation, the systems can be included in an Annual Maintenance Contract with scheduled visits and priority support." },
    { q: "Which areas do you serve?", a: "We are based in Bur Dubai and serve clients across Dubai and other emirates in the UAE." },
  ];
}
