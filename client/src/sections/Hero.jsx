import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../components/Reveal";

const code = [
  "const developer = {",
  '  name: "Himanshu Kaloni",',
  '  role: "MERN Stack Developer",',
  '  focus: ["Build", "Learn", "Improve"],',
  '  currently: "BCA 3rd Year",'
  "};",
];

export default function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="hero-noise" />
      <div className="hero-content page-width">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow"><span>01</span><b /> FULL STACK DEVELOPER</div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1>Crafting<br /><em>Modern Web</em><br />Experiences<span>.</span></h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="hero-lede">I'm <strong>Himanshu Kaloni</strong>, a BCA student and passionate developer who loves building modern, scalable and user-focused web applications.</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View My Work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="/resume">Download Resume <Download size={15} /></a>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero-stats">
              <div><strong>04+</strong><span>Projects</span></div>
              <div><strong>03rd</strong><span>Year BCA</span></div>
              <div><strong>100%</strong><span>Dedication</span></div>
            </div>
          </Reveal>
        </div>

        <div className="hero-visual">
          <Reveal delay={0.15} y={50}>
            <motion.div className="code-window" whileHover={{ y: -8, rotateX: 2, rotateY: -2 }} transition={{ type: "spring", stiffness: 160, damping: 18 }}>
              <div className="window-top"><span /><span /><span /><small>developer@himanshu:~</small></div>
              <pre>{code.map((line, i) => <code key={i} className={i === 0 || i === code.length - 1 ? "code-accent" : ""}>{line}{"\n"}</code>)}</pre>
            </motion.div>
          </Reveal>

          <Reveal delay={0.25} y={40}>
            <div className="working-card glass-card">
              <div className="card-kicker"><span className="status-dot" /> CURRENTLY WORKING ON</div>
              <div className="working-row"><b>01</b><span>Building real-world projects</span></div>
              <div className="working-row"><b>02</b><span>Improving DSA & problem solving</span></div>
              <div className="working-row"><b>03</b><span>Preparing for placements 2027</span></div>
            </div>
          </Reveal>

          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit orbit-a" /><span className="orbit orbit-b" /><span className="orbit orbit-c" />
            <div className="orbit-core">HIMANSHU<span>.</span></div>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/himanshukaloni" target="_blank" rel="noreferrer"><Github size={17} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
            <a href="mailto:himanshukaloni99@gmail.com"><Mail size={17} /></a>
          </div>
        </div>
      </div>
      <button className="scroll-cue" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}><span>SCROLL</span><ArrowDown size={16} /></button>
    </section>
  );
}
