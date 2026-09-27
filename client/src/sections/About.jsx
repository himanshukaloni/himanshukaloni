import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Code2, Rocket, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal";

const cards = [
  { icon: Code2, title: "Build", text: "I enjoy turning rough ideas into useful, polished and scalable web applications." },
  { icon: Brain, title: "Learn", text: "I keep exploring new technologies while strengthening the fundamentals behind them." },
  { icon: Rocket, title: "Improve", text: "I care about cleaner architecture, better UX, performance and maintainable code." },
  { icon: Sparkles, title: "Grow", text: "My goal is to keep shipping meaningful projects and become a stronger developer." },
];

export default function About() {
  return (
    <section id="about" className="about section-pad section-line">
      <div className="page-width">
        <div className="section-marker"><span>02</span><b /> ABOUT ME</div>
        <div className="about-intro">
          <Reveal><h2>Building<br />Ideas into <em>Reality.</em></h2></Reveal>
          <Reveal delay={0.08}><p>I'm a BCA student with a strong interest in full-stack development, clean UI/UX and building real-world projects. I enjoy turning ideas into useful products, solving problems and continuously improving as a developer.</p></Reveal>
          <Reveal delay={0.16}><a className="text-link" href="mailto:himanshukaloni99@gmail.com">Let's work together <ArrowUpRight size={15} /></a></Reveal>
        </div>
        <div className="about-cards">
          {cards.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <motion.article className="about-card glass-card" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
                <span className="card-number">0{index + 1}</span>
                <Icon size={24} strokeWidth={1.5} />
                <h3>{title}</h3><p>{text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
