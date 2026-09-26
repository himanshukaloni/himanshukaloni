import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, toggle }) {
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <span className={theme === "light" ? "active" : ""}><Sun size={14} /></span>
      <span className={theme === "dark" ? "active" : ""}><Moon size={14} /></span>
    </button>
  );
}
