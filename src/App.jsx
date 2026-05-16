import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollTopButton from "./components/ScrollTopButton";
import ScrollProgress from "./components/ScrollProgress";
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

  useEffect(() => {
    if (!window.location.hash) return;

    const hashId = window.location.hash.slice(1);
    window.history.scrollRestoration = "manual";
    const syncHashScroll = () => scrollToSectionById(hashId, "auto");

    const rafId = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(syncHashScroll);
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.history.scrollRestoration = "auto";
    };
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
      <ScrollProgress />
      
      <CustomCursor />
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
