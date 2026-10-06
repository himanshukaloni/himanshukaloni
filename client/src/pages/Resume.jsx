import { ArrowLeft, Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const skills = ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "MySQL", "JavaScript", "Java", "C++", "Python", "Git", "REST APIs", "JWT"];

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-shell">
        <div className="resume-toolbar">
          <a href="/" className="resume-back"><ArrowLeft size={16}/> Back to portfolio</a>
          <a href="/Himanshu_Kaloni_Resume.pdf" download className="resume-download"><Download size={16}/> Download PDF</a>
        </div>

        <section className="resume-hero-card">
          <div>
            <span className="resume-eyebrow">CURRICULUM VITAE / 2026</span>
            <h1>Himanshu<br/><em>Kaloni.</em></h1>
            <p>Building modern web applications, useful products and thoughtful digital experiences.</p>
          </div>
          <div className="resume-contact-grid">
            <a href="mailto:himanshukaloni99@gmail.com"><Mail size={15}/> himanshukaloni99@gmail.com</a>
            <a href="https://github.com/himanshukaloni" target="_blank" rel="noreferrer"><Github size={15}/> github.com/himanshukaloni</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a>
          </div>
        </section>

        <section className="resume-grid">
          <article className="resume-card resume-about">
            <span className="resume-label">01 / PROFILE</span>
            <h2>About me</h2>
            <p>I’m a BCA 3rd-year student focused on building full-stack applications with React, Node.js, Express, MongoDB and MySQL. I enjoy turning ideas into complete products and continuously improving my engineering fundamentals.</p>
          </article>

          <article className="resume-card resume-education">
            <span className="resume-label">02 / EDUCATION</span>
            <h2>Education</h2>
            <div className="resume-item">
              <div><strong>Bachelor of Computer Applications</strong><span>Graphic Era Hill University</span></div>
              <b>2024 — 2027</b>
            </div>
          </article>

          <article className="resume-card resume-skills">
            <span className="resume-label">03 / STACK</span>
            <h2>Technologies</h2>
            <div className="resume-skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>

          <article className="resume-card resume-experience">
            <span className="resume-label">04 / EXPERIENCE</span>
            <h2>Experience</h2>
            <div className="resume-item large">
              <div><strong>Full Stack Developer</strong><span>TBI Incubated Startup · Graphic Era Hill University</span></div>
              <b>2026</b>
            </div>
            <ul><li>Built and integrated full-stack application features.</li><li>Developed REST APIs and worked with MongoDB data models.</li><li>Collaborated on testing, debugging and deployment workflows.</li></ul>
          </article>
        </section>

        <section className="resume-projects">
          <div className="resume-section-head"><div><span className="resume-label">05 / SELECTED WORK</span><h2>Projects.</h2></div><a href="/#projects"><ExternalLink size={15}/> View portfolio</a></div>
          <div className="resume-project-grid">
            <article><span>01</span><div><h3>AI Knowledge Base</h3><p>AI-powered workspace for documents, conversations and knowledge workflows.</p><small>React · Node.js · MongoDB · AI</small></div></article>
            <article><span>02</span><div><h3>ShopPilot</h3><p>Retail management platform with inventory, sales, customers and analytics.</p><small>React · Node.js · Express · MongoDB</small></div></article>
            <article><span>03</span><div><h3>Resume ATS Roadmap</h3><p>Resume analysis concept that turns feedback into a structured improvement roadmap.</p><small>React · Node.js · MongoDB · AI</small></div></article>
            <article><span>04</span><div><h3>Atelier</h3><p>Premium e-commerce experience with curated collections and order flows.</p><small>React · Node.js · Express · MongoDB</small></div></article>
          </div>
        </section>

        <section className="resume-footer-cta">
          <span className="resume-label">06 / NEXT</span>
          <h2>Let's build something useful.</h2>
          <a href="mailto:himanshukaloni99@gmail.com">himanshukaloni99@gmail.com <ExternalLink size={16}/></a>
        </section>
      </div>
    </main>
  );
}
