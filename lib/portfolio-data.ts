import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiOpenapiinitiative,
  SiPhp,
  SiLaravel,
  SiPython,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiNpm,
  SiVite,
} from "react-icons/si";

export const profile = {
  name: "Sanal.dev",
  role: "Full Stack Developer",
  headline: "Building Digital Experiences That Make an Impact.",
  description:
    "Full Stack Developer with 2+ years of experience building scalable web applications, ERP systems, and modern business solutions.",
  location: "Dubai, UAE",
  email: "sanalk2003@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1L_4i_-I2RHNdOzfQFO3UXTCYHgwQF8y0/view?pli=1",
  socials: {
    github: "https://github.com/SANAL17",
    linkedin: "https://www.linkedin.com/in/sanal-k-424aa02a4/",
    instagram: "https://www.instagram.com/_sanal__93/",
  },
  rotatingRoles: [
    "MERN Stack",
    "React.js",
    "REST APIs",
    "Node.js",
    "Angular",
    "Next.js",
  ],
};

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools";

export type Skill = {
  name: string;
  category: SkillCategory;
  icon: IconType;
  color: string;
  level?: "Basic";
};

export const skills: Skill[] = [
  { name: "HTML5", category: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", category: "Frontend", icon: SiCss, color: "#2965F1" },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript,
    color: "#3178C6",
  },
  { name: "React.js", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  {
    name: "Next.js",
    category: "Frontend",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  { name: "Angular", category: "Frontend", icon: SiAngular, color: "#DD0031" },
  { name: "Redux", category: "Frontend", icon: SiRedux, color: "#764ABC" },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#5FA04E" },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    color: "#FFFFFF",
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: SiOpenapiinitiative,
    color: "#6BA539",
  },
  { name: "PHP", category: "Backend", icon: SiPhp, color: "#8892BF" },
  { name: "Laravel", category: "Backend", icon: SiLaravel, color: "#FF2D20" },
  { name: "Python", category: "Backend", icon: SiPython, color: "#3776AB" },
  {
    name: ".NET",
    category: "Backend",
    icon: SiDotnet,
    color: "#9B6BFF",
    level: "Basic",
  },
  { name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", category: "Database", icon: SiMysql, color: "#4479A1" },
  { name: "Git", category: "Tools", icon: SiGit, color: "#F05032" },
  { name: "GitHub", category: "Tools", icon: SiGithub, color: "#FFFFFF" },
  { name: "Postman", category: "Tools", icon: SiPostman, color: "#FF6C37" },
  { name: "Figma", category: "Tools", icon: SiFigma, color: "#F24E1E" },
  { name: "npm", category: "Tools", icon: SiNpm, color: "#CB3837" },
  { name: "Vite", category: "Tools", icon: SiVite, color: "#A78BFA" },
];

export interface ExperienceProject {
  name: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
}

export interface Experience {
  company: string;
  link: string;
  logo: string;
  role: string;
  duration: string;
  location: string;
  tech: string[];
  responsibilities: string[];
  projects: ExperienceProject[];
}

export const experiences: Experience[] = [
  {
    company: "Cygnonex Innovation Pvt Ltd",
    logo: "/images/cygnoz.png",
    link: "https://cygnoz.com/",
    role: "Jr Software Developer",
    duration: "Jun 2024 – Oct 2026",
    location: "Kochi, Kerala",

    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "GitHub"],

    responsibilities: [
      "Developed and maintained React-based frontend modules for billing, inventory, and reporting, improving workflow efficiency and reducing UI issues by 25%.",
      "Built reusable, configurable UI components and data-heavy forms, tables, filters, and modals, reducing frontend code duplication by 30%.",
      "Integrated RESTful APIs with frontend state using Context API and controlled components, reducing state-related issues by 25%.",
      "Collaborated with backend and product teams to deliver scalable UI solutions, reducing rework and accelerating feature delivery by 20%.",
    ],

    projects: [
      {
        name: "Enterprise Resource Planning Platform",
        category: "ERP & Business Management",
        description:
          "Developed responsive frontend modules for multi-tenant ERP workflows, including dynamic dashboards, financial reports, inventory management, and interactive transaction views. Supported 100+ client businesses and collaborated with QA and DevOps teams to improve release stability.",
        image: "/images/ERP.jpg",
        tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      },
      {
        name: "Human Resource Management System",
        category: "HRMS & Workforce Management",
        description:
          "Developed core HRMS modules covering employee profiles, attendance tracking, leave management, onboarding, offboarding, and payroll. Built reusable forms, data tables, and validation components integrated with REST APIs.",
        image: "/images/HRMS.jpg",
        tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      },
      {
        name: "Vehicle Management System",
        category: "Fleet & Service Management",
        description:
          "Developed frontend features for vehicle service operations, including job card management, service tracking, maintenance workflows, and status-based task management.",
        image: "/images/vehicle-management.jpg",
        tech: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      },
    ],
  },

  {
    company: "Luminar Technolab Pvt Ltd",
    link: "https://www.luminartechnolab.com/",
    role: "Full-Stack Developer Intern",
    duration: "Aug 2023 – Apr 2024",
    location: "Kochi, Kerala",
    logo: "/images/luminarlogo.jpg",
    tech: ["React", "Angular", "JavaScript", "Node.js", "MongoDB", "Express"],

    responsibilities: [
      "Engineered full-stack applications using React, Angular, and Node.js, optimizing frontend responsiveness and cross-platform performance.",
      "Architected CRUD-heavy dashboards using reusable components and predictable state handling.",
      "Strengthened understanding of frontend and backend architecture by collaborating with senior developers, improving API integration accuracy by 20%.",
    ],

    projects: [
      {
        name: "Fitness & Wellness Website",
        category: "Health & Fitness",
        description:
          "Developed a responsive fitness website featuring workout programs, fitness tracking, BMI calculation, progress monitoring, and health-focused features with a modern user interface.",
        image: "/images/MyFitness.png",
        tech: ["React.js", "JavaScript", "CSS","Node.js","MongoDB"],
      },
      {
        name: "Restaurant Website",
        category: "Food & Hospitality",
        description:
          "Designed and developed a modern restaurant website featuring an elegant food showcase, interactive image gallery, engaging landing page, and responsive layouts to enhance the dining experience.",
        image: "/images/restuarent-app.png",
        tech: ["React.js", "JavaScript", "CSS", "Responsive Design"],
      },
      {
        name: "Weather Forecast Application",
        category: "Weather & Utility",
        description:
          "Built an interactive weather application with location-based search, real-time weather information, temperature details, and weather condition updates through API integration.",
        image: "/images/weather-app.png",
        tech: ["React.js", "JavaScript", "REST API", "CSS"],
      },
    ],
  },
];

export type Project = {
  name: string;
  kind: "layers" | "car" | "globe";
  summary: string;
  highlights: string[];
  details: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Multi-Tenant Business Management Platform",
    kind: "layers",
    summary:
      "A multi-tenant ERP platform with dashboards, financial reporting, and transaction workflows.",
    highlights: ["ERP", "Multi-Tenant", "100+ Clients"],
    details: [
      "Optimized and scaled responsive frontend modules for ERP workflows, enabling adoption by 100+ client businesses.",
      "Created dynamic dashboards, financial reports, and interactive transaction views using React and Tailwind CSS.",
      "Collaborated with QA and DevOps teams to execute 100+ end-to-end UI integration tests, ensuring seamless release cycles.",
    ],
    tech: ["React", "Tailwind CSS", "REST APIs"],
  },
  {
    name: "Vehicle Service Management Platform",
    kind: "car",
    summary:
      "Role-based service operations platform with scheduling, job allocation, and analytics.",
    highlights: ["RBAC", "Real-Time Tracking", "Analytics"],
    details: [
      "Designed and delivered role-based dashboards for employees, managers, and administrators.",
      "Built interactive calendars and job allocation views to improve scheduling efficiency.",
      "Introduced analytics dashboards for data-driven decisions.",
    ],
    tech: ["React", "Dashboards", "RBAC"],
  },
  {
    name: "Product Showcasing & Corporate Websites",
    kind: "globe",
    summary: "Responsive, visually engaging corporate and product websites.",
    highlights: ["Branding", "Responsive UI", "SEO"],
    details: [
      "Built and deployed responsive, visually engaging corporate websites.",
      "Applied modern UI/UX best practices ensuring cross-device compatibility.",
    ],
    tech: ["Responsive UI", "SEO", "UI/UX"],
  },
];

export type ServiceKey =
  | "fullstack"
  | "frontend"
  | "backend"
  | "api"
  | "database"
  | "responsive";

export const services: {
  key: ServiceKey;
  title: string;
  description: string;
}[] = [
  {
    key: "fullstack",
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications with scalable frontends, backend APIs, and efficient database integrations.",
  },
  {
    key: "frontend",
    title: "Frontend Development",
    description:
      "Responsive, pixel-perfect interfaces in React and Next.js with reusable, maintainable component architecture.",
  },
  {
    key: "backend",
    title: "Backend Development",
    description:
      "Server-side logic with Node.js and Express that keeps business workflows reliable and secure.",
  },
  {
    key: "api",
    title: "REST API Development",
    description:
      "Clean, well-structured REST APIs and seamless integration of APIs with frontend state.",
  },
  {
    key: "database",
    title: "Database Integration",
    description:
      "Data modelling and integration with MongoDB and MySQL for CRUD-heavy business applications.",
  },
  {
    key: "responsive",
    title: "Responsive Web Design",
    description:
      "Cross-device layouts that look sharp and stay fast on mobile, tablet, and desktop.",
  },
];

export const strengths = [
  "Reusable component architecture",
  "Data-heavy dashboards & forms",
  "REST API integration",
  "ERP & SaaS workflows",
  "Performance & responsiveness",
  "Cross-team collaboration",
];

export const achievements = [
  "Frontend modules adopted by 100+ client businesses",
  "Reduced frontend code duplication by 30% with reusable components",
  "Cut UI and state-related issues by 25%",
  "Accelerated feature delivery by 20% through close team collaboration",
  "Executed 100+ end-to-end UI integration tests with QA and DevOps",
];

/** Add your education here; the section renders only when entries exist. */
export const education: { degree: string; school: string; period: string }[] =
  [];

export const exProjects = [
  {
    name: "NexProject",
    category: "Project Management System",
    description:
      "Developed QA/QC workflows, drag-and-drop task management, dashboards, work items and version management.",
    image: "/images/projects/nexproject.png",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "SewNex",
    category: "POS & Business Management",
    description:
      "Worked on POS functionality, product variants and POS v2 interfaces.",
    image: "/images/projects/sewnex.png",
    tech: ["React", "TypeScript", "REST API"],
  },
  {
    name: "6NexD",
    category: "Business Application",
    description: "Implemented frontend functionality for job card management.",
    image: "/images/projects/6nexd.png",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
];
