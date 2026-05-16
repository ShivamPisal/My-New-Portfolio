import {
  GraduationCap,
  Award,
  Coffee,
  Server,
  Database,
  Atom,
  AppWindow,
  GitBranch,
  Cloud,
  Bot,
  Sparkles,
  Code2,
  Globe,
  GitFork,
  BrainCircuit
} from "lucide-react";
import serverlessFeedbackDemo from "../assets/projects/serverless-feedback-demo.png";
import smartServeDemo from "../assets/projects/smart-serve-dashboard.png";
import reactPortfolioDemo from "../assets/projects/Portfolio-demo.png";
import helthofileDemo from "../assets/projects/Helthofile-demo.png";

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const workExperience = [
  {
    title: "Software Engineer",
    org: "Cloudtrim Technologies",
    period: "Mar 2026 - Present",
    details:
      "Contributing to full stack development tasks including REST API integration, UI improvements, AWS service usage, and ongoing product enhancements in a collaborative team environment.",
    icon: Award,
    iconClassName: "text-emerald-600",
    iconBadgeClassName: "bg-emerald-50 border-emerald-200 dark:bg-emerald-500/12",
  },
  {
    title: "Software Developer Intern",
    org: "Cloudtrim Technologies",
    period: "Sep 2025 - Feb 2026",
    details:
      "Working on backend APIs, frontend features, bug fixing and deployment support while collaborating with the development team on real project tasks.",
    icon: Award,
    iconClassName: "text-blue-600",
    iconBadgeClassName: "bg-blue-50 border-blue-200 dark:bg-blue-500/12",
  },
];

export const educationTimeline = [
  {
    title: "B.Tech in Computer Science & Engineering",
    org: "Sharad Institute of Technology College of Engineering, Yadrav (Ichalkaranji)",
    period: "Dec 2021 - Jun 2025",
    details: "Focusing on core software engineering principles and full-stack development.",
    icon: GraduationCap,
    iconClassName: "text-indigo-600",
    iconBadgeClassName: "bg-indigo-50 border-indigo-200 dark:bg-indigo-500/12",
  },
  {
    title: "Higher Secondary Education",
    org: "Modern Education Society, Vita",
    period: "June 2020 - Mar 2021",
    details: "Completed with a focus on science and foundational mathematics.",
    icon: GraduationCap,
    iconClassName: "text-violet-600",
    iconBadgeClassName: "bg-violet-50 border-violet-200 dark:bg-violet-500/12",
  },
];

export const experienceTimeline = [
  {
    title: "AWS Certified Developer Associate",
    org: "Amazon Web Services",
    period: "Ongoing",
    details: "Currently preparing for an AWS developer-focused certification covering serverless systems, cloud services, and deployment workflows.",
    icon: Award,
    iconClassName: "text-amber-600",
    iconBadgeClassName: "bg-amber-50 border-amber-200 dark:bg-amber-500/12",
  },
  {
    title: "Full Stack Development Course",
    org: "MindScript Tech, Pune",
    period: "Dec 2024 - Aug 2025",
    details: "Industry-focused training covering rigorous backend (Java, Spring Boot, MySQL) and frontend (HTML, CSS, JavaScript, React) development.",
    icon: Award,
    iconClassName: "text-rose-600",
    iconBadgeClassName: "bg-rose-50 border-rose-200 dark:bg-rose-500/12",
  },
  {
    title: "Prompt Engineering Masterclass",
    org: "ChatGPT + Bing (Copilot)",
    period: "Completed",
    details: "Completed an online course focused on crafting effective prompts for AI tools to enhance productivity and problem-solving.",
    icon: Award,
    iconClassName: "text-cyan-700",
    iconBadgeClassName: "bg-cyan-50 border-cyan-200 dark:bg-cyan-500/12",
  },
];

export const skillCategories = [
  {
    category: "Backend",
    skills: [
      {
        name: "Java Backend",
        icon: Coffee,
        accentIcon: Server,
        subskills: ["Java", "Spring Boot", "REST APIs", "Clean Architecture"],
      },
      {
        name: "Data Layer",
        icon: Database,
        accentIcon: Code2,
        subskills: ["Hibernate / JPA", "MySQL", "Schema Design", "Query Optimization"],
      },
    ]
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "Frontend UI",
        icon: Atom,
        accentIcon: Globe,
        subskills: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      },
      {
        name: "Interface Craft",
        icon: AppWindow,
        accentIcon: Sparkles,
        subskills: ["Component Design", "UI States", "Motion Polish"],
      },
    ]
  },
  {
    category: "DevOps & Cloud",
    skills: [
      {
        name: "Version Control",
        icon: GitBranch,
        accentIcon: GitFork,
        subskills: ["Git", "GitHub", "Jira", "Collaboration Workflow"],
      },
      {
        name: "Cloud Foundations",
        icon: Cloud,
        accentIcon: Server,
        subskills: ["AWS","IAM", "EC2", "RDS", "DynamoDB", "API Gateway", "S3"],
      },
    ]
  },
  {
    category: "AI Tools",
    skills: [
      {
        name: "AI Coding Assistants",
        icon: Bot,
        accentIcon: BrainCircuit,
        subskills: ["Cursor", "Codex", "Copilot", "Claude"],
      },
      {
        name: "AI Workflow Stack",
        icon: Sparkles,
        accentIcon: Bot,
        subskills: ["ChatGPT", "Antigravity", "Prompt Design"],
      },
    ]
  }
];

export const projects = [
  {
    title: "Healthofile",
    category: "Web",
    projectType: "Company",
    featured: true,
    problem: "Patients need one secure place to manage health records, documents, vitals, appointments, reminders, and shared family access without jumping across disconnected tools.",
    solution: "Built a patient-focused healthcare management portal with React, TypeScript, and Vite, including protected authentication, role-based admin routes, AWS API integration, document storage workflows, Google Calendar support, push-notification registration, premium feature gating, and an admin dashboard for APKs, customer media stats, and notifications.",
    summary: "A portfolio-version healthcare portal for secure health record management, medical document workflows, vitals tracking, reminders, appointments, and family data sharing.",
    tech: ["React", "TypeScript", "Vite", "AWS Amplify", "Google Calendar", "Push Notifications"],
    metrics: ["Secure health records", "Vitals and trends", "Family sharing"],
    outcomes: [
      "Supports login, registration, password reset, and Google login flows",
      "Handles document upload, preview, share links, delete actions, OCR status, and AI summary display",
      "Includes admin routes for notifications, APK downloads, customers, and media statistics",
    ],
    preview: "Patient healthcare portal",
    demoImage: helthofileDemo,
    demoImageAlt: "Healthofile healthcare management portal preview",
    github: "https://github.com/ShivamPisal",
    demo: "#",
  },
  {
    title: "Serverless Feedback Web App",
    category: "Cloud",
    projectType: "Company",
    featured: false,
    problem: "Needed a lightweight and scalable way to collect user feedback without managing traditional backend infrastructure.",
    solution: "Built a feedback collection workflow on AWS serverless architecture using Lambda, API Gateway, DynamoDB, and S3, with optional CloudFront delivery for fast edge distribution.",
    summary: "A serverless feedback platform designed for scale, low maintenance, and fast feedback capture.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront"],
    metrics: ["Collect user feedback", "Store data in DynamoDB", "Scalable serverless backend"],
    outcomes: ["Supports low-maintenance backend scaling", "Uses managed AWS services for faster deployment"],
    preview: "Cloud-native feedback collection",
    demoImage: serverlessFeedbackDemo,
    demoImageAlt: "Serverless Feedback Web App dashboard preview",
    github: "https://github.com/ShivamPisal/Serverless-Feedback-Form",
    demo: "https://shivampisal.github.io/Serverless-Feedback-Form/",
  },
  {
    title: "Smart Serve Cafeteria",
    category: "Full Stack",
    projectType: "Personal",
    problem: "Long queues and inefficient manual ordering systems during peak cafeteria hours.",
    solution: "Developed a full-stack web application with user authentication, a digital product catalog, and an automated order cart with online payment processing to streamline the cafeteria experience.",
    summary: "A cafeteria ordering system focused on speed, clear flows, and reducing service friction during rush hours.",
    tech: ["Spring Boot", "MySQL", "HTML/CSS/JS"],
    metrics: ["Digital ordering", "Secure checkout", "Role-based flows"],
    outcomes: ["Reduces manual ordering bottlenecks", "Improves ordering clarity during peak cafeteria hours"],
    preview: "Queue-free ordering experience",
    demoImage: smartServeDemo,
    demoImageAlt: "Smart Serve Cafeteria ordering interface preview",
    github: "https://github.com/ShivamPisal",
    demo: "#",
  },
  {
    title: "React Portfolio Website",
    category: "Web",
    projectType: "Personal",
    problem: "Needed a polished personal website to present projects, skills, experience, and contact details in one clear place.",
    solution: "Built a responsive portfolio website in React with reusable components, smooth section-based navigation, and a clean layout that highlights work, technical skills, and career progress.",
    summary: "A personal portfolio experience designed to showcase development work with a modern React interface.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
    metrics: ["Responsive layout", "Project showcase", "Smooth navigation"],
    outcomes: ["Presents skills and projects in a professional format", "Makes it easier for recruiters and clients to review work quickly"],
    preview: "Modern personal portfolio",
    demoImage: reactPortfolioDemo,
    demoImageAlt: "React Portfolio Website preview",
    github: "https://github.com/ShivamPisal",
    demo: "#",
  },
];
