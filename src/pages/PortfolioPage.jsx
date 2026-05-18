import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Accessibility,
  Award,
  BadgeCheck,
  BotMessageSquare,
  Boxes,
  Brain,
  BriefcaseBusiness,
  Cloud,
  CloudCog,
  Component,
  DatabaseZap,
  Download,
  ExternalLink,
  FileSearch,
  Gauge,
  GitBranchPlus,
  Github,
  Layers2,
  Layers3,
  MapPin,
  MonitorSmartphone,
  PenTool,
  Route,
  Send,
  ServerCog,
  ShieldCheck,
  TabletSmartphone,
  Waypoints,
  Workflow,
  GraduationCap,
} from "lucide-react";
import {
  SiClaude,
  SiGmail,
  SiGithub,
  SiGithubcopilot,
  SiGit,
  SiHibernate,
  SiJira,
  SiJavascript,
  SiMysql,
  SiOpenai,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import heroImage from "../assets/profile-photo.png";
import resumeFile from "../assets/shivam-pisal-cv.pdf";
import SectionTitle from "../components/SectionTitle";
import TimelineSection from "../components/TimelineSection";
import Reveal, { itemVariants } from "../components/Reveal";
import {
  educationTimeline,
  experienceTimeline,
  projects,
  skillCategories,
  workExperience,
} from "../data/portfolioData";

const projectFilters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
const smoothEase = [0.22, 1, 0.36, 1];
const heroTechItems = ["Java", "Spring Boot", "React", "AWS", "AI Tools"];
const journeyTabs = [
  { id: "experience", label: "Certification", icon: Award, iconClassName: "text-amber-600" },
  { id: "education", label: "Education", icon: GraduationCap, iconClassName: "text-indigo-600" },
];
const subskillMeta = {
  Java: {
    icon: BadgeCheck,
    iconClassName: "text-[#ea7d23]",
    badgeClassName: "bg-[#fff4eb] border-[#f6c79d] dark:bg-[#ea7d23]/15",
  },
  "Spring Boot": {
    icon: SiSpringboot,
    iconClassName: "text-[#6db33f]",
    badgeClassName: "bg-[#edf8e6] border-[#b8df9b] dark:bg-[#6db33f]/15",
  },
  "REST APIs": {
    icon: Route,
    iconClassName: "text-sky-600",
    badgeClassName: "bg-sky-50 border-sky-200 dark:bg-sky-500/10",
  },
  "Clean Architecture": {
    icon: Boxes,
    iconClassName: "text-violet-600",
    badgeClassName: "bg-violet-50 border-violet-200 dark:bg-violet-500/10",
  },
  "Hibernate / JPA": {
    icon: SiHibernate,
    iconClassName: "text-[#59666c]",
    badgeClassName: "bg-slate-100 border-slate-300 dark:bg-slate-500/10",
  },
  MySQL: {
    icon: SiMysql,
    iconClassName: "text-[#00758f]",
    badgeClassName: "bg-cyan-50 border-cyan-200 dark:bg-cyan-500/10",
  },
  "Schema Design": {
    icon: DatabaseZap,
    iconClassName: "text-amber-600",
    badgeClassName: "bg-amber-50 border-amber-200 dark:bg-amber-500/10",
  },
  "Query Optimization": {
    icon: Gauge,
    iconClassName: "text-emerald-600",
    badgeClassName: "bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10",
  },
  React: {
    icon: SiReact,
    iconClassName: "text-[#61dafb]",
    badgeClassName: "bg-cyan-50 border-cyan-200 dark:bg-cyan-400/10",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    iconClassName: "text-[#38bdf8]",
    badgeClassName: "bg-sky-50 border-sky-200 dark:bg-sky-400/10",
  },
  JavaScript: {
    icon: SiJavascript,
    iconClassName: "text-[#f7df1e]",
    badgeClassName: "bg-yellow-50 border-yellow-200 dark:bg-yellow-400/10",
  },
  "Responsive Design": {
    icon: MonitorSmartphone,
    iconClassName: "text-fuchsia-600",
    badgeClassName: "bg-fuchsia-50 border-fuchsia-200 dark:bg-fuchsia-500/10",
  },
  "Component Design": {
    icon: Component,
    iconClassName: "text-rose-600",
    badgeClassName: "bg-rose-50 border-rose-200 dark:bg-rose-500/10",
  },
  Accessibility: {
    icon: Accessibility,
    iconClassName: "text-lime-600",
    badgeClassName: "bg-lime-50 border-lime-200 dark:bg-lime-500/10",
  },
  "UI States": {
    icon: TabletSmartphone,
    iconClassName: "text-indigo-600",
    badgeClassName: "bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10",
  },
  "Motion Polish": {
    icon: Waypoints,
    iconClassName: "text-pink-600",
    badgeClassName: "bg-pink-50 border-pink-200 dark:bg-pink-500/10",
  },
  Git: {
    icon: SiGit,
    iconClassName: "text-[#f05032]",
    badgeClassName: "bg-orange-50 border-orange-200 dark:bg-orange-500/10",
  },
  GitHub: {
    icon: SiGithub,
    iconClassName: "text-slate-900 dark:text-white",
    badgeClassName: "bg-slate-100 border-slate-300 dark:bg-white/10",
  },
  Jira: {
    icon: SiJira,
    iconClassName: "text-[#2684ff]",
    badgeClassName: "bg-blue-50 border-blue-200 dark:bg-blue-500/10",
  },
  Branching: {
    icon: GitBranchPlus,
    iconClassName: "text-teal-600",
    badgeClassName: "bg-teal-50 border-teal-200 dark:bg-teal-500/10",
  },
  "Collaboration Workflow": {
    icon: Workflow,
    iconClassName: "text-cyan-700",
    badgeClassName: "bg-cyan-50 border-cyan-200 dark:bg-cyan-500/10",
  },
  AWS: {
    icon: CloudCog,
    iconClassName: "text-[#ff9900]",
    badgeClassName: "bg-amber-50 border-amber-200 dark:bg-amber-500/10",
  },
  EC2: {
    icon: ServerCog,
    iconClassName: "text-orange-600",
    badgeClassName: "bg-orange-50 border-orange-200 dark:bg-orange-500/10",
  },
  RDS: {
    icon: DatabaseZap,
    iconClassName: "text-blue-600",
    badgeClassName: "bg-blue-50 border-blue-200 dark:bg-blue-500/10",
  },
  DynamoDB: {
    icon: Boxes,
    iconClassName: "text-sky-700",
    badgeClassName: "bg-sky-50 border-sky-200 dark:bg-sky-500/10",
  },
  "API Gateway": {
    icon: Route,
    iconClassName: "text-purple-600",
    badgeClassName: "bg-purple-50 border-purple-200 dark:bg-purple-500/10",
  },
  S3: {
    icon: Cloud,
    iconClassName: "text-green-600",
    badgeClassName: "bg-green-50 border-green-200 dark:bg-green-500/10",
  },
  Cursor: {
    icon: BotMessageSquare,
    iconClassName: "text-slate-700 dark:text-slate-100",
    badgeClassName: "bg-slate-100 border-slate-300 dark:bg-slate-500/10",
  },
  Codex: {
    icon: SiOpenai,
    iconClassName: "text-emerald-700",
    badgeClassName: "bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10",
  },
  Copilot: {
    icon: SiGithubcopilot,
    iconClassName: "text-[#0ea5e9]",
    badgeClassName: "bg-sky-50 border-sky-200 dark:bg-sky-500/10",
  },
  Claude: {
    icon: SiClaude,
    iconClassName: "text-[#d97757]",
    badgeClassName: "bg-orange-50 border-orange-200 dark:bg-orange-500/10",
  },
  ChatGPT: {
    icon: SiOpenai,
    iconClassName: "text-[#10a37f]",
    badgeClassName: "bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10",
  },
  Antigravity: {
    icon: Brain,
    iconClassName: "text-violet-600",
    badgeClassName: "bg-violet-50 border-violet-200 dark:bg-violet-500/10",
  },
  "Prompt Design": {
    icon: PenTool,
    iconClassName: "text-amber-700",
    badgeClassName: "bg-amber-50 border-amber-200 dark:bg-amber-500/10",
  },
  "Research Support": {
    icon: FileSearch,
    iconClassName: "text-cyan-700",
    badgeClassName: "bg-cyan-50 border-cyan-200 dark:bg-cyan-500/10",
  },
};
const heroPillMeta = {
  ...subskillMeta,
  "AI Tools": {
    icon: BotMessageSquare,
    iconClassName: "text-fuchsia-600",
    badgeClassName: "bg-fuchsia-50 border-fuchsia-200 dark:bg-fuchsia-500/10",
  },
};
const skillAccentMeta = {
  "Java Backend": {
    badgeClassName: "bg-[#fff4eb] border-[#f6c79d] dark:bg-[#ea7d23]/15",
    iconClassName: "text-[#ea7d23]",
  },
  "Data Layer": {
    badgeClassName: "bg-cyan-50 border-cyan-200 dark:bg-cyan-500/10",
    iconClassName: "text-cyan-700",
  },
  "Frontend UI": {
    badgeClassName: "bg-cyan-50 border-cyan-200 dark:bg-cyan-500/10",
    iconClassName: "text-[#38bdf8]",
  },
  "Interface Craft": {
    badgeClassName: "bg-rose-50 border-rose-200 dark:bg-rose-500/10",
    iconClassName: "text-rose-600",
  },
  "Version Control": {
    badgeClassName: "bg-orange-50 border-orange-200 dark:bg-orange-500/10",
    iconClassName: "text-[#f05032]",
  },
  "Cloud Foundations": {
    badgeClassName: "bg-amber-50 border-amber-200 dark:bg-amber-500/10",
    iconClassName: "text-[#ff9900]",
  },
  "AI Coding Assistants": {
    badgeClassName: "bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10",
    iconClassName: "text-emerald-700",
  },
  "AI Workflow Stack": {
    badgeClassName: "bg-violet-50 border-violet-200 dark:bg-violet-500/10",
    iconClassName: "text-violet-600",
  },
};
const projectFilterMeta = {
  All: { icon: Layers2, iconClassName: "text-metallic-gold" },
  Web: { icon: MonitorSmartphone, iconClassName: "text-sky-600" },
  "Full Stack": { icon: Layers3, iconClassName: "text-emerald-600" },
  Backend: { icon: ServerCog, iconClassName: "text-emerald-600" },
  Cloud: { icon: Cloud, iconClassName: "text-violet-600" },
};
const projectTypeMeta = {
  Company: {
    icon: BriefcaseBusiness,
    label: "Company Project",
    detailClassName: "border-emerald-300/50 bg-emerald-50 text-emerald-800 shadow-[0_8px_20px_rgba(5,150,105,0.12)] dark:border-emerald-300/30 dark:bg-emerald-400/12 dark:text-emerald-200",
  },
  Personal: {
    icon: Component,
    label: "Personal Project",
    detailClassName: "border-sky-300/45 bg-sky-50 text-sky-800 shadow-[0_8px_20px_rgba(2,132,199,0.1)] dark:border-sky-300/25 dark:bg-sky-400/10 dark:text-sky-200",
  },
};
const projectTechMeta = {
  ...subskillMeta,
  "AWS Lambda": {
    icon: CloudCog,
    iconClassName: "text-[#ff9900]",
    badgeClassName: "bg-amber-50 border-amber-200 dark:bg-amber-500/10",
  },
  CloudFront: {
    icon: Cloud,
    iconClassName: "text-sky-600",
    badgeClassName: "bg-sky-50 border-sky-200 dark:bg-sky-500/10",
  },
  "HTML/CSS/JS": {
    icon: MonitorSmartphone,
    iconClassName: "text-fuchsia-600",
    badgeClassName: "bg-fuchsia-50 border-fuchsia-200 dark:bg-fuchsia-500/10",
  },
  "HTML/CSS": {
    icon: MonitorSmartphone,
    iconClassName: "text-fuchsia-600",
    badgeClassName: "bg-fuchsia-50 border-fuchsia-200 dark:bg-fuchsia-500/10",
  },
  JPA: {
    icon: SiHibernate,
    iconClassName: "text-[#59666c]",
    badgeClassName: "bg-slate-100 border-slate-300 dark:bg-slate-500/10",
  },
  "REST API": {
    icon: Route,
    iconClassName: "text-sky-600",
    badgeClassName: "bg-sky-50 border-sky-200 dark:bg-sky-500/10",
  },
};
const contactItems = [
  {
    href: "mailto:shivampisal.866@gmail.com",
    label: "shivampisal.866@gmail.com",
    icon: SiGmail,
    iconClassName: "text-[#ea4335]",
    badgeClassName: "bg-red-50 border-red-200 dark:bg-red-500/10",
  },
  {
    href: "https://github.com/ShivamPisal",
    label: "GitHub",
    icon: SiGithub,
    iconClassName: "text-slate-900 dark:text-white",
    badgeClassName: "bg-slate-100 border-slate-300 dark:bg-white/10",
  },
  {
    href: "https://www.linkedin.com/in/shivam-pisal",
    label: "LinkedIn",
    icon: FaLinkedin,
    iconClassName: "text-[#0a66c2]",
    badgeClassName: "bg-blue-50 border-blue-200 dark:bg-blue-500/10",
  },
];

function FloatingField({ as = "input", label, className = "", ...props }) {
  const Component = as;

  return (
    <label className={`group relative block ${className}`}>
      <Component
        {...props}
        placeholder=" "
        className="peer w-full rounded-md border border-metallic-gold/18 bg-white/55 px-4 pb-2.5 pt-5 text-sm text-vintage-dark outline-none transition focus:border-metallic-gold focus:bg-white/80 focus:ring-4 focus:ring-metallic-gold/10 dark:bg-white/[0.04] dark:text-vintage-base dark:focus:bg-white/[0.06]"
      />
      <span className="pointer-events-none absolute left-4 top-2.5 text-sm text-vintage-dark/48 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-metallic-gold dark:text-vintage-base/45 dark:peer-focus:text-metallic-champagne">
        {label}
      </span>
    </label>
  );
}

function PortfolioPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [projectFilter, setProjectFilter] = useState("All");
  const [journeyTab, setJourneyTab] = useState("experience");
  const reduceMotion = useReducedMotion();
  const [stableMobileHero, setStableMobileHero] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const updateStableHero = () => setStableMobileHero(mediaQuery.matches);

    updateStableHero();
    mediaQuery.addEventListener("change", updateStableHero);

    return () => mediaQuery.removeEventListener("change", updateStableHero);
  }, []);

  const shouldStabilizeHeroMotion = reduceMotion || stableMobileHero;

  const filteredProjects =
    projectFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === projectFilter.toLowerCase(),
        );
  const activeJourney =
    journeyTab === "education" ? educationTimeline : experienceTimeline;
  const visibleProjects = filteredProjects;
  const featuredProject = projects.find((project) => project.featured);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-16 pt-2 sm:px-6 lg:gap-8 lg:px-12">
      <section
        id="hero"
        className="hero-section section-shell surface-soft animated-border relative isolate overflow-hidden rounded-lg px-4 pt-3 pb-10 sm:px-6 md:px-8 md:pt-5 md:pb-11 lg:px-10"
      >
        <div className="section-aurora" />
        <div className="glass-panel absolute inset-0 -z-20 rounded-lg" />
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg">
          <div className="absolute inset-0 soft-grid opacity-45 dark:opacity-30" />
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-metallic-gold/14 to-transparent" />
          <div className="absolute bottom-0 right-0 h-24 w-full bg-gradient-to-t from-metallic-copper/12 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.3),transparent_40%,rgba(212,175,55,0.08))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_38%,rgba(212,175,55,0.08))]" />
        </div>

        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2">
          <Reveal
            as="div"
            amount={0.15}
            eager
            className="relative z-10 order-2 text-center lg:order-1 lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="mt-3 font-heading text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
            >
              <span className="text-vintage-dark dark:text-white">Shivam</span>{" "}
              <span className="text-metallic-gold">Pisal</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-metallic-gold/25 bg-white/60 px-4 py-2 text-xl font-semibold text-vintage-dark shadow-[0_14px_34px_rgba(30,20,12,0.08)] dark:bg-white/[0.05] dark:text-vintage-base sm:text-2xl md:text-2xl lg:justify-start xl:text-3xl"
            >
              <ShieldCheck size={22} className="text-metallic-gold" />
              Full Stack Developer
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-4 flex justify-center lg:justify-start"
            >
              <p className="rounded-md border border-metallic-gold/20 bg-white/55 px-4 py-2 text-sm font-semibold tracking-[0.16em] text-vintage-dark shadow-[0_8px_20px_rgba(30,20,12,0.06)] dark:bg-white/[0.04] dark:text-vintage-base sm:text-base">
                Building scalable systems with clarity, performance, and
                purpose.
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-vintage-dark/85 dark:text-vintage-base/74 sm:text-base md:text-base md:leading-7 lg:mx-0 lg:text-left xl:text-lg xl:leading-8"
            >
              I design and build scalable applications across backend systems,
              frontend interfaces, and AI-driven workflows with a focus on
              performance and real-world impact.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-5 flex justify-center lg:justify-start"
            >
              <div className="hero-divider" />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {heroTechItems.map((item) => {
                const meta = heroPillMeta[item];
                const ItemIcon = meta?.icon ?? BadgeCheck;

                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-metallic-gold/22 bg-white/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-vintage-dark dark:bg-white/[0.04] dark:text-vintage-base"
                  >
                    <span
                      className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${meta?.badgeClassName ?? "bg-metallic-gold/10 border-metallic-gold/20"}`}
                    >
                      <ItemIcon
                        size={11}
                        className={meta?.iconClassName ?? "text-metallic-gold"}
                      />
                    </span>
                    {item}
                  </span>
                );
              })}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="interactive-ring animated-border inline-flex w-full items-center justify-center gap-2 rounded-md bg-vintage-dark px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-vintage-base transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,24,23,0.28)] sm:w-auto dark:bg-vintage-base dark:text-vintage-dark"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href={resumeFile}
                download
                className="interactive-ring inline-flex w-full items-center justify-center gap-2 rounded-md border border-metallic-gold/28 bg-metallic-gold/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-vintage-dark transition duration-300 hover:-translate-y-1 hover:border-metallic-gold hover:bg-metallic-gold hover:text-vintage-base hover:shadow-[0_18px_40px_rgba(212,175,55,0.22)] sm:w-auto dark:text-vintage-base dark:hover:text-vintage-dark"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 grid gap-3 sm:grid-cols-3"
            >
              {[
                { label: "Focus", value: "Scalable Systems" },
                { label: "Approach", value: "Clean UX + Architecture" },
                { label: "Based In", value: "India" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="premium-card rounded-lg border border-metallic-gold/24 bg-white/55 p-4 backdrop-blur-sm dark:bg-white/[0.03]"
                >
                  <p className="text-[0.7rem] uppercase tracking-[0.26em] text-vintage-dark/65 dark:text-vintage-base/45">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-vintage-dark dark:text-vintage-base md:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="premium-card glass-panel mt-8 w-full rounded-lg p-4 text-left sm:p-5 lg:hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-vintage-dark/68 dark:text-vintage-base/45">
                    Profile Snapshot
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-vintage-dark dark:text-vintage-base sm:text-2xl">
                    Full Stack Developer
                  </h3>
                </div>
                <span className="rounded-md border border-metallic-gold/20 bg-metallic-gold/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-metallic-gold">
                  Available
                </span>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-vintage-dark/86 dark:text-vintage-base/72">
                <div className="flex items-center gap-3">
                  <BadgeCheck size={16} className="text-metallic-gold" />
                  Backend engineering with Java and Spring Boot
                </div>
                <div className="flex items-center gap-3">
                  <Layers3 size={16} className="text-metallic-gold" />
                  Clean frontend delivery with React and motion
                </div>
                <div className="flex items-center gap-3">
                  <Cloud size={16} className="text-metallic-gold" />
                  Cloud-native development with AWS and AI integration
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-metallic-gold" />
                  Maharashtra, India
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal
            as="div"
            amount={0.15}
            eager
            className="relative z-10 order-1 lg:order-2"
          >
            <motion.div
              variants={itemVariants}
              className="relative mx-auto flex max-w-md flex-col items-center gap-8 py-6 text-center"
            >
              <div className="absolute top-8 z-0 h-52 w-72 rotate-[-8deg] rounded-lg border border-metallic-gold/12 bg-white/20 soft-grid opacity-70 dark:bg-white/[0.03]" />
              <div className="pointer-events-none absolute inset-x-0 top-2 z-0 block h-[19rem] sm:top-4 sm:h-[24rem]">
                {heroTechItems.map((item, index) => {
                  const meta = heroPillMeta[item];
                  const FloatingIcon = meta?.icon ?? BadgeCheck;
                  const positions = [
                    "-left-1 top-10 sm:left-2 sm:top-10",
                    "-right-1 top-16 sm:right-4 sm:top-20",
                    "left-1 bottom-14 sm:left-0 sm:bottom-24",
                    "right-2 bottom-10 sm:right-8 sm:bottom-14",
                    "left-1/2 top-1 -translate-x-1/2",
                  ];

                  return (
                    <motion.span
                      key={item}
                      className={`hero-floating-badge absolute ${positions[index]} inline-flex h-9 w-9 items-center justify-center rounded-lg border border-metallic-gold/18 bg-white/75 text-metallic-gold shadow-[0_12px_28px_rgba(30,20,12,0.1)] dark:bg-black/35 sm:h-11 sm:w-11 sm:bg-white/70 sm:dark:bg-white/[0.06] ${shouldStabilizeHeroMotion ? "" : "backdrop-blur-md"}`}
                      animate={
                        shouldStabilizeHeroMotion
                          ? undefined
                          : {
                              y: [0, index % 2 === 0 ? -8 : 8, 0],
                              rotate: [0, index % 2 === 0 ? 3 : -3, 0],
                            }
                      }
                      transition={{
                        duration: 4.2 + index * 0.35,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={shouldStabilizeHeroMotion ? undefined : { y: -4, rotate: 2 }}
                    >
                      <FloatingIcon
                        size={16}
                        className={meta?.iconClassName ?? "text-metallic-gold"}
                      />
                    </motion.span>
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  shouldStabilizeHeroMotion
                    ? { opacity: 1, scale: 1, y: 0 }
                    : {
                        opacity: 1,
                        scale: 1,
                        y: [0, -10, 0],
                      }
                }
                transition={
                  shouldStabilizeHeroMotion
                    ? {
                        opacity: { duration: 0.55, delay: 0.12 },
                        scale: { duration: 0.55, delay: 0.12 },
                      }
                    : {
                        opacity: { duration: 0.55, delay: 0.12 },
                        scale: { duration: 0.55, delay: 0.12 },
                        y: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                }
                className="hero-photo-frame relative z-10"
              >
                <div className="animated-border rounded-full border border-metallic-gold/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(243,229,171,0.3))] p-3 shadow-[0_20px_60px_rgba(212,175,55,0.18)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(212,175,55,0.08))]">
                  <img
                    src={heroImage}
                    alt="Shivam Pisal"
                    className="h-72 w-72 rounded-full object-cover object-top shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:h-80 sm:w-80 md:h-80 md:w-80 xl:h-[22rem] xl:w-[22rem]"
                  />
                </div>
              </motion.div>

              <div className="premium-card glass-panel mt-12 hidden w-full rounded-lg p-4 text-left sm:p-5 lg:block">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-vintage-dark/68 dark:text-vintage-base/45">
                      Profile Snapshot
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-vintage-dark dark:text-vintage-base sm:text-2xl">
                      Full Stack Developer
                    </h3>
                  </div>
                  <span className="rounded-md border border-metallic-gold/20 bg-metallic-gold/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-metallic-gold">
                    Available
                  </span>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-vintage-dark/86 dark:text-vintage-base/72">
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={16} className="text-metallic-gold" />
                    Backend engineering with Java and Spring Boot
                  </div>
                  <div className="flex items-center gap-3">
                    <Layers3 size={16} className="text-metallic-gold" />
                    Clean frontend delivery with React and motion
                  </div>
                  <div className="flex items-center gap-3">
                    <Cloud size={16} className="text-metallic-gold" />
                    Cloud-native development with AWS and AI integration
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-metallic-gold" />
                    Maharashtra, India
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <Reveal
        id="experience"
        className="section-shell surface-muted animated-border relative overflow-hidden rounded-lg px-4 py-10 sm:px-6 md:py-16 lg:px-10"
      >
        <div className="section-aurora" />
        <div className="glass-panel absolute inset-0 -z-10 rounded-lg" />
        <SectionTitle
          eyebrow="Experience"
          title="Professional experience will be added here"
          subtitle="Hands-on full stack experience contributing to REST API integration, UI improvements, AWS service usage, bug fixing, deployment support, and ongoing product enhancements."
        />

        <TimelineSection
          items={workExperience}
          emptyState={{
            eyebrow: "Ready For Future Updates",
            title: "Add internships, jobs, or freelance work here later",
            description:
              "This section is intentionally prepared for your future experience entries. When you get an internship, job, or freelance project, you only need to add title, org, period, details, and icon in the data file.",
          }}
        />
      </Reveal>

      <Reveal
        id="about"
        className="section-shell surface-muted animated-border relative overflow-hidden rounded-lg px-4 py-10 sm:px-6 md:py-16 lg:px-10"
      >
        <div className="section-aurora" />
        <div className="glass-panel absolute inset-0 -z-10 rounded-lg" />
        <SectionTitle
          eyebrow="Journey"
          title="Education and certifications, separated with clarity"
          subtitle="Switch between academic milestones and certifications to explore the foundations behind my development journey."
        />

        <motion.div
          variants={itemVariants}
          className="premium-card mx-auto mb-8 max-w-3xl rounded-lg border border-metallic-gold/18 bg-white/55 p-5 text-center shadow-[0_12px_28px_rgba(30,20,12,0.08)] dark:bg-white/[0.03]"
        >
          <p className="text-sm leading-7 text-vintage-dark/82 dark:text-vintage-base/74 md:text-base md:leading-8">
            I’m a full stack developer who enjoys building backend-first
            products with clean architecture, thoughtful interfaces, and
            practical AI-assisted workflows. I’m looking for opportunities where
            I can grow across product engineering, cloud systems, and modern
            frontend delivery.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mx-auto mb-8 flex max-w-md flex-wrap justify-center gap-3"
        >
          {journeyTabs.map((tab) => {
            const TabIcon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setJourneyTab(tab.id)}
                className={`interactive-ring relative min-w-[9rem] rounded-md border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  journeyTab === tab.id
                    ? "border-metallic-gold bg-vintage-dark text-vintage-base dark:bg-vintage-base dark:text-vintage-dark"
                    : "border-metallic-gold/20 bg-white/45 text-vintage-dark hover:border-metallic-gold/45 dark:bg-white/[0.03] dark:text-vintage-base"
                }`}
              >
                {journeyTab === tab.id && (
                  <motion.span
                    layoutId="journey-tab"
                    className="absolute inset-0 -z-10 rounded-md bg-vintage-dark dark:bg-vintage-base"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-2">
                  <TabIcon
                    size={16}
                    className={journeyTab === tab.id ? "" : tab.iconClassName}
                  />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={journeyTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: smoothEase }}
          >
            <TimelineSection items={activeJourney} emptyState={null} />
          </motion.div>
        </AnimatePresence>
      </Reveal>

      <Reveal
        id="skills"
        className="section-shell surface-soft animated-border relative overflow-hidden rounded-lg px-4 py-10 sm:px-6 md:py-16 lg:px-10"
      >
        <div className="section-aurora" />
        <div className="glass-panel absolute inset-0 -z-10 rounded-lg" />
        <SectionTitle
          eyebrow="Skills"
          title="Skills Tools and Technologies"
          subtitle="A simple overview of the technologies and workflows I use most while building products."
        />

        <motion.div
          variants={itemVariants}
          className="mx-auto -mt-4 mb-8 flex max-w-3xl flex-wrap justify-center gap-3 md:-mt-6"
        >
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              className={`interactive-ring relative overflow-hidden rounded-md border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition focus-ring md:text-base ${
                activeTab === idx
                  ? "border-metallic-gold bg-vintage-dark text-vintage-base dark:bg-vintage-base dark:text-vintage-dark"
                  : "border-metallic-gold/20 bg-white/35 text-vintage-dark hover:border-metallic-gold/45 dark:bg-white/[0.03] dark:text-vintage-base"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={skillCategories[activeTab].category}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: smoothEase }}
            className="grid gap-4 md:grid-cols-2"
          >
            {skillCategories[activeTab].skills.map((skill) => {
              const PrimaryIcon = skill.icon;
              const AccentIcon = skill.accentIcon;
              const accentMeta = skillAccentMeta[skill.name];

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.38, ease: smoothEase }}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  className="group premium-card animated-border glass-panel rounded-lg p-5 text-left"
                >
                  {AccentIcon && (
                    <motion.div
                      className="pointer-events-none absolute -right-3 -top-4 text-metallic-gold/10 transition group-hover:text-metallic-gold/16 dark:text-metallic-champagne/8"
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              y: [0, -8, 0],
                              rotate: [0, 4, 0],
                            }
                      }
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <AccentIcon size={96} strokeWidth={1.25} />
                    </motion.div>
                  )}
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-lg border transition duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.18)] ${
                        accentMeta?.badgeClassName ??
                        "border-metallic-gold/22 bg-metallic-gold/10"
                      }`}
                    >
                      <PrimaryIcon
                        size={26}
                        strokeWidth={1.8}
                        className={accentMeta?.iconClassName ?? "text-metallic-gold"}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-heading text-xl font-semibold text-vintage-dark dark:text-vintage-base md:text-2xl">
                        {skill.name}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 border-t border-metallic-gold/12 pt-4">
                        {skill.subskills.map((subskill) => {
                          const meta = subskillMeta[subskill];
                          const SubskillIcon = meta?.icon ?? BadgeCheck;

                          return (
                            <span
                              key={subskill}
                              className="inline-flex items-center gap-2 rounded-md border border-metallic-gold/16 bg-white/68 px-3 py-2 text-xs font-semibold tracking-[0.08em] text-vintage-dark transition hover:-translate-y-0.5 hover:border-metallic-gold/35 dark:bg-white/[0.04] dark:text-vintage-base"
                            >
                              <span
                                className={`inline-flex h-6 w-6 items-center justify-center rounded-md border ${meta?.badgeClassName ?? "bg-metallic-gold/10 border-metallic-gold/20"}`}
                              >
                                <SubskillIcon
                                  size={13}
                                  className={meta?.iconClassName ?? "text-metallic-gold"}
                                />
                              </span>
                              {subskill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </Reveal>

      <Reveal
        id="projects"
        amount={0.03}
        className="section-shell surface-muted animated-border relative overflow-hidden rounded-lg px-4 py-10 sm:px-6 md:py-16 lg:px-10"
      >
        <div className="section-aurora" />
        <div className="glass-panel absolute inset-0 -z-10 rounded-lg" />
        <SectionTitle
          eyebrow="Projects"
          title="Selected work that blends craft, systems, and impact"
          subtitle="A curated set of builds across product workflows, backend logic, and data-driven interfaces with a strong emphasis on clarity and execution."
        />

        {featuredProject && (
          <motion.article
            variants={itemVariants}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            className="group premium-card animated-border glass-panel mb-8 grid overflow-hidden rounded-lg border border-metallic-gold/20 shadow-[0_22px_60px_rgba(30,20,12,0.12)] lg:grid-cols-[0.82fr_1.18fr]"
          >
            <div className="relative min-h-[15rem] overflow-hidden bg-[linear-gradient(135deg,#221d14,#111111_64%,#080808)] p-4 text-vintage-base sm:p-5">
              <div className="absolute inset-0 soft-grid opacity-20" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.22),transparent_42%),radial-gradient(circle_at_top_right,rgba(239,225,180,0.18),transparent_34%),linear-gradient(180deg,transparent,rgba(0,0,0,0.28))]" />
              <motion.div
                className="absolute -left-20 top-12 h-40 w-40 rounded-full border border-metallic-gold/20"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative flex h-full flex-col">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-metallic-gold/25 bg-metallic-gold/18 px-3 py-1 text-xs font-semibold uppercase text-metallic-champagne">
                    <Award size={14} />
                    Featured Project
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase text-white/70">
                      {(() => {
                        const CategoryIcon =
                          projectFilterMeta[featuredProject.category]?.icon ?? Layers2;

                        return <CategoryIcon size={14} />;
                      })()}
                      {featuredProject.category}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase text-white/70">
                      <BriefcaseBusiness size={14} />
                      {featuredProject.projectType}
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="mb-3 max-w-xl font-heading text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {featuredProject.preview}
                  </p>
                  <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.075] p-3 shadow-[0_22px_56px_rgba(0,0,0,0.32)] backdrop-blur-sm">
                    {featuredProject.demoImage ? (
                      <img
                        src={featuredProject.demoImage}
                        alt={featuredProject.demoImageAlt ?? `${featuredProject.title} demo preview`}
                        className="max-h-[11rem] w-full rounded-md object-contain transition duration-700 group-hover:scale-[1.025]"
                      />
                    ) : (
                      <div className="relative min-h-[10rem] overflow-hidden rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-3">
                        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                          </div>
                          <span className="rounded-full border border-metallic-gold/20 bg-metallic-gold/10 px-3 py-1 text-[0.65rem] font-semibold uppercase text-metallic-champagne">
                            {featuredProject.title}
                          </span>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
                          <div className="rounded-lg border border-white/10 bg-black/18 p-3">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-metallic-gold/20 bg-metallic-gold/12">
                              <ShieldCheck size={18} className="text-metallic-gold" />
                            </div>
                            <p className="font-heading text-xl font-semibold text-white">
                              {featuredProject.category}
                            </p>
                            <p className="mt-2 text-xs leading-5 text-white/58">
                              {featuredProject.projectType} project preview
                            </p>
                          </div>

                          <div className="grid gap-2">
                            {featuredProject.metrics.map((metric) => (
                              <div
                                key={metric}
                                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.055] px-3 py-2 text-sm font-semibold text-white/78"
                              >
                                <BadgeCheck size={15} className="text-metallic-gold" />
                                {metric}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {featuredProject.tech.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.65rem] font-semibold uppercase text-white/58"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-5 md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase text-metallic-gold">
                    Priority project
                  </p>
                  <h3 className="mt-2 font-heading text-3xl font-semibold text-vintage-dark dark:text-vintage-base md:text-4xl">
                    {featuredProject.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-metallic-gold/20 bg-metallic-gold/10 px-3 py-1.5 text-xs font-semibold uppercase text-metallic-gold">
                  <ShieldCheck size={14} />
                  Case Study
                </span>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-vintage-dark/72 dark:text-vintage-base/74 md:text-base md:leading-7">
                {featuredProject.summary}
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {featuredProject.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="premium-card rounded-lg border border-metallic-gold/16 bg-white/55 p-2.5 text-xs font-semibold text-vintage-dark/78 dark:bg-white/[0.04] dark:text-vintage-base/76"
                  >
                    <BadgeCheck size={13} className="mb-1.5 text-metallic-gold" />
                    {metric}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.tech.map((tech) => {
                  const meta = projectTechMeta[tech];
                  const TechIcon = meta?.icon ?? BadgeCheck;

                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-full border border-metallic-gold/20 bg-metallic-gold/10 px-3 py-1.5 text-xs font-semibold uppercase text-metallic-gold"
                    >
                      <TechIcon
                        size={13}
                        className={meta?.iconClassName ?? "text-metallic-gold"}
                      />
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-ring animated-border inline-flex w-full items-center justify-center gap-2 rounded-md bg-vintage-dark px-5 py-3 text-sm font-semibold uppercase text-vintage-base transition hover:-translate-y-1 sm:w-auto dark:bg-vintage-base dark:text-vintage-dark"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-ring inline-flex w-full items-center justify-center gap-2 rounded-md border border-metallic-gold/22 px-5 py-3 text-sm font-semibold uppercase text-vintage-dark transition hover:-translate-y-1 hover:border-metallic-gold sm:w-auto dark:text-vintage-base"
                >
                  <Github size={17} />
                  Source Code
                </a>
              </div>
            </div>
          </motion.article>
        )}

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {projectFilters.map((filter) => {
            const meta = projectFilterMeta[filter];
            const FilterIcon = meta?.icon ?? Layers2;

            return (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`interactive-ring rounded-md border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition focus-ring ${
                  projectFilter === filter
                    ? "border-metallic-gold bg-vintage-dark text-vintage-base dark:bg-vintage-base dark:text-vintage-dark"
                    : "border-metallic-gold/20 bg-white/35 text-vintage-dark hover:border-metallic-gold/45 dark:bg-white/[0.03] dark:text-vintage-base"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <FilterIcon
                    size={16}
                    className={projectFilter === filter ? "" : meta?.iconClassName}
                  />
                  {filter}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: smoothEase }}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              className="group premium-card animated-border glass-panel flex h-full flex-col overflow-hidden rounded-lg border border-metallic-gold/20 shadow-[0_14px_34px_rgba(30,20,12,0.08)] transition-transform duration-300 lg:min-h-[44rem]"
            >
              {(() => {
                const projectType = projectTypeMeta[project.projectType] ?? projectTypeMeta.Personal;
                const ProjectTypeIcon = projectType.icon;

                return (
                  <>
              <div className="relative overflow-hidden border-b border-metallic-gold/12 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.16),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.1),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_60%)]" />
                <div className="relative flex min-h-[20rem] flex-1 flex-col rounded-lg border border-metallic-gold/16 bg-vintage-dark p-4 text-vintage-base shadow-[0_16px_50px_rgba(16,14,12,0.28)]">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.featured && (
                        <span className="rounded-full border border-metallic-gold/25 bg-metallic-gold/18 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-metallic-champagne">
                          Featured
                        </span>
                      )}
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-metallic-champagne">
                        <span className="inline-flex items-center gap-1.5">
                          {(() => {
                            const CategoryIcon =
                              projectFilterMeta[project.category]?.icon ?? Layers2;

                            return (
                              <CategoryIcon
                                size={12}
                                className={
                                  projectFilterMeta[project.category]?.iconClassName ??
                                  "text-metallic-champagne"
                                }
                              />
                            );
                          })()}
                          {project.category}
                        </span>
                      </span>
                    </div>
                    <span className="text-xs uppercase tracking-[0.22em] text-white/45">
                      Preview
                    </span>
                  </div>
                  <div className="grid flex-1 gap-3">
                    <div className="overflow-hidden rounded-lg border border-white/8 bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(255,255,255,0.05))]">
                      <div className="relative flex aspect-[1900/870] items-center justify-center border-b border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),rgba(28,25,23,0.82))] p-3 sm:p-4">
                        {project.demoImage ? (
                          <img
                            src={project.demoImage}
                            alt={project.demoImageAlt ?? `${project.title} demo preview`}
                            className="block h-full w-full rounded-md object-cover object-top transition duration-500 group-hover:scale-[1.01]"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.24em] text-white/38">
                            Demo Preview
                          </div>
                        )}
                      </div>
                      <div className="p-3.5">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                          Concept
                        </p>
                        <p className="mt-3 font-heading text-2xl font-semibold text-white">
                          {project.preview}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-white/68">
                          {project.summary}
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="rounded-lg border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/75"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-metallic-gold">
                      {project.featured
                        ? "Priority project"
                        : "Selected project"}
                    </p>
                    <h3 className="mt-3 font-heading text-3xl font-semibold text-vintage-dark dark:text-vintage-base">
                      {project.title}
                    </h3>
                  </div>
                  <div className="rounded-full border border-metallic-gold/20 bg-metallic-gold/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-metallic-gold">
                    <span className="inline-flex items-center gap-1.5">
                      {(() => {
                        const CategoryIcon =
                          projectFilterMeta[project.category]?.icon ?? Layers2;

                        return (
                          <CategoryIcon
                            size={13}
                            className={
                              projectFilterMeta[project.category]?.iconClassName ??
                              "text-metallic-gold"
                            }
                          />
                        );
                      })()}
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] ${projectType.detailClassName}`}>
                  <ProjectTypeIcon size={13} />
                  {projectType.label}
                </div>

                <p className="mt-5 text-sm leading-7 text-vintage-dark/70 dark:text-vintage-base/72 md:text-base">
                  {project.problem}
                </p>
                <p className="mt-4 text-sm leading-7 text-vintage-dark/72 dark:text-vintage-base/74 md:text-base">
                  <span className="font-semibold text-vintage-dark dark:text-vintage-base">
                    Solution:
                  </span>{" "}
                  {project.solution}
                </p>

                <div className="mt-5 rounded-lg border border-metallic-gold/16 bg-white/55 p-4 dark:bg-white/[0.03]">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-metallic-copper dark:text-metallic-gold">
                    Outcomes
                  </p>
                  <div className="mt-3 space-y-2">
                    {project.outcomes.map((outcome) => (
                      <p
                        key={outcome}
                        className="text-sm leading-6 text-vintage-dark/82 dark:text-vintage-base/74"
                      >
                        {outcome}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const meta = projectTechMeta[tech];
                    const TechIcon = meta?.icon ?? BadgeCheck;

                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 rounded-full border border-metallic-gold/20 bg-metallic-gold/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-metallic-gold transition hover:-translate-y-0.5 hover:border-metallic-gold/40"
                      >
                        <TechIcon
                          size={13}
                          className={meta?.iconClassName ?? "text-metallic-gold"}
                        />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-vintage-dark px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-vintage-base transition hover:-translate-y-1 sm:w-auto dark:bg-vintage-base dark:text-vintage-dark"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-ring inline-flex w-full items-center justify-center gap-2 rounded-md border border-metallic-gold/22 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-vintage-dark transition hover:-translate-y-1 hover:border-metallic-gold sm:w-auto dark:text-vintage-base"
                  >
                    <Github size={17} />
                    Source Code
                  </a>
                </div>
              </div>
                  </>
                );
              })()}
            </motion.article>
          ))}
        </div>
      </Reveal>

      <Reveal
        id="resume"
        className="section-shell surface-soft animated-border relative overflow-hidden rounded-lg px-4 py-10 sm:px-6 md:py-16 lg:px-10"
      >
        <div className="section-aurora" />
        <div className="glass-panel absolute inset-0 -z-10 rounded-lg" />
        <SectionTitle
          eyebrow="Resume"
          title="A focused snapshot of my experience and capabilities"
          subtitle="Preview the document directly in the page or download the PDF for a full overview."
        />
        <motion.div
          variants={itemVariants}
          className="premium-card overflow-hidden rounded-lg border border-metallic-gold/16 bg-white/35 p-4 shadow-[0_26px_70px_rgba(20,16,10,0.08)] dark:bg-white/[0.03] md:p-6"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-metallic-gold">
                Document preview
              </p>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-vintage-dark dark:text-vintage-base">
                Resume PDF
              </h3>
            </div>
            <a
              href={resumeFile}
              download
              className="interactive-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-metallic-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-vintage-base transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(212,175,55,0.22)] sm:w-auto dark:text-vintage-dark"
            >
              <Download size={18} />
              Download
            </a>
          </div>

          <div className="rounded-lg border border-metallic-gold/16 bg-white/45 p-5 text-center dark:bg-white/[0.03] md:hidden">
            <FileSearch
              size={28}
              className="mx-auto text-metallic-gold"
              strokeWidth={1.7}
            />
            <p className="mt-3 font-heading text-xl font-semibold text-vintage-dark dark:text-vintage-base">
              Resume PDF
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-vintage-dark/68 dark:text-vintage-base/68">
              Preview is available on larger screens. Download the PDF for the
              full overview.
            </p>
          </div>

          <iframe
            src={resumeFile}
            title="Resume Preview"
            loading="lazy"
            className="hidden h-[520px] w-full rounded-lg border border-metallic-gold/18 bg-white md:block md:h-[620px]"
          />
        </motion.div>
      </Reveal>

      <Reveal
        id="contact"
        amount={0.03}
        className="section-shell surface-muted animated-border relative overflow-hidden rounded-lg px-4 py-6 sm:px-6 md:py-7 lg:px-8 lg:py-9"
      >
        <div className="section-aurora" />
        <div className="glass-panel absolute inset-0 -z-10 rounded-lg" />
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something impactful together"
          subtitle="Whether you are hiring, collaborating, or exploring an idea, I'm open to conversations around thoughtful digital products and engineering work."
          className="mb-6 md:mb-7"
        />

        <div className="grid gap-3.5 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form
            variants={itemVariants}
            action="https://formspree.io/f/xykbbnll"
            method="POST"
            className="premium-card animated-border glass-panel rounded-lg p-4 md:p-5"
          >
            <div className="mb-3.5">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-metallic-gold">
                Send a message
              </p>
              <h3 className="mt-2 font-heading text-3xl font-semibold text-vintage-dark dark:text-vintage-base">
                Start the conversation
              </h3>
            </div>

            <div className="space-y-2">
              <FloatingField
                type="text"
                name="name"
                label="Your name"
                required
              />
              <FloatingField
                type="email"
                name="email"
                label="Email address"
                required
              />
              <FloatingField
                as="textarea"
                name="message"
                label="Project details"
                rows="3"
                required
              />
            </div>

            <button
              type="submit"
              className="interactive-ring animated-border mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-vintage-dark px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-vintage-base transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,24,23,0.24)] dark:bg-vintage-base dark:text-vintage-dark"
            >
              <Send size={18} />
              Send Message
            </button>

          </motion.form>

          <motion.div variants={itemVariants} className="grid gap-3">
            <div className="premium-card glass-panel rounded-lg p-4 md:p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-metallic-gold">
                Direct contact
              </p>
              <h3 className="mt-2 font-heading text-3xl font-semibold text-vintage-dark dark:text-vintage-base">
                Prefer a direct route?
              </h3>
              <p className="mt-3 text-sm leading-7 text-vintage-dark/72 dark:text-vintage-base/72 md:text-base">
                Reach out by email or connect through GitHub and LinkedIn. I'm
                especially interested in full-time roles, freelance builds, and
                developer-focused products.
              </p>
            </div>

            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.42, delay: index * 0.08, ease: smoothEase }}
                whileHover={reduceMotion ? undefined : { x: 6 }}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="interactive-ring premium-card glass-panel flex items-center justify-between rounded-lg p-3.5 transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border ${item.badgeClassName}`}
                  >
                    <item.icon size={18} className={item.iconClassName} />
                  </div>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-vintage-dark/42 dark:text-vintage-base/42">
                      Connect
                    </p>
                    <p className="mt-1 text-base font-semibold text-vintage-dark dark:text-vintage-base">
                      {item.label}
                    </p>
                  </div>
                </div>
                <ArrowRight size={18} className="text-metallic-gold" />
              </motion.a>
            ))}

            <div className="premium-card glass-panel rounded-lg p-4 md:p-5">
              <div className="flex items-center gap-3 text-metallic-gold">
                <BriefcaseBusiness size={18} />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em]">
                  Open to opportunities
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-vintage-dark/72 dark:text-vintage-base/72 md:text-base">
                I'm currently sharpening my backend and cloud depth while
                creating polished frontend experiences. If your team values
                thoughtful execution, I'd be glad to talk.
              </p>
            </div>
          </motion.div>
        </div>
      </Reveal>

      <motion.footer
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: smoothEase }}
        className="premium-card relative overflow-hidden rounded-lg border border-metallic-gold/18 bg-[linear-gradient(180deg,rgba(239,231,221,0.92),rgba(228,218,205,0.86))] px-5 py-6 text-center shadow-[0_12px_28px_rgba(30,20,12,0.08)] dark:bg-[linear-gradient(180deg,rgba(24,21,18,0.88),rgba(16,14,12,0.82))]"
      >
        <div className="metal-line-animated absolute left-6 right-6 top-0" />
        <p className="font-heading text-xl font-semibold text-vintage-dark dark:text-vintage-base">
          Shivam Pisal
        </p>
        <p className="mt-2 text-sm uppercase tracking-[0.24em] text-metallic-copper dark:text-metallic-champagne">
          Full Stack Developer
        </p>
        <p className="mt-3 text-sm text-vintage-dark/80 dark:text-vintage-base/72">
          Building thoughtful web products with Java, React, AWS, and
          AI-assisted workflows.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm font-medium text-vintage-dark/82 dark:text-vintage-base/74">
          <a
            href="mailto:shivampisal.866@gmail.com"
            className="inline-flex items-center gap-2 hover:text-metallic-copper dark:hover:text-metallic-champagne"
          >
            <SiGmail size={16} className="text-[#ea4335]" />
            Email
          </a>
          <a
            href="https://github.com/ShivamPisal"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-metallic-copper dark:hover:text-metallic-champagne"
          >
            <SiGithub size={16} className="text-slate-900 dark:text-white" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-pisal"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-metallic-copper dark:hover:text-metallic-champagne"
          >
            <FaLinkedin size={16} className="text-[#0a66c2]" />
            LinkedIn
          </a>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-vintage-dark/58 dark:text-vintage-base/46">
          © 2026 Shivam Pisal
        </p>
      </motion.footer>
    </main>
  );
}

export default PortfolioPage;
