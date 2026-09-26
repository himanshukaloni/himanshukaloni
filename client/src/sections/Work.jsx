import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/projects";
import Reveal from "../components/Reveal";

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article className="project-card" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 180, damping: 20 }}>
        <div className="project-image-wrap">
          <img src={project.image} alt={`${project.title} project preview`} />
          <div className="project-overlay"><span>{project.number}</span><ArrowUpRight size={22} /></div>
        </div>
        <div className="project-body">
          <div className="project-meta"><span>{project.type}</span><b>{project.number}</b></div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-bottom">
            <div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="project-links">
              {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={14} /></a>}
              <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github size={15} /> GitHub</a>
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="projects" className="work section-pad section-line">
      <div className="page-width">
        <div className="section-marker"><span>04</span><b /> FEATURED PROJECTS</div>
        <div className="work-head"><Reveal><h2>My <em>Projects.</em></h2></Reveal><Reveal delay={0.08}><p>A selection of interfaces and full-stack systems I've built while learning by shipping.</p></Reveal></div>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
