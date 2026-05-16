import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data/portfolioData";
import {
  BriefcaseBusiness,
  Code2,
  FileText,
  Home,
  Layers3,
  Menu,
  Moon,
  Route,
  Send,
  Sun,
  X,
} from "lucide-react";
import { scrollToSectionById } from "../utils/anchorScroll";

const navIconMap = {
  hero: Home,
  experience: BriefcaseBusiness,
  about: Route,
  skills: Code2,
  projects: Layers3,
  resume: FileText,
  contact: Send,
};

function Navbar({ darkMode, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    if (activeSection === id) {
      setMenuOpen(false);
      return;
    }
    window.history.pushState(null, "", `#${id}`);
    scrollToSectionById(id, "auto");
    setMenuOpen(false);
  };

  useEffect(() => {
    const ids = navLinks.map((link) => link.id);
    let ticking = false;

    const updateActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.28;
      let currentSection = ids[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      ids.forEach((id, index) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportAnchor);
        const sectionInView =
          rect.top <= viewportAnchor && rect.bottom >= viewportAnchor;

        if (sectionInView) {
          currentSection = id;
          closestDistance = -1;
          return;
        }

        if (closestDistance !== -1 && distance < closestDistance) {
          closestDistance = distance;
          currentSection = id;
        }

        if (
          index === ids.length - 1 &&
          window.innerHeight + window.scrollY >= document.body.offsetHeight - 16
        ) {
          currentSection = ids[ids.length - 1];
        }
      });

      setActiveSection(currentSection);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 px-4 pt-3 sm:px-6 lg:px-12"
    >
      <nav className="animated-border glass-panel mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-lg px-4 py-3 md:px-6">
        <a
          href="#hero"
          onClick={(event) => handleNavClick(event, "hero")}
          className="group flex items-center gap-3 rounded-md focus-ring"
        >
          <img
            src="/favicon.png"
            alt="SP Logo"
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
          />
          <span className="hidden font-heading text-lg font-semibold tracking-[0.08em] text-vintage-dark dark:text-vintage-base sm:block">
            Shivam <span className="text-metallic-gold">Pisal</span>
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const NavIcon = navIconMap[link.id] ?? Home;

            return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => handleNavClick(event, link.id)}
              className={`group relative rounded-md px-3 py-2 text-sm font-medium transition focus-ring ${
                activeSection === link.id
                  ? "font-semibold text-vintage-dark dark:text-vintage-base"
                  : "text-vintage-dark/70 hover:text-vintage-dark dark:text-vintage-base/65 dark:hover:text-vintage-base"
              }`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-md bg-metallic-gold/10 shadow-[inset_0_0_0_1px_rgba(212,175,55,0.18)]"
                  transition={{ type: "spring", stiffness: 360, damping: 32 }}
                />
              )}
              <span className="relative z-10 inline-flex items-center gap-2">
                <NavIcon size={15} strokeWidth={1.8} className={activeSection === link.id ? "text-metallic-gold" : "text-current/65"} />
                {link.label}
              </span>
              <span className="absolute left-4 right-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-metallic-gold via-metallic-champagne to-metallic-gold transition-transform duration-300 group-hover:scale-x-100" />
              {activeSection === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-4 right-4 bottom-1 h-px bg-gradient-to-r from-metallic-gold via-metallic-champagne to-metallic-copper"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
            </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="interactive-ring flex h-11 w-11 items-center justify-center rounded-md border border-metallic-gold/25 bg-vintage-base/70 text-vintage-dark transition focus-ring dark:bg-vintage-dark/65 dark:text-vintage-base"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="interactive-ring flex h-11 w-11 items-center justify-center rounded-md border border-metallic-gold/25 bg-vintage-base/70 text-vintage-dark transition focus-ring dark:bg-vintage-dark/65 dark:text-vintage-base md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl md:hidden"
          >
            <div className="glass-panel overflow-hidden rounded-lg px-3 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleNavClick(event, link.id)}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition focus-ring ${
                    activeSection === link.id
                      ? "bg-metallic-gold/12 text-vintage-dark dark:text-vintage-base"
                      : "text-vintage-dark/70 hover:bg-white/40 dark:text-vintage-base/72 dark:hover:bg-white/5"
                  }`}
                >
                  <span className="inline-flex items-center gap-3">
                    {(() => {
                      const NavIcon = navIconMap[link.id] ?? Home;
                      return <NavIcon size={16} className={activeSection === link.id ? "text-metallic-gold" : "text-current/65"} />;
                    })()}
                    {link.label}
                  </span>
                  {activeSection === link.id && (
                    <span className="h-2 w-2 rounded-full bg-metallic-gold shadow-[0_0_18px_rgba(212,175,55,0.6)]" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
