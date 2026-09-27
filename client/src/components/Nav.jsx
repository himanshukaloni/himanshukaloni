import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Nav({ theme, toggle }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const navRef = useRef(null);

  useEffect(() => {
    const ids = ["home", ...links.map(([, id]) => id)];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnResize = () => { if (window.innerWidth > 760) setOpen(false); };
    const closeOnScroll = () => { if (open) setOpen(false); };
    window.addEventListener("resize", closeOnResize);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => { window.removeEventListener("resize", closeOnResize); window.removeEventListener("scroll", closeOnScroll); };
  }, [open]);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (open && navRef.current && !navRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const jump = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav-wrap">
      <nav ref={navRef} className="nav">
        <button className="brand" onClick={() => jump("home")} aria-label="Go home">
          <span>Himanshu</span><i>.</i>
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, id]) => (
            <button key={id} className={active === id ? "active" : ""} onClick={() => jump(id)}>{label}</button>
          ))}
          <a className="nav-talk" href="mailto:himanshukaloni99@gmail.com">Let's Talk <ArrowUpRight size={14} /></a>
        </div>
        <div className="nav-actions">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
    </header>
  );
}
