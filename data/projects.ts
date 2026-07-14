import type { StaticImageData } from "next/image";
import beneficiaryImage from "../public/images/beneficiary.webp";
import economicOpportunitiesImage from "../public/images/economic-opportunities-dashboard.webp";
import grmImage from "../public/images/grm-dashboard.webp";
import itlmsImage from "../public/images/itlms-dashboard.webp";
import mimsImage from "../public/images/mims.webp";
import paymentImage from "../public/images/payment-dashboard.webp";
import snsopLandingImage from "../public/images/snsop-landing.webp";
import snsopMisImage from "../public/images/snsop-mis.webp";
import surveyCtoImage from "../public/images/survey-cto-dashboard.webp";
import tmsImage from "../public/images/tms.webp";
import tpsErpImage from "../public/images/tps-erp.webp";

export type ProjectCaseStudy = {
  overview: string;
  challenges: string[];
  solution: string;
  domains: {
    title: string;
    capabilities: string[];
  }[];
  engineeringImprovements: {
    title: string;
    description: string;
  }[];
  impact: string[];
  contributions: string[];
};

export type ProjectImage = {
  src: StaticImageData;
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  liveUrl: string;
  image: StaticImageData;
  images: ProjectImage[];
  stack: string[];
  highlights: string[];
  capabilities: string[];
  caseStudy?: ProjectCaseStudy;
};

export const projects: Project[] = [
  {
    slug: "snsop",
    title: "SNSOP",
    description:
      "A unified social protection platform combining beneficiary management, payments, grievances, economic opportunities, surveys, biometrics, monitoring, and reporting.",
    liveUrl: "https://mis.southsudansafetynet.info/v2/",
    image: snsopLandingImage,
    images: [
      {
        src: snsopLandingImage,
        title: "Unified SNSOP portal",
        description: "A single entry point for the program's integrated social protection services.",
      },
      {
        src: snsopMisImage,
        title: "Module launcher",
        description: "Independent business portals brought together through one consistent platform experience.",
      },
      {
        src: beneficiaryImage,
        title: "Beneficiary Management",
        description: "Registration, enrollment, adjudication, lifecycle management, identification, and beneficiary analytics.",
      },
      {
        src: paymentImage,
        title: "Payment Management",
        description: "Beneficiary assignment, payment cycles, wage requests, approvals, payroll, and reconciliation insights.",
      },
      {
        src: grmImage,
        title: "Grievance Redress Mechanism",
        description: "GBV and non-GBV grievance workflows with status, resolution, location, and operational reporting.",
      },
      {
        src: economicOpportunitiesImage,
        title: "Economic Opportunities",
        description: "Group enrollment, training, business plans, grants, financial linkage, and performance monitoring.",
      },
      {
        src: surveyCtoImage,
        title: "SurveyCTO Integration",
        description: "Survey import and export workflows with beneficiary, revisit, demographic, and geographic insights.",
      },
    ],
    stack: ["Angular", "TypeScript", "Spring Boot", "MSSQL Server", "Redis", "RabbitMQ", "MinIO", "Elasticsearch"],
    highlights: [
      "Developed Angular micro-frontend portals for Beneficiary, Payment, GRM, Economic Opportunities, SurveyCTO, Reporting, and Administration.",
      "Implemented JWT authentication, route guards, role-based access control, dashboards, and file import/export.",
      "Built Spring Boot APIs for registration, approval, migration, audit, attendance, payroll, and reconciliation workflows.",
    ],
    capabilities: [
      "Beneficiary registration, management, adjudication, and analytics.",
      "Payment, grievance redress, economic opportunities, SurveyCTO, monitoring, and reporting modules.",
      "Redis caching, RabbitMQ messaging, MinIO file storage, and scheduled processing.",
    ],
    caseStudy: {
      overview:
        "The Social Safety Net Operations Program needed to modernize its Management Information System for large-scale social protection operations Its workflows were split between a legacy .NET monolith for program operations and a separate Java and Angular AFIS platform for biometric enrollment and identity verification.",
      challenges: [
        "Users had to move between separate MIS and biometric applications to complete beneficiary workflows.",
        "Synchronizing beneficiary and biometric information introduced operational complexity and duplicated processes.",
        "Tightly coupled monolithic modules made enhancements, troubleshooting, and deployments difficult.",
        "Individual business capabilities could not be scaled or released independently.",
        "The fragmented experience reduced efficiency as program operations and transaction volumes expanded.",
      ],
      solution:
        "The engineering team transformed the platform into a unified microservices and micro frontend ecosystem. MIS and AFIS capabilities were integrated behind one portal, while domain-focused services and independently deployable frontend modules separated the major business functions.",
      domains: [
        {
          title: "Beneficiary Management",
          capabilities: [
            "Household and beneficiary profiles",
            "Demographic and geographic data",
            "Beneficiary lifecycle management",
          ],
        },
        {
          title: "Biometric Management",
          capabilities: [
            "Fingerprint enrollment and verification",
            "Biometric template management",
            "Identity validation and duplicate detection",
          ],
        },
        {
          title: "Payment Management",
          capabilities: [
            "Wage and payment-cycle processing",
            "Approval workflows",
            "Payment reconciliation",
          ],
        },
        {
          title: "Grievance Redress",
          capabilities: [
            "GBV and non-GBV grievance workflows",
            "Status and resolution tracking",
            "Location-based grievance reporting",
          ],
        },
        {
          title: "Economic Opportunities",
          capabilities: [
            "Group and beneficiary enrollment",
            "Training, business-plan, and grant workflows",
            "Financial linkage and performance monitoring",
          ],
        },
        {
          title: "SurveyCTO Integration",
          capabilities: [
            "Survey template export and data import",
            "Beneficiary and revisit-household monitoring",
            "Demographic and geographic survey analytics",
          ],
        },
        {
          title: "Reporting & Analytics",
          capabilities: [
            "Operational dashboards and monitoring",
            "Financial and beneficiary analytics",
            "Decision-support reporting",
          ],
        },
      ],
      engineeringImprovements: [
        {
          title: "Unified experience",
          description:
            "Beneficiary registration, biometric verification, payment processing, and reporting became available through one integrated platform.",
        },
        {
          title: "Independent scalability",
          description:
            "High-demand services can scale according to their own workloads without scaling the complete application.",
        },
        {
          title: "Safer delivery",
          description:
            "Independently deployable services and frontend modules support faster feature delivery with reduced deployment risk.",
        },
        {
          title: "Maintainable domains",
          description:
            "Domain-focused separation makes troubleshooting, enhancement, and future expansion easier to manage.",
        },
        {
          title: "Centralized security",
          description:
            "Authentication, role-based access control, API security, and audit mechanisms protect beneficiary and payment workflows.",
        },
      ],
      impact: [
        "Integrated MIS and biometric operations into a single platform.",
        "Improved operational efficiency through unified workflows.",
        "Reduced maintenance complexity across business domains.",
        "Enabled independent feature development and deployment.",
        "Improved scalability for beneficiary and payment operations",
        "Established a foundation for continued digital transformation.",
      ],
      contributions: [
        "Contributed to the migration from a monolithic system to microservices architecture.",
        "Developed Spring Boot services and integrated REST APIs.",
        "Implemented Angular micro frontend modules.",
        "Integrated MIS and biometric workflows within the unified platform.",
        "Optimized database operations and application performance.",
        "Developed enterprise reporting and operational features.",
        "Supported deployment and system-integration activities.",
      ],
    },
  },
  {
    slug: "mims",
    title: "MIMS",
    description:
      "A Madrasa Institute Management Information System with role-aware dashboards, institutional workflows, approvals, reporting, and data-driven administration.",
    liveUrl: "https://mims.karoothitbd.com/",
    image: mimsImage,
    images: [{ src: mimsImage, title: "MIMS dashboard", description: "Role-aware institutional management and reporting dashboard." }],
    stack: ["Angular", "TypeScript", "PrimeNG", "Bootstrap", "REST API"],
    highlights: [
      "Designed and developed a scalable Angular frontend for institutional management workflows.",
      "Created role-based menus, protected routes, complex forms, data tables, and dashboard views.",
      "Focused on Bengali-language usability, responsive layouts, performance, and maintainable components.",
    ],
    capabilities: [
      "Institute data submission, review, approval, and status tracking.",
      "User management, configurable settings, and role-based access control.",
      "Statistical dashboards and administrative report generation.",
    ],
  },
  {
    slug: "tms",
    title: "TMS",
    description:
      "A Training Management System for managing employees, training programs, research activities, workflows, progress, and operational reporting.",
    liveUrl: "https://tms.karoothitbd.com/",
    image: tmsImage,
    images: [{ src: tmsImage, title: "TMS dashboard", description: "Training, employee, research, and workflow management overview." }],
    stack: ["Angular", "TypeScript", "Spring Boot", "REST API"],
    highlights: [
      "Built a responsive management dashboard with reusable Angular components.",
      "Structured modules for employee, training, research, workflow, settings, and reports.",
      "Presented training hours, program distribution, and operational activity through visual dashboards.",
    ],
    capabilities: [
      "Employee and training-program administration.",
      "Research project and workflow management.",
      "Progress analytics, reports, settings, and support workflows.",
    ],
  },
  {
    slug: "itlms",
    title: "ITLMS",
    description:
      "An Integrated Training & Learning Management System that supports the complete training lifecycle from nomination and delivery to certification and reporting.",
    liveUrl: "https://itlms.karoothitbd.com/",
    image: itlmsImage,
    images: [{ src: itlmsImage, title: "ITLMS dashboard", description: "Live training operations, learning resources, finance, insights, and administration." }],
    stack: ["Angular", "TypeScript", "Spring Boot", "REST API", "Responsive Design"],
    highlights: [
      "Built a unified administrative dashboard with live summaries of training events, participants, certificates, and financial disbursements.",
      "Organized the platform into Training Operations, Learning Resources, Finance, Insights, and Administration modules for efficient navigation.",
      "Created bilingual controls, alerts, news updates, upcoming-event tracking, and pending-approval views for day-to-day operational management.",
    ],
    capabilities: [
      "Participant, training event, schedule, resource-person, venue, and attendance management.",
      "Courses, materials and e-library, assessments and results, and certificate administration.",
      "Honorarium, fee management, reports, alerts, document management, and user administration.",
    ],
  },
  {
    slug: "tps-erp",
    title: "TPS-ERP",
    description:
      "A school enterprise resource planning system that brings admissions, students, academics, payments, attendance, teachers, examinations, and reporting into one platform.",
    liveUrl: "https://tps-erp.karoothitbd.com/",
    image: tpsErpImage,
    images: [{ src: tpsErpImage, title: "TPS-ERP dashboard", description: "Unified school operations, academics, finance, attendance, examinations, and reporting." }],
    stack: ["Angular", "TypeScript", "Spring Boot", "MSSQL Server", "REST API"],
    highlights: [
      "Developed a comprehensive school ERP platform covering admissions, academics, payments, attendance, examinations, staff, and reporting.",
      "Organized complex school operations into clear, role-based modules and workflows.",
      "Added summary cards and visual reports for students, classes, attendance, and institutional activity.",
    ],
    capabilities: [
      "Admissions, student, teacher, class, section, and academic setup management.",
      "Payments, attendance, examinations, results, and reporting.",
      "User administration, role management, lookups, and institutional analytics.",
    ],
  },
];
