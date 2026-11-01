// Portfolio content model — Version 2
// Public-facing content is limited to work, responsibilities and project states
// confirmed in the portfolio brief and the owner's follow-up answers.

export type ProjectStatus =
  | "Live"
  | "Delivered"
  | "In development"
  | "Academic prototype"
  | "Archived project"
  | "Concept";

export type Project = {
  slug: string;
  title: string;
  period: string;
  role: string;
  status: ProjectStatus;
  category: string;
  summary: string;
  problem?: string;
  context?: string;
  constraints?: string[];
  responsibilities?: string[];
  architecture?: string;
  decisions?: { title: string; detail: string }[];
  implementation?: string[];
  complete?: string[];
  remaining?: string[];
  lessons?: string[];
  stack: string[];
  highlights?: string[];
  imageUrl?: string;
  gallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type ExperienceEntry = {
  id: number;
  company: string;
  role: string;
  period: string;
  location?: string;
  arrangement?: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export type CertificationEntry = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description: string;
};

export type EducationEntry = {
  id: number;
  institution: string;
  qualification: string;
  period: string;
  details?: string;
  status?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type EngineeringNote = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
};

export const personalInfo = {
  name: "Kambale Kiregha Ezéchiel",
  headline: "Software Engineer · Backend & Full-Stack Systems",
  positioning: "I build software for the way businesses actually work.",
  title: "Software Engineer · Backend & Full-Stack Systems",
  mission:
    "I build full-stack business applications, with a particular focus on backend systems, commerce workflows and the software that helps teams manage day-to-day operations.",
  email: "kkiregha@gmail.com",
  github: "https://github.com/EzechielKiregha",
  linkedin: "https://www.linkedin.com/in/kambale-kiregha-125a60264/",
  location: "Kigali, Rwanda",
  availability:
    "Open to backend and full-stack engineering roles, remote opportunities, and selected freelance or contract projects.",
  currently:
    "Working on commerce and business software, including USCOR Marketplace 2.0, while my BSc in Information Technology at AUCA moves through its final completion and graduation stage.",
  cvUrl: "/Kambale_Kiregha_Ezechiel_CV.pdf",
  careerFocus: [
    "Backend Software Engineer",
    "Full-Stack Software Engineer",
    "Node.js / NestJS Engineer",
    "Platform / Systems Engineer",
    "Remote international opportunities",
    "Rwanda and East African opportunities",
    "Freelance and contract engineering",
    "Entrepreneurship and technical partnerships",
    "System architecture and technical leadership",
  ],
  publicWork: [
    "Live project links",
    "Public GitHub repositories",
    "Application screenshots",
    "Architecture diagrams",
    "My individual contributions to collaborative projects",
    "Technical challenges and engineering decisions",
  ],
};

export const about = {
  summary:
    "A problem I keep returning to is how a business manages its everyday work. Products live in one place, orders in another, sales are recorded separately, and staff need a reliable way to see what is happening. I enjoy turning those disconnected workflows into software that people can actually use and that another developer can maintain.",
  philosophy:
    "I work across frontend and backend development, but I am especially interested in data modelling, API design, permissions, integrations and the business rules behind an application. Much of my recent work has involved commerce and operations software: marketplaces, point-of-sale workflows, inventory, reporting and multi-role applications.",
  entrepreneurialNote:
    "I founded Kiregha Corporation around a long-term ambition to use practical technology and entrepreneurship to expand opportunities for African youth and underserved communities. The initiative is currently on hold while I focus on engineering work and completing my studies.",
  interests: [
    "Commerce platforms",
    "Multi-store and multi-tenant systems",
    "Point-of-sale systems",
    "Offline-first applications",
    "Business process software",
    "Practical AI-assisted workflows",
  ],
};

export const skills: {
  core: SkillGroup[];
  additional: SkillGroup[];
  interests: string[];
} = {
  core: [
    {
      title: "Languages",
      items: ["TypeScript", "JavaScript"],
    },
    {
      title: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"],
    },
    {
      title: "Backend",
      items: ["Node.js", "NestJS"],
    },
    {
      title: "APIs and data access",
      items: ["GraphQL", "REST", "Apollo", "Axios"],
    },
    {
      title: "Data and persistence",
      items: ["PostgreSQL", "Prisma", "MySQL", "SQLite", "MongoDB"],
    },
    {
      title: "Application engineering",
      items: [
        "Authentication and authorization",
        "Role-based access control",
        "Business workflows",
        "Payment and service integrations",
        "POS and inventory workflows",
        "Offline data synchronization",
      ],
    },
    {
      title: "Frontend state and data workflows",
      items: ["TanStack Query", "Zustand", "Apollo Client", "Zod"],
    },
  ],
  additional: [
    {
      title: "Languages",
      items: ["Java", "Python"],
    },
    {
      title: "Frameworks and platforms",
      items: ["Spring Boot", "Django", "Flask", "Flutter"],
    },
    {
      title: "DevOps and tooling",
      items: ["Docker", "CI/CD", "Nginx", "Git"],
    },
  ],
  interests: [
    "Commerce platforms",
    "Multi-store and multi-tenant systems",
    "Point-of-sale systems",
    "Offline-first applications",
    "Business process software",
    "Practical AI-assisted workflows",
  ],
};

export const journey: TimelineEntry[] = [
  {
    year: "2021",
    title: "Building the foundations",
    description:
      "A foundation-building stage: learning programming and web-development fundamentals, experimenting with code and developing the habit of turning what I learned into working applications.",
  },
  {
    year: "2022",
    title: "University and application development",
    description:
      "Began my Information Technology studies at Adventist University of Central Africa. Worked on application-development projects, including an Airbnb-style property rental clone, while strengthening my understanding of programming, databases and networking fundamentals.",
  },
  {
    year: "2023",
    title: "Academic projects and broader engineering practice",
    description:
      "Worked on projects including GalacTicket and Empower Your Mind. These projects expanded my experience with application backends, user-facing workflows and integrating multiple parts of a software system.",
  },
  {
    year: "2024",
    title: "Software engineering training and a deployed learning platform",
    description:
      "Completed the ALX Africa Software Engineering programme with a backend specialization. Built and deployed K-Corp E-Learning on 16 July 2024 as a solo developer, working across the application, authentication, subscriptions and institution/student workflows.",
  },
  {
    year: "2025",
    title: "Professional product engineering at URUTI Hub",
    description:
      "Worked with URUTI Hub from June through October 2025 as a Software Developer Intern. Contributed across USCOR commerce and POS workflows, including NestJS/GraphQL backend work, frontend development, inventory, shift management, receipts, access control, integrations and offline POS synchronization. The formal internship logbook recorded 1 July–20 August 2025, the two-month period required by the programme.",
  },
  {
    year: "2026",
    title: "Business systems and deeper product engineering",
    description:
      "Continued developing USCOR Marketplace 2.0 and worked on business applications including Lachs Golden ERP, KAMEGA Shop and Beauty Nails. The focus has increasingly been on real operational workflows, multi-role access, commerce systems, POS, reporting, deployment and maintaining software used by businesses.",
  },
];

export const experiences: ExperienceEntry[] = [
  {
    id: 1,
    company: "URUTI Hub",
    role: "Software Developer Intern",
    period: "June – October 2025",
    location: "Kigali, Rwanda",
    arrangement: "Hybrid — onsite and remote",
    description:
      "Contributed to the development of commerce and point-of-sale software, working independently on assigned modules while collaborating directly with management and other developers through team discussions and code reviews. The actual engagement ran from June to October 2025. The internship logbook recorded 1 July to 20 August 2025 to satisfy the required two-month placement period.",
    highlights: [
      "Developed backend functionality using NestJS, GraphQL, Prisma and PostgreSQL.",
      "Worked on the Next.js / React application and connected user-facing workflows to backend services.",
      "Implemented and maintained POS sales-processing, shift-management and receipt workflows.",
      "Worked on products, inventory, orders and store-management functionality.",
      "Implemented authentication and role-based permissions across application user types.",
      "Contributed to loyalty, KYC, account and payment-integration modules.",
      "Worked on offline POS functionality and synchronization workflows.",
      "Handled deployment, debugging, maintenance and technical decisions for assigned modules.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "NestJS",
      "GraphQL",
      "Apollo",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    id: 2,
    company: "Kiregha Corporation",
    role: "Founder",
    period: "Founder-led initiative",
    location: "Kigali, Rwanda",
    description:
      "Founded as a long-term technology and entrepreneurship initiative focused on expanding access to practical technology, learning and opportunity for African youth and underserved communities, particularly in the region. The initiative is currently on hold; it is presented here as part of my entrepreneurial journey, not as a claim of a large operating company.",
    highlights: [
      "Established the vision for a technology-led initiative focused on education, entrepreneurship and opportunity.",
      "Explored software products and digital services that address practical business and community needs.",
    ],
    technologies: ["TypeScript", "Next.js", "NestJS"],
  },
];

export const certifications: CertificationEntry[] = [
  {
    id: 1,
    name: "Software Engineering — Backend Specialization",
    issuer: "ALX Africa",
    date: "15 November 2024",
    credentialUrl:
      "https://raw.githubusercontent.com/EzechielKiregha/EzechielKiregha/refs/heads/main/portfolio-assets/certifications/alx.jfif",
    description:
      "Completed the ALX Africa Software Engineering programme with a backend specialization.",
  },
  {
    id: 2,
    name: "Cisco Networking Academy",
    issuer: "Cisco Networking Academy",
    date: "22 November 2022",
    credentialUrl:
      "https://raw.githubusercontent.com/EzechielKiregha/EzechielKiregha/refs/heads/main/portfolio-assets/certifications/net-acad.png",
    description:
      "Networking studies covering foundational networking concepts.",
  },
  {
    id: 3,
    name: "DevOps Training",
    issuer: "Adventist University of Central Africa",
    date: "26 November 2024",
    credentialUrl:
      "https://raw.githubusercontent.com/EzechielKiregha/EzechielKiregha/refs/heads/main/portfolio-assets/certifications/internet-society.png",
    description:
      "Additional technical training in DevOps as part of my professional development.",
  },
];

export const education: EducationEntry[] = [
  {
    id: 1,
    institution: "Adventist University of Central Africa (AUCA)",
    qualification: "BSc Information Technology — Software Engineering",
    period: "2022 – 2026",
    details:
      "Undergraduate studies in Information Technology with a focus on software engineering, application development and information systems.",
    status:
      "Degree completion and formal graduation pending; not presented as a completed degree.",
  },
  {
    id: 2,
    institution: "ALX Africa",
    qualification: "Software Engineering — Backend Specialization",
    period: "2024",
    details:
      "Software engineering training with a backend specialization, completed in November 2024.",
    status: "Completed",
  },
  {
    id: 3,
    institution: "Institut Kambali",
    qualification: "Baccalauréat Commerciale et Gestion (Informatique)",
    period: "2020",
    details:
      "Secondary-school baccalaureate in the Commerce and Management stream with an Informatics focus, completed in Butembo, North Kivu, DRC.",
    status: "Completed",
  },
];

export const projects: Project[] = [
  {
    slug: "uscor-marketplace-2",
    title: "USCOR Marketplace 2.0",
    period: "November 2025 – Present",
    role: "Full-Stack Software Developer",
    status: "Live",
    category: "Commerce Platform",
    imageUrl: "/uscor.png",
    summary:
      "USCOR is a commerce and operations platform built around the needs of businesses that manage products, customers, orders, stores and point-of-sale activity. The platform combines a public-facing marketplace with the operational tools businesses need behind the scenes. It is deployed publicly, with some modules complete and others continuing through development.",
    problem:
      "Businesses need connected tools for product catalogues, customers, orders, stores and POS activity instead of managing each operational workflow in isolation.",
    context:
      "Multi-store commerce and operations platform developed through the URUTI Hub engagement and continued as USCOR Marketplace 2.0.",
    constraints: [
      "Maintaining clear business and store boundaries across a multi-store system.",
      "Separating access by user type and role.",
      "Supporting POS workflows in environments with unreliable connectivity.",
    ],
    responsibilities: [
      "Next.js / React frontend development.",
      "NestJS GraphQL backend and API development.",
      "Product, inventory, order, business and store workflows.",
      "POS sales processing, shift management and receipt workflows.",
      "Authentication and role-based access control.",
      "Loyalty, KYC, account and payment-integration modules.",
      "Offline POS and synchronization workflows.",
      "Deployment, debugging, maintenance and technical decisions.",
    ],
    architecture:
      "Next.js / React frontend with a NestJS GraphQL backend, PostgreSQL database and Prisma data access layer. The application also uses Apollo tooling and client-side state/data-management tools for its commerce workflows.",
    decisions: [
      {
        title: "Multi-store and role boundaries",
        detail:
          "The application is designed around businesses, stores and different user types. Store context and role-based permissions are important parts of how access to operational workflows is controlled.",
      },
      {
        title: "Connectivity-aware POS workflows",
        detail:
          "Offline POS and synchronization are treated as product requirements so sales workflows can account for unreliable connectivity.",
      },
    ],
    complete: [
      "Public marketplace deployment.",
      "Implemented commerce and business-operation modules.",
      "POS workflows including sales processing, shifts and receipts.",
      "Role-based access and account workflows.",
      "Offline POS and synchronization work.",
    ],
    remaining: [
      "Some platform modules remain under development.",
      "AI-POS is a future direction / concept and is not represented as a shipped capability.",
    ],
    lessons: [
      "Business software requires careful modelling of roles, stores and operational responsibilities, not only screens and CRUD endpoints.",
      "Connectivity constraints need to be considered in the design of POS workflows rather than added as an afterthought.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "Apollo",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "IndexedDB",
    ],
    highlights: [
      "Multi-store commerce",
      "B2B workflows",
      "POS and receipts",
      "Role-based access",
      "Offline POS synchronization",
    ],
    githubUrl: "https://github.com/EzechielKiregha/uscor-marketplace",
    liveUrl: "https://uscor-marketplace-2-0-front-ui.vercel.app/",
    featured: true,
  },
  {
    slug: "lachs-golden-erp",
    title: "Lachs Golden ERP",
    period: "November 2024 – March 2025",
    role: "Full-Stack Developer",
    status: "Live",
    category: "ERP / Business Systems",
    imageUrl: "/inteligent-erp.png",
    summary:
      "A client business-management application that brings operational information and role-specific workflows into one system. The ERP has been delivered, deployed and used in the client's operations. Some requirements remain unfinished, and the application continues to receive maintenance and further development.",
    problem:
      "The client needed a central application for managing business operations and giving different staff members access to the workflows relevant to their responsibilities.",
    context:
      "Client project for Lachs Golden, delivered as a business ERP and subsequently maintained.",
    responsibilities: [
      "Full-stack application development.",
      "Role-based application workflows for management, employees, accounting, HR and administrative users.",
      "Operational dashboards and reporting workflows.",
      "PDF report and document-generation workflows.",
      "Deployment, maintenance and continued development.",
    ],
    architecture:
      "Next.js application with Auth.js authentication, TanStack Query and Axios for data workflows, Prisma ORM and PostgreSQL. PDF reporting is handled through Puppeteer.",
    complete: [
      "Delivered and deployed application.",
      "Core role-specific business workflows used in client operations.",
      "Reporting and PDF document-generation capabilities.",
    ],
    remaining: [
      "Some client requirements remain unfinished and are handled through continued maintenance or further development.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Auth.js",
      "TanStack Query",
      "Axios",
      "Prisma",
      "PostgreSQL",
      "Puppeteer",
      "Shadcn UI",
      "Tailwind CSS",
    ],
    highlights: [
      "Client-delivered ERP",
      "Role-based workflows",
      "Operational reporting",
      "PDF report generation",
      "Ongoing maintenance",
    ],
    githubUrl:
      "https://github.com/EzechielKiregha/Intelligent-ERP-System-for-Lachs-Golden.git",
    liveUrl: "https://intelligent-erp-system-for-lachs-go.vercel.app/",
    featured: true,
  },
  {
    slug: "kamega-shop",
    title: "KAMEGA Shop — BOUTIQUE KAMEGA",
    period: "May – June 2026",
    role: "Full-Stack Developer",
    status: "Live",
    category: "Retail / E-commerce",
    imageUrl: "/kamega-shop.png",
    summary:
      "A retail platform for BOUTIQUE KAMEGA that connects an online shop with the tools used to run in-store sales. The website is live and delivered to the business, with real users or transactions. Its POS, administration and reporting capabilities are implemented, while development continues.",
    problem:
      "Online and in-store retail activity need to work together so the business can manage products, sales and customer activity through connected workflows.",
    context: "Retail e-commerce and POS for a clothing and footwear business.",
    responsibilities: [
      "Full-stack development across the storefront and back-office application.",
      "POS functionality and sales workflows.",
      "Order and receipt workflows.",
      "Administration and reporting functionality.",
    ],
    architecture:
      "Next.js and TypeScript application backed by PostgreSQL and Prisma, with client-side data fetching, state management and validation for retail workflows.",
    complete: [
      "Live online storefront delivered to the business.",
      "POS functionality implemented.",
      "Administration and reporting functionality implemented.",
      "Real users or transactions on the deployed platform.",
    ],
    remaining: ["Further development is ongoing."],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Axios",
      "TanStack Query",
      "Zustand",
      "Zod",
      "Shadcn UI",
      "Tailwind CSS",
      "Vercel Blob",
    ],
    highlights: [
      "Retail e-commerce",
      "Point of sale",
      "Order and receipt workflows",
      "Administration",
      "Reporting",
    ],
    liveUrl: "https://kamega-shop.vercel.app/",
    featured: true,
  },
  {
    slug: "beauty-nails",
    title: "Beauty Nails Salon Management System",
    period: "February 2025 – August 2026",
    role: "Full-Stack Developer",
    status: "Live",
    category: "Salon Management",
    imageUrl: "/beauty-nails.png",
    summary:
      "A salon-management application developed as an AUCA academic project and for a salon client in Goma, DRC. The system supports the day-to-day work of a salon through service, appointment and role-specific management workflows. It has been delivered and is operational.",
    problem:
      "A salon needs more than a simple booking page: its services, appointments, clients, workers and administrative tasks need to be managed as part of daily operations.",
    context:
      "AUCA academic project and client implementation for a salon in Goma, Democratic Republic of the Congo.",
    responsibilities: [
      "Full-stack application development and maintenance.",
      "Client, worker and administrator workflows.",
      "Salon services and appointment-management workflows.",
    ],
    architecture:
      "Next.js and TypeScript application using PostgreSQL and Prisma, with TanStack Query and Axios for application data workflows.",
    complete: [
      "Delivered salon-management application.",
      "Operational client, worker and administrator workflows.",
      "Service and appointment-management functionality.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "PostgreSQL",
      "Prisma",
      "Axios",
    ],
    highlights: [
      "Salon operations",
      "Service management",
      "Appointment workflows",
      "Client and worker roles",
    ],
    liveUrl: "http://beauty-nails-salon.vercel.app/",
    featured: true,
  },
  {
    slug: "k-corp-elearning",
    title: "K-Corp E-Learning Platform",
    period: "Deployed 16 July 2024",
    role: "Sole Developer",
    status: "Live",
    category: "E-learning / SaaS",
    imageUrl: "/e-learning.png",
    summary:
      "A learning platform built to connect students, instructors and institutions. I developed and deployed the application as a solo developer, including subscription management and institution/student workflows. The site remains publicly accessible, although the project is no longer actively maintained.",
    problem:
      "Connecting students, instructors and institutions through a learning platform with account privileges, course workflows and subscription management.",
    context:
      "ALX foundation / portfolio project; developed independently as the sole developer.",
    constraints: [
      "The project evolved from an initial Django setup to a Next.js, Prisma and PostgreSQL implementation.",
    ],
    responsibilities: [
      "Sole developer across the frontend and backend application.",
      "Authentication and account privileges.",
      "Subscription management and Stripe integration.",
      "Institution and student management workflows.",
      "Course management, learning progress and certification workflows.",
    ],
    architecture:
      "Next.js application with Prisma and PostgreSQL, Clerk authentication and Stripe subscription management.",
    decisions: [
      {
        title: "Application and data-layer evolution",
        detail:
          "The project moved from an initial Django setup to a Next.js application using Prisma and PostgreSQL for its application data layer.",
      },
    ],
    complete: [
      "Course management.",
      "Learning progress tracking.",
      "Certification workflows.",
      "Institution and student management.",
      "Subscription management.",
    ],
    remaining: [
      "The platform remains accessible but is no longer actively maintained.",
    ],
    stack: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Clerk"],
    highlights: [
      "Solo-developed platform",
      "Course management",
      "Institution and student workflows",
      "Subscription management",
    ],
    githubUrl: "https://github.com/EzechielKiregha/k-corp-elearning",
    liveUrl: "https://k-corp-elearning.vercel.app/",
    featured: true,
  },
  {
    slug: "galacticket",
    title: "GalacTicket",
    period: "2023",
    role: "Backend Developer",
    status: "Academic prototype",
    category: "Academic Project",
    summary:
      "An event-ticketing and management project exploring ticket sales, seat selection, QR-code validation and event-capacity workflows.",
    context: "Earlier academic software project.",
    stack: ["Spring Boot", "Node.js", "PostgreSQL", "Motion", "MTN"],
    highlights: ["QR-code validation", "Seat selection", "Event capacity"],
    githubUrl: "https://github.com/EzechielKiregha/GalacTicket-UI.git",
    featured: false,
  },
  {
    slug: "empower-your-mind",
    title: "Empower Your Mind",
    period: "2023",
    role: "Full-Stack Developer",
    status: "Archived project",
    category: "Wellbeing Platform Prototype",
    imageUrl: "/mental-health.png",
    summary:
      "An earlier wellbeing and mental-health consultation platform concept exploring access to support, therapist-related workflows and a supportive online community. It is presented as a software project, not as a clinically validated health product or diagnostic tool.",
    context: "Earlier project retained in the portfolio archive.",
    stack: ["Spring Boot", "Next.js", "TypeScript", "MySQL", "React", "Docker"],
    highlights: [
      "Consultation workflows",
      "Wellbeing support concept",
      "Web application",
    ],
    githubUrl:
      "https://github.com/EzechielKiregha/Mental-health-consultation-system.git",
    liveUrl: "https://mental-health-consultation-system.vercel.app/",
    featured: false,
  },
  {
    slug: "travel-management",
    title: "Travel Management System",
    period: "Earlier academic project",
    role: "Backend Developer",
    status: "Academic prototype",
    category: "Academic Project",
    summary:
      "An academic travel-management application exploring booking, expense tracking and approval workflows.",
    context: "Earlier academic software project.",
    stack: ["Java", "Swing", "PostgreSQL"],
    highlights: ["Travel booking", "Expense tracking", "Approval workflows"],
    githubUrl: "https://github.com/EzechielKiregha/TravelMngtClient24673.git",
    featured: false,
  },
  {
    slug: "airbnb-clone",
    title: "Airbnb Clone",
    period: "2022",
    role: "Full-Stack Developer",
    status: "Academic prototype",
    category: "Marketplace",
    summary:
      "A full-stack property-rental application built as an early project, with property listings, booking workflows and host-facing functionality.",
    context: "Earlier academic software project.",
    stack: [
      "Python",
      "Flask",
      "JavaScript",
      "jQuery",
      "FileStorage",
      "DBStorage",
    ],
    highlights: ["Property listings", "Booking workflows", "Host management"],
    githubUrl: "https://github.com/EzechielKiregha/AirBnB_clone_v4.git",
    featured: false,
  },
  {
    slug: "smart-home-energy-system",
    title: "Smart Home Energy System",
    period: "Earlier project",
    role: "Project archive entry",
    status: "Archived project",
    category: "Project Archive",
    summary:
      "An earlier project from my development journey, retained in the archive. The public entry is intentionally limited to the project name rather than claiming features or technical details that are not documented here.",
    context: "Earlier project retained in the portfolio archive.",
    stack: [],
    highlights: [],
    featured: false,
  },
];


export const notes: EngineeringNote[] = [
  {
    slug: "django-to-postgresql-migration",
    title:
      "What I learned while moving an application from an early database setup to PostgreSQL",
    summary: "Notes from the K-Corp E-Learning migration experience.",
    body: [
      "TODO_VERIFY: write from your own implementation notes. Include the bug, decision or trade-off. Do not publish a generic tutorial.",
    ],
  },
  {
    slug: "multi-store-roles-and-boundaries",
    title:
      "Designing roles and store boundaries in a multi-store commerce application",
    summary: "Notes from USCOR Marketplace.",
    body: ["TODO_VERIFY: write from your own implementation notes."],
  },
  {
    slug: "offline-pos-sync",
    title:
      "What an offline-capable POS needs to consider before synchronising transactions",
    summary: "Notes from POS work.",
    body: ["TODO_VERIFY: write from your own implementation notes."],
  },
  {
    slug: "subscription-and-account-privileges",
    title:
      "Lessons from implementing subscription and account privileges in K-Corp E-Learning",
    summary: "Notes from K-Corp E-Learning.",
    body: ["TODO_VERIFY: write from your own implementation notes."],
  },
];
