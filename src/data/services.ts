export interface ServiceItem {
  id: string;
  category: "infrastructure" | "networking" | "security" | "cloud" | "support" | "telecom";
  title: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
  keyHighlights: { label: string; value: string }[];
}

export const detailedServices: ServiceItem[] = [
  {
    id: "it-infrastructure",
    category: "infrastructure",
    title: "IT Infrastructure Solutions",
    tagline: "Turnkey Enterprise IT Hardware & Systems",
    description: "Design, supply, and installation of complete IT environments including servers, storage, firewalls, switches, and end-user systems. We build secure, scalable infrastructures optimized for performance and reliability.",
    image: "/images/networking-datacenter.jpg",
    badge: "Turnkey Infrastructure",
    features: [
      "High-performance rack & blade server deployments",
      "Enterprise storage architecture (SAN / NAS / All-Flash)",
      "Core, distribution, and edge switching topologies",
      "Workstations, executive laptops & peripheral procurement",
      "Power management (Smart UPS, PDU & rack cooling)"
    ],
    keyHighlights: [
      { label: "Deployment", value: "Turnkey Design to Handover" },
      { label: "Hardware", value: "Tier-1 OEM Partnerships" },
      { label: "Reliability", value: "99.99% Architecture SLA" }
    ]
  },
  {
    id: "networking-structured-cabling",
    category: "networking",
    title: "Networking & Structured Cabling",
    tagline: "High-Speed Fiber Optics, LAN/WAN & Wi-Fi",
    description: "Professional design and deployment of structured cabling systems, fiber optics, LAN/WAN networks, wireless solutions, and network optimization. Ensuring high-speed, stable, and secure connectivity across your organization.",
    image: "/images/networking-datacenter.jpg",
    badge: "Ultra-High Bandwidth",
    features: [
      "Cat6 / Cat6A / Cat7 copper structured cabling certification",
      "Single-mode & Multi-mode fiber optic splicing & OTDR testing",
      "Enterprise Wi-Fi 6 & Wi-Fi 7 high-density wireless mesh",
      "SD-WAN & multi-branch secure site-to-site tunnels",
      "Patch panel dressing, rack containment & Fluke certification"
    ],
    keyHighlights: [
      { label: "Standards", value: "TIA/EIA & ISO Compliant" },
      { label: "Speed", value: "10G / 40G / 100G Fiber Backbone" },
      { label: "Testing", value: "Fluke Networks Certified Reports" }
    ]
  },
  {
    id: "cybersecurity-solutions",
    category: "security",
    title: "Cybersecurity Solutions",
    tagline: "Zero-Trust Perimeter & Multi-Layer Threat Defense",
    description: "End-to-end protection including firewalls, endpoint security, threat monitoring, vulnerability assessments, email security, and data protection. We help businesses safeguard their digital assets against modern cyber threats.",
    image: "/images/cybersecurity-cloud.jpg",
    badge: "Zero-Trust Defense",
    features: [
      "Next-Generation Firewalls (NGFW) & UTM appliances",
      "AI-driven Endpoint Detection & Response (EDR / XDR)",
      "Automated Vulnerability Assessments & Pen Testing (VAPT)",
      "Email security, anti-phishing & domain spoofing shield",
      "Data Loss Prevention (DLP) & ransomware protection"
    ],
    keyHighlights: [
      { label: "Protection", value: "24/7 AI Threat Monitoring" },
      { label: "Compliance", value: "UAE Cybersecurity Standards" },
      { label: "Mitigation", value: "Real-Time Intrusion Blocking" }
    ]
  },
  {
    id: "cloud-virtualization",
    category: "cloud",
    title: "Cloud Services & Virtualization",
    tagline: "Scalable Public, Private & Hybrid Cloud Platforms",
    description: "Migration, deployment, and management of cloud platforms including Microsoft Azure, AWS, and private cloud environments. We deliver virtualization, backup, disaster recovery, and scalable cloud infrastructure.",
    image: "/images/hero-network.jpg",
    badge: "Cloud Transformation",
    features: [
      "Microsoft Azure & Amazon Web Services (AWS) architecture",
      "VMware ESXi & Microsoft Hyper-V virtualization clusters",
      "Cloud migration with zero-downtime cutover strategy",
      "Automated off-site cloud backups & disaster recovery (DRaaS)",
      "Microsoft 365, Exchange Online & SharePoint migrations"
    ],
    keyHighlights: [
      { label: "Platforms", value: "Azure, AWS & Hybrid Cloud" },
      { label: "Virtualization", value: "VMware & Hyper-V" },
      { label: "Recovery", value: "RPO & RTO SLA Assured" }
    ]
  },
  {
    id: "software-automation",
    category: "cloud",
    title: "Software Development & Automation",
    tagline: "Bespoke Web Applications, Mobile Apps & ERP",
    description: "Custom software, mobile apps, workflow automation, ERP integrations, and business process optimization. Tailored solutions designed to improve efficiency and reduce manual workload.",
    image: "/images/hero-network.jpg",
    badge: "Custom Engineering",
    features: [
      "Custom enterprise web portals & responsive SaaS dashboards",
      "Cross-platform iOS & Android mobile business applications",
      "ERP & CRM implementation, customization & integration",
      "Robotic process automation (RPA) & automated workflows",
      "RESTful API development & database performance tuning"
    ],
    keyHighlights: [
      { label: "Stack", value: "Modern Next.js, Node, Python & SQL" },
      { label: "Integration", value: "Full ERP & CRM Data Sync" },
      { label: "Efficiency", value: "Up to 70% Manual Task Reduction" }
    ]
  },
  {
    id: "it-support-managed-services",
    category: "support",
    title: "IT Support & Managed Services",
    tagline: "Proactive 24/7 Helpdesk & Onsite Engineering",
    description: "24/7 monitoring, remote support, onsite support, system maintenance, patching, and performance optimization. We ensure your IT environment runs smoothly with minimal downtime.",
    image: "/images/networking-datacenter.jpg",
    badge: "24/7 SLA Guarantee",
    features: [
      "24/7/365 remote helpdesk & ticketing system access",
      "Dedicated Dubai-based certified onsite field engineers",
      "Automated OS patching, security updates & health audits",
      "Proactive server, network & uptime monitoring (NOC)",
      "Hardware warranty management & vendor escalation"
    ],
    keyHighlights: [
      { label: "Response", value: "< 15 Min SLA Emergency Time" },
      { label: "Coverage", value: "24/7/365 Bur Dubai HQ Base" },
      { label: "Uptime", value: "99.9% Systems Availability" }
    ]
  },
  {
    id: "cctv-security-systems",
    category: "security",
    title: "CCTV & Security Systems",
    tagline: "4K IP Surveillance, Video Analytics & SIRA Standards",
    description: "Installation and configuration of advanced CCTV systems, NVR/DVR solutions, remote monitoring, and AI-based analytics for enhanced security and surveillance.",
    image: "/images/cybersecurity-cloud.jpg",
    badge: "SIRA Compliant",
    features: [
      "Ultra HD 4K IP cameras (Uniview, Hikvision, Dahua & IMOU)",
      "Network Video Recorders (NVR) with high-retention RAID storage",
      "AI video analytics: Facial recognition, vehicle ANPR & tripwire",
      "Mobile and remote live video monitoring applications",
      "Full compliance with Dubai SIRA & UAE security regulations"
    ],
    keyHighlights: [
      { label: "Resolution", value: "Up to 4K Ultra HD & Night Vision" },
      { label: "Compliance", value: "SIRA Approved Specifications" },
      { label: "Intelligence", value: "AI Threat & Motion Analytics" }
    ]
  },
  {
    id: "access-control-time-attendance",
    category: "security",
    title: "Access Control & Time Attendance",
    tagline: "Biometrics, Smart Cards & Automated Turnstiles",
    description: "Biometric systems, RFID access, smart card solutions, and integrated attendance management systems for secure and efficient workforce control.",
    image: "/images/cybersecurity-cloud.jpg",
    badge: "Workforce Security",
    features: [
      "Touchless facial recognition & fingerprint biometric terminals",
      "Encrypted RFID / NFC smart cards and mobile credentials",
      "Automated optical turnstiles, flap barriers & magnetic locks",
      "Real-time time & attendance software integration with HR/Payroll",
      "Multi-door centralized access controllers with emergency fail-safe"
    ],
    keyHighlights: [
      { label: "Verification", value: "Facial, Fingerprint & RFID" },
      { label: "Integration", value: "HR, Payroll & ERP Direct Sync" },
      { label: "Control", value: "Multi-Tier Door Permissions" }
    ]
  },
  {
    id: "servers-storage-backup",
    category: "infrastructure",
    title: "Server, Storage & Backup Solutions",
    tagline: "Enterprise SAN/NAS, Data Lifecycle & Disaster Recovery",
    description: "Enterprise-grade Servers, NAS/SAN storage, cloud backup, disaster recovery planning, and data lifecycle management.",
    image: "/images/networking-datacenter.jpg",
    badge: "Enterprise Resilient",
    features: [
      "Dell, HPE & Lenovo rackmount & blade server setups",
      "QNAP & Synology high-speed enterprise NAS / SAN storage",
      "Veeam automated ransomware-proof data backup pipelines",
      "Comprehensive Disaster Recovery (DR) and business continuity plans",
      "Data deduplication, compression & lifecycle tiered archiving"
    ],
    keyHighlights: [
      { label: "Storage", value: "Dell, HPE, Lenovo, QNAP & Synology" },
      { label: "Backup", value: "Veeam Immutable 3-2-1 Strategy" },
      { label: "Protection", value: "Ransomware Air-Gap Security" }
    ]
  },
  {
    id: "annual-maintenance-contract",
    category: "support",
    title: "Annual Maintenance Contracts (AMC)",
    tagline: "Total IT Peace of Mind with Guaranteed SLA",
    description: "Comprehensive IT maintenance packages covering hardware, software, networks, and security systems — ensuring continuous performance and reliability.",
    image: "/images/networking-datacenter.jpg",
    badge: "Preventive Care",
    features: [
      "Scheduled monthly preventive maintenance & health checkups",
      "Comprehensive & non-comprehensive flexible AMC tiers",
      "Priority response time with guaranteed resolution SLA",
      "Standby hardware replacement support during hardware failure",
      "Quarterly executive IT performance & security audit reports"
    ],
    keyHighlights: [
      { label: "Contract", value: "Customized SLAs & AMC Terms" },
      { label: "Standby", value: "Backup Hardware Availability" },
      { label: "Savings", value: "Predictable IT Budgeting" }
    ]
  },
  {
    id: "telephony-ip-pbx",
    category: "telecom",
    title: "Telephony & IP Communication Systems",
    tagline: "Cisco, Grandstream, Yeastar, Avaya & MS Teams Voice",
    description: "We design and deploy advanced telephony solutions including IP PBX systems, VoIP platforms, SIP trunking, call routing, IVR, voicemail-to-email, and unified communication features. Our solutions ensure crystal-clear voice quality, secure communication, and seamless integration with your existing IT infrastructure. We support leading technologies such as Cisco, Grandstream, Yeastar, Avaya, and Microsoft Teams Voice.",
    image: "/images/networking-datacenter.jpg",
    badge: "Unified Telecom",
    features: [
      "Enterprise IP PBX systems & Cloud VoIP platforms",
      "SIP trunking, interactive IVR & smart call routing queues",
      "Voicemail-to-email & unified communications integration",
      "Cisco, Grandstream, Yeastar, Avaya & Microsoft Teams Voice",
      "Mobile softphone integration for remote and hybrid teams"
    ],
    keyHighlights: [
      { label: "Technologies", value: "Cisco, Grandstream, Yeastar, Avaya" },
      { label: "Cloud Comms", value: "Microsoft Teams Voice Integration" },
      { label: "Voice Quality", value: "HD Crystal-Clear SIP Audio" }
    ]
  },
  {
    id: "audio-video-conferencing",
    category: "telecom",
    title: "Audio & Video Conferencing Solutions",
    tagline: "Logitech, Poly, Yealink, Teams, Zoom & Webex",
    description: "We provide complete conferencing systems for meeting rooms, boardrooms, training halls, and remote collaboration environments. Our solutions include high-definition video conferencing, wireless presentation systems, smart meeting room automation, digital whiteboards, and integrated audio systems. We deliver platforms that support Microsoft Teams, Zoom, Webex, Google Meet, and enterprise-grade hardware from Logitech, Poly, Yealink, and more.",
    image: "/images/hero-network.jpg",
    badge: "Smart Collaboration",
    features: [
      "Boardrooms, meeting rooms, training halls & executive suites",
      "4K HD video conferencing with auto-framing & speaker tracking",
      "Wireless presentation systems & interactive digital whiteboards",
      "Microsoft Teams, Zoom Rooms, Cisco Webex & Google Meet",
      "Enterprise hardware from Logitech, Poly, Yealink & commercial DSP"
    ],
    keyHighlights: [
      { label: "Ecosystem", value: "Teams, Zoom, Webex, Google Meet" },
      { label: "Hardware", value: "Logitech, Poly, Yealink & DSP" },
      { label: "Automation", value: "One-Touch Smart Room Launch" }
    ]
  }
];

export interface PartnerCategory {
  category: string;
  description: string;
  partners: { name: string; tag: string }[];
}

export const solutionPartners: PartnerCategory[] = [
  {
    category: "Networking & Infrastructure",
    description: "Enterprise routing, switching, wireless access points & fiber backbones",
    partners: [
      { name: "HUAWEI eKit", tag: "Enterprise Network" },
      { name: "CISCO", tag: "Core Routing & Catalyst" },
      { name: "Ruijie", tag: "Smart Enterprise Switching" },
      { name: "Reyee", tag: "Cloud Managed Mesh" },
      { name: "Aruba Networks", tag: "HPE Enterprise Wi-Fi" },
      { name: "tp-link", tag: "Omada Commercial" },
      { name: "Ubiquiti Networks", tag: "UniFi Infrastructure" },
    ]
  },
  {
    category: "Cybersecurity",
    description: "Next-gen firewalls, zero-trust network access & endpoint threat defense",
    partners: [
      { name: "FORTINET", tag: "FortiGate NGFW" },
      { name: "SOPHOS", tag: "Synchronized Security" },
      { name: "SONICWALL", tag: "Advanced Threat Protection" },
      { name: "kaspersky", tag: "Endpoint Cyber Shield" },
      { name: "eset", tag: "Proactive Anti-Malware" },
    ]
  },
  {
    category: "Cloud & Productivity",
    description: "Enterprise cloud hosting, business emails, and collaboration suites",
    partners: [
      { name: "Microsoft", tag: "Azure & M365" },
      { name: "Google Workspace", tag: "Cloud Business Suite" },
      { name: "AWS", tag: "Amazon Web Services" },
    ]
  },
  {
    category: "Servers, Storage & Backup",
    description: "Enterprise rackmount servers, SAN/NAS storage arrays & backup software",
    partners: [
      { name: "DELL Technologies", tag: "PowerEdge Servers" },
      { name: "hp / HPE", tag: "ProLiant Servers" },
      { name: "Lenovo", tag: "ThinkSystem Infrastructure" },
      { name: "QNAP", tag: "Enterprise Turbo NAS" },
      { name: "Synology", tag: "Scalable Storage & Backup" },
      { name: "VEEAM", tag: "Modern Data Protection" },
    ]
  },
  {
    category: "Telephony & Unified Communications",
    description: "IP PBX phone systems, VoIP endpoints & SIP communication servers",
    partners: [
      { name: "GRANDSTREAM", tag: "IP PBX & VoIP Phones" },
      { name: "Yeastar", tag: "P-Series Cloud PBX" },
      { name: "AVAYA", tag: "Enterprise Unified Comms" },
    ]
  },
  {
    category: "Audio & Video Conferencing",
    description: "Boardroom cameras, speaker tracking bars & collaboration controllers",
    partners: [
      { name: "logitech", tag: "Rally & MeetUp Bars" },
      { name: "Yealink", tag: "Teams & Zoom Certified Rooms" },
      { name: "poly (Polycom)", tag: "Studio X Video Systems" },
    ]
  },
  {
    category: "Security & Surveillance",
    description: "SIRA compliant 4K IP cameras, NVRs, smart biometrics & AI analytics",
    partners: [
      { name: "unv (Uniview)", tag: "IP Surveillance Solutions" },
      { name: "HIKVISION", tag: "Commercial CCTV & Access" },
      { name: "dahua Technology", tag: "AI Video & ANPR Systems" },
      { name: "imou", tag: "Smart Wireless Security" },
    ]
  }
];

export interface LeadershipMember {
  name: string;
  role: string;
  department: string;
  mobile: string;
  email: string;
  whatsapp: string;
  image?: string;
}

export const leadershipTeam: LeadershipMember[] = [
  {
    name: "Thaufiq Sheik",
    role: "Chief Executive Officer (CEO)",
    department: "Executive Leadership",
    mobile: "+971 55 227 3378",
    email: "Thaufiq@catscomputers.com",
    whatsapp: "971552273378",
    image: "/images/cats-ceo-huawei-headquarters.png"
  },
  {
    name: "Mansoor Sheik",
    role: "Sales & Business Development Manager",
    department: "Commercial & Strategic Accounts",
    mobile: "+971 52 699 3378",
    email: "Mansoor@catscomputers.com",
    whatsapp: "971526993378"
  },
  {
    name: "Muqthar",
    role: "Sales & Service Manager",
    department: "Client Services & SLA Management",
    mobile: "+971 56 706 3688",
    email: "Muqthar@catscomputers.com",
    whatsapp: "971567063688"
  },
  {
    name: "Salim Shaikh",
    role: "Project Manager – IT Infrastructure",
    department: "Engineering & Field Deployments",
    mobile: "+971 58 526 3378",
    email: "Info@catscomputers.com",
    whatsapp: "971585263378"
  }
];
