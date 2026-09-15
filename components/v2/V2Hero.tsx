import Image from "next/image";
import { ArrowRight, ArrowUpRight, Braces, Layers3, Sparkles } from "lucide-react";
import styles from "./V2Hero.module.css";

const connections = [
  "M90 98 V110 C90 151 160 118 160 167",
  "M390 98 V110 C390 151 320 118 320 167",
  "M240 204 V264",
];

function ServicesDiagram() {
  return (
    <figure className={styles.figure} id="services" tabIndex={-1} aria-labelledby="services-caption">
      <div className={styles.figureHeader}>
        <span className={styles.figureEyebrow}>Connected by design</span>
      </div>

      <div className={styles.diagram}>
        <svg className={styles.connections} viewBox="0 0 480 340" fill="none" aria-hidden="true">
          <ellipse cx="240" cy="170" rx="146" ry="105" className={styles.orbit} />
          <ellipse cx="240" cy="170" rx="192" ry="144" className={styles.outerOrbit} />
          {connections.map((path, index) => (
            <g key={path}>
              <path d={path} className={styles.connection} />
              <path d={path} pathLength="100" className={styles.signal} style={{ animationDelay: `${index * 0.3}s` }} />
            </g>
          ))}
        </svg>

        <div className={`${styles.service} ${styles.web}`}>
          <Layers3 size={19} strokeWidth={1.5} aria-hidden="true" />
          <span>Web platforms</span>
        </div>
        <div className={`${styles.service} ${styles.ai}`}>
          <Sparkles size={19} strokeWidth={1.5} aria-hidden="true" />
          <span>AI products</span>
        </div>
        <div className={styles.hub}>
          <Image src="/codebarz-white-logo.svg" alt="Codebarz" width={120} height={21} className="h-auto" />
          <span>Every layer. One team.</span>
        </div>
        <div className={`${styles.service} ${styles.api}`}>
          <Braces size={19} strokeWidth={1.5} aria-hidden="true" />
          <span>APIs &amp; integrations</span>
        </div>
      </div>

      <figcaption id="services-caption" className={styles.figureCaption}>
        <span>One product. Every layer connected.</span>
      </figcaption>
    </figure>
  );
}

export default function V2Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <div className={styles.availability}>
            <span className={styles.statusDot} aria-hidden="true" />
            Accepting new projects
          </div>

          <h1 id="hero-heading" className={styles.heading}>
            <span>Complex software.</span>
            <span className={styles.secondaryLine}>Built to scale.</span>
          </h1>

          <p className={styles.description}>
            We design, build, and scale web platforms, APIs, and AI products for ambitious teams.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryAction}>
              Discuss your project
              <ArrowRight size={17} strokeWidth={1.75} aria-hidden="true" />
            </a>
            <a href="#projects" className={styles.secondaryAction}>
              View our work
              <ArrowUpRight size={17} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>

          <p className={styles.supportingLine}>From your first release to your next stage of growth.</p>
        </div>

        <ServicesDiagram />
      </div>

      <div className={styles.process} aria-label="Our approach">
        <span className={styles.processIntro}>Engineering, end to end.</span>
        <ol>
          <li><span>01</span> Plan</li>
          <li><span>02</span> Build</li>
          <li><span>03</span> Scale</li>
        </ol>
      </div>
    </section>
  );
}
