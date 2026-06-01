import { PageShell } from "../components";
import { links } from "../data";

const contactLinks = [
  ["Email", "joshrbelser@gmail.com", links.email],
  ["Phone", "(224) 210-0241", links.phone],
  ["Location", "Chicago, IL", links.location],
  ["Github", "Add GitHub URL", links.github],
  ["LinkedIn", "Add LinkedIn URL", links.linkedin],
  ["Resume", "View resume", links.resume],
];

export default function ContactPage() {
  return (
    <PageShell>
      <main className="subpage contact-page">
        <section>
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s build the next useful thing.</h1>
          <p>
            I&apos;m interested in roles and projects where product thinking,
            backend systems, cloud data, and applied ML can compound into better
            user outcomes.
          </p>
        </section>

        <section className="contact-list" aria-label="Contact links">
          {contactLinks.map(([label, value, href]) => (
            <a key={label} href={href}>
              <span>{label}</span>
              <strong>{value}</strong>
            </a>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
