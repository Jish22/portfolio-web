import { PageShell } from "../components";
import { experiences, projects, skills } from "../data";

const ids = [
  "blinkd",
  "tweetalytics",
  "state-farm",
  "enova",
  "ms-research",
  "misinformation",
];

export default function WorkPage() {
  return (
    <PageShell>
      <main className="subpage">
        <section className="work-hero">
          <p className="eyebrow">Work</p>
          <h1>Selected products, systems, and research.</h1>
          <p>
            A focused set of work from product leadership, enterprise software,
            data engineering, and applied machine learning.
          </p>
        </section>

        <section className="work-list">
          {projects.map((project, index) => (
            <article id={ids[index]} key={project.title} className="work-item">
              <div className={`work-visual ${project.tone}`}>
                <span>{project.year}</span>
                <strong>{project.title}</strong>
              </div>
              <div className="work-copy">
                <p className="eyebrow">{project.label}</p>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>{project.details}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="experience-page-section">
          <p className="eyebrow">Experience</p>
          <div className="company-list">
            {experiences.map((experience) => (
              <article key={experience.company}>
                <div>
                  <h3>{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
                <span>{experience.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <p className="eyebrow">Tools & Skills</p>
          <div className="tag-row large">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
