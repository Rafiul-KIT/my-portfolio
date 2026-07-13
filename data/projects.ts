export type Project = {
  slug: string;
  title: string;
  description: string;
  liveUrl: string;
  image: string;
  images: string[];
  stack: string[];
  highlights: string[];
  capabilities: string[];
};

export const projects: Project[] = [
  {
    slug: "snsop",
    title: "SNSOP",
    description:
      "A large-scale social protection management information system covering beneficiary services, payments, grievances, monitoring, reporting, and document management.",
    liveUrl: "https://mis.southsudansafetynet.info/v2/",
    image: "/images/SNSOP Landing.png",
    images: ["/images/SNSOP Landing.png", "/images/SNSOP MIS.png"],
    stack: ["Angular", "TypeScript", "Spring Boot", "MSSQL Server", "Redis", "RabbitMQ", "MinIO"],
    highlights: [
      "Developed Angular micro-frontend portals for Beneficiary, Payment, Grievance, Report, and Admin modules.",
      "Implemented JWT authentication, route guards, role-based access control, dashboards, and file import/export.",
      "Built Spring Boot APIs for registration, approval, migration, audit, attendance, payroll, and reconciliation workflows.",
    ],
    capabilities: [
      "Beneficiary registration, management, adjudication, and analytics.",
      "Payment, grievance, monitoring and evaluation, survey, and reporting modules.",
      "Redis caching, RabbitMQ messaging, MinIO file storage, and scheduled processing.",
    ],
  },
  {
    slug: "beneficiary-portal",
    title: "Beneficiary Portal",
    description:
      "The SNSOP beneficiary portal for registration, enrollment, adjudication, beneficiary management, ID cards, reporting, and program analytics.",
    liveUrl: "https://mis.southsudansafetynet.info/v2/",
    image: "/images/Beneficiary.png",
    images: ["/images/Beneficiary.png"],
    stack: ["Angular", "TypeScript", "PrimeNG", "Bootstrap", "Chart.js", "REST API"],
    highlights: [
      "Developed beneficiary registration, management, adjudication, ID card, and reporting interfaces.",
      "Implemented role-based navigation, protected routes, reusable forms, data tables, and dashboard components.",
      "Added chart-based program insights and file import/export workflows for large beneficiary datasets.",
    ],
    capabilities: [
      "Beneficiary enrollment, approval, migration, and lifecycle management.",
      "County-level analytics, demographic summaries, and support-category reporting.",
      "Beneficiary ID cards, adjudication workflows, exports, and audit-ready records.",
    ],
  },
  {
    slug: "mims",
    title: "MIMS",
    description:
      "A Madrasa Institute Management Information System with role-aware dashboards, institutional workflows, approvals, reporting, and data-driven administration.",
    liveUrl: "https://mims.karoothitbd.com/",
    image: "/images/MIMS.png",
    images: ["/images/MIMS.png"],
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
    image: "/images/TMS.png",
    images: ["/images/TMS.png"],
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
    image: "/images/ITLMS.png",
    images: ["/images/ITLMS.png"],
    stack: ["Angular", "TypeScript", "Spring Boot", "REST API", "Responsive Design"],
    highlights: [
      "Created a bilingual, responsive experience for government offices, private offices, and training institutes.",
      "Designed a clear organization-based sign-in flow and accessible training interface.",
      "Structured the platform around end-to-end training delivery and reporting workflows.",
    ],
    capabilities: [
      "Training nomination, course delivery, participant tracking, and certification.",
      "Multiple organization types and English/Bengali language support.",
      "Centralized dashboards for offices, providers, and administrators.",
    ],
  },
  {
    slug: "tps-erp",
    title: "TPS-ERP",
    description:
      "A school enterprise resource planning system that brings admissions, students, academics, payments, attendance, teachers, examinations, and reporting into one platform.",
    liveUrl: "https://tps-erp.karoothitbd.com/",
    image: "/images/ERP.png",
    images: ["/images/ERP.png"],
    stack: ["Angular", "TypeScript", "Spring Boot", "MSSQL Server", "REST API"],
    highlights: [
      "Developed an information-rich dashboard for school administrators.",
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
