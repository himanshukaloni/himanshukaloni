import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-width">
        <div className="footer-top">
          <div><span className="footer-kicker">HIMANSHU KALONI</span><h2>Let's make<br /><em>something real.</em></h2></div>
          <div className="footer-links">
            <a href="#home">Home <ArrowUpRight size={15} /></a>
            <a href="#about">About <ArrowUpRight size={15} /></a>
            <a href="#skills">Skills <ArrowUpRight size={15} /></a>
            <a href="#projects">Projects <ArrowUpRight size={15} /></a>
            <a href="#contact">Contact <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Himanshu Kaloni</span><div><a href="https://github.com/himanshukaloni" target="_blank" rel="noreferrer"><Github size={16} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16} /></a><a href="mailto:himanshukaloni99@gmail.com"><Mail size={16} /></a></div><span>Designed & built with React</span></div>
      </div>
    </footer>
  );
}
