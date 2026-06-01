import Link from "next/link";
import { links, roles } from "./data";

const navItems = [
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        Joshua Belser
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer-panel">
      <div>
        <p className="eyebrow">Thanks for stopping by.</p>
        <h2>Let&apos;s make useful things.</h2>
      </div>
      <div className="footer-links">
        <a href={links.resume}>Download CV</a>
        <a href={links.github}>Github</a>
        <a href={links.linkedin}>LinkedIn</a>
        <a href={links.email}>joshrbelser@gmail.com</a>
        <a href={links.phone}>(224) 210-0241</a>
      </div>
      <div className="footer-meta">
        <span>Based in Chicago, IL</span>
        <span>Built with Next.js and Tailwind CSS</span>
        <span>© 2026 Joshua Belser</span>
      </div>
    </footer>
  );
}

export function RoleMarquee() {
  return (
    <section className="role-strip" aria-label="Roles">
      <div className="marquee-track">
        {[...roles, ...roles, ...roles].map((role, index) => (
          <span key={`${role}-${index}`}>{role}</span>
        ))}
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
