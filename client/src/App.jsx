import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import { useTheme } from "./hooks/useTheme";
import "./styles.css";

export default function App() {
  const [theme, toggle] = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  if (window.location.pathname === "/resume") {
    return <Resume />;
  }

  return (
    <div className="site-shell">
      <Background theme={theme} />
      <div className="scroll-progress"><span style={{ transform: `scaleX(${progress})` }} /></div>
      <Nav theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Contact />
      </main>
      <Footer />
      <motion.a
        href="#home"
        className="back-top"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: progress > 0.18 ? 1 : 0, y: progress > 0.18 ? 0 : 12 }}
        transition={{ duration: 0.25 }}
        aria-label="Back to top"
      >
        <ArrowUpRight size={16} />
      </motion.a>
    </div>
  );
}
