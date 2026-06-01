import Link from "next/link";
import { Footer, Header, RoleMarquee } from "./components";
import { experiences, projects } from "./data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <RoleMarquee />

        <section className="home-hero">
          <div className="hero-name">
            <h1>Joshua Belser</h1>
          </div>
          <div className="hero-info">
            <p>Product-minded Software Engineer & Data Engineer</p>
            <p>Based in Chicago, IL</p>
            <p>University of Illinois Urbana-Champaign, B.S. Information Science, Minor in Computer Science</p>
          </div>
        </section>

        <section className="statement-block">
          <h2>
            I build products and systems that turn ambiguity into useful,
            reliable software.
          </h2>
          <p>
            My work moves between product strategy, backend systems, data
            engineering, and applied machine learning. I care about understanding
            the human problem first, then shaping the technical system that can
            make the solution dependable at scale.
          </p>
        </section>

        <section className="preview-grid" aria-label="Selected work preview">
          {projects.slice(0, 6).map((project) => (
            <Link key={project.title} href={project.href} className={`visual-tile ${project.tone}`}>
              <span>{project.label}</span>
              <strong>{project.title}</strong>
            </Link>
          ))}
        </section>

        <section className="home-experience">
          <div className="section-heading">
            <p>Experience</p>
            <h2>Places I&apos;ve built, researched, and led.</h2>
          </div>
          <div className="company-list">
            {experiences.slice(0, 3).map((experience) => (
              <article key={experience.company}>
                <div>
                  <h3>{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
                <span>{experience.period}</span>
              </article>
            ))}
          </div>
          <Link href="/work" className="text-link">
            More Work →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
