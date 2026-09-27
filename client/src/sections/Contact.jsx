import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact section-pad section-line">
      <div className="page-width contact-inner">
        <div className="section-marker"><span>05</span><b /> CONTACT</div>
        <Reveal><h2>Let's Build Something <em>Amazing.</em></h2></Reveal>
        <div className="contact-bottom">
          <Reveal delay={0.08}><p>I'm always open to discussing new opportunities, interesting projects or just talking tech in general.</p></Reveal>
          <Reveal delay={0.14}><a className="mail-pill" href="mailto:himanshukaloni99@gmail.com"><span><Mail size={18} /></span> himanshukaloni99@gmail.com <ArrowUpRight size={18} /></a></Reveal>
        </div>
      </div>
    </section>
  );
}
