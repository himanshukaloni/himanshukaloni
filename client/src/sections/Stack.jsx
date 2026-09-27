import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const skills = [
  ["Java", 90], ["React", 88], ["MySQL", 84], ["Node.js", 84],
  ["JavaScript", 86], ["Express.js", 82], ["MongoDB", 80], ["DSA", 70],
];

const tools = ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "MySQL", "Java", "DSA", "Python", "Git", "REST APIs", "JWT"];

export default function Stack() {
  return (
    <section id="skills" className="stack section-pad section-line">
      <div className="page-width">
        <div className="section-marker"><span>03</span><b /> SKILLS</div>
        <div className="stack-head">
          <Reveal><h2>Technical<br /><em>Skills.</em></h2></Reveal>
          <Reveal delay={0.08}><p>Technologies I use to design, build and ship full-stack products, from interfaces to APIs and databases.</p></Reveal>
        </div>
        <div className="skills-grid">
          {skills.map(([name, value], i) => (
            <Reveal key={name} delay={i * 0.035}>
              <div className="skill-row"><div><span>{name}</span><b>{value}%</b></div><div className="skill-track"><motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: value / 100 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.12 }} /></div></div>
            </Reveal>
          ))}
        </div>
        <div className="tool-marquee" aria-label="Technologies">
          <div className="tool-track">{[...tools, ...tools].map((tool, i) => <span key={`${tool}-${i}`}>{tool}<i>•</i></span>)}</div>
        </div>
      </div>
    </section>
  );
}
