import Link from "next/link";
import { PageShell } from "../components";
import { drivers, journey, links } from "../data";

export default function AboutPage() {
  return (
    <PageShell>
      <main className="subpage">
        <section className="about-intro">
          <div className="portrait-placeholder" aria-label="Joshua Belser portrait placeholder">
            JB
          </div>
          <div>
            <p className="eyebrow">Software Engineer — Chicago, IL</p>
            <h1>Joshua Belser</h1>
            <p>
              I&apos;m a product-minded engineer who builds at the intersection
              of useful user experiences, dependable backend systems, cloud data
              workflows, and applied machine learning.
            </p>
            <div className="inline-actions">
              <a href={links.resume}>Resume →</a>
              <a href={links.linkedin}>LinkedIn →</a>
            </div>
          </div>
        </section>

        <section className="personal-statement">
          <p className="eyebrow">Personal Statement</p>
          <h2>
            I believe the best software comes from builders who understand both
            the technical depth and the human context of what they are making.
          </h2>
          <p>
            My path has moved through startup product work, enterprise data
            systems, backend engineering, research, and mentorship. At Blinkd, I
            learned how much clarity matters when turning a product idea into an
            MVP people can actually use. At State Farm and Enova, I learned to
            think in systems: how data moves, how workflows fail, how automation
            removes friction, and how reliable infrastructure supports better
            product outcomes.
          </p>
          <p>
            What ties the work together is a practical motivation: build tools
            that make decisions easier, experiences smoother, and complex systems
            feel less complex to the people depending on them.
          </p>
        </section>

        <section className="drivers-section">
          <p className="eyebrow">What Drives Me</p>
          <div className="driver-grid">
            {drivers.map((driver, index) => (
              <article key={driver.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{driver.title}</h3>
                <p>{driver.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-section">
          <p className="eyebrow">Journey</p>
          <div>
            {journey.map(([year, event]) => (
              <article key={`${year}-${event}`}>
                <span>{year}</span>
                <p>{event}</p>
              </article>
            ))}
          </div>
        </section>

        <nav className="page-jump-links" aria-label="Related pages">
          <a href={links.resume}>Resume →</a>
          <a href={links.linkedin}>LinkedIn →</a>
          <Link href="/work">View Experience →</Link>
          <Link href="/contact">Get in Touch →</Link>
        </nav>
      </main>
    </PageShell>
  );
}
