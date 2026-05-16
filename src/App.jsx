import { useEffect, useLayoutEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollTopButton from "./components/ScrollTopButton";
import AmbientMotion from "./components/AmbientMotion";
import PortfolioPage from "./pages/PortfolioPage";
import { scrollToSectionById } from "./utils/anchorScroll";

function App() {
  const reduceMotion = useReducedMotion();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";

    const forceTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    if (!window.location.hash || window.location.hash === "#hero") {
      forceTop();
      const rafId = window.requestAnimationFrame(forceTop);
      const timeoutId = window.setTimeout(forceTop, 120);

      return () => {
        window.cancelAnimationFrame(rafId);
        window.clearTimeout(timeoutId);
        window.history.scrollRestoration = "auto";
      };
    }

    const hashId = window.location.hash.slice(1);
    const syncHashScroll = () => {
      if (hashId === "hero") {
        forceTop();
        return;
      }
      scrollToSectionById(hashId, "auto");
    };

    const rafId = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(syncHashScroll);
    });
    const timeoutId = window.setTimeout(syncHashScroll, 160);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      window.history.scrollRestoration = "auto";
    };
  }, []);

  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted && (!window.location.hash || window.location.hash === "#hero")) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.45 }}
      className="relative min-h-screen overflow-x-clip bg-transparent text-vintage-dark transition-colors dark:text-vintage-base"
    >
      <div className="pointer-events-none fixed inset-0 z-10 opacity-[0.035] dark:opacity-[0.055] soft-grid" />
      <AmbientMotion />
      
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((prev) => !prev)}
      />
      <PortfolioPage />
      <ScrollTopButton />
    </motion.div>
  );
}

export default App;
