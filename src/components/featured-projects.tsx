import { getAllProjects } from "@/lib/mdx-projects";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { ProjectCardMotion } from "./project-card-motion";

export function FeaturedProjects() {
  const projects = getAllProjects()
    .filter((p) => p.metadata.featured === true)
    .slice(0, 2);

  return (
    <section className="py-14 sm:py-16 tracking-wider">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="A couple of my best full-stack builds with real features and clean UI."
          href="/projects"
        />

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCardMotion
              key={p.slug}
              href={`/projects/${p.slug}`}
              title={p.metadata.title}
              tagline={p.metadata.tagline}
              image={p.metadata.image as string | undefined}
              tags={(p.metadata.stack ?? []) as string[]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
