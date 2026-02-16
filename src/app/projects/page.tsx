import { getAllProjects } from "@/lib/mdx-projects";
import { ProjectImageCard } from "@/components/project-image-card";
import { Container } from "@/components/container";
import { frontendProjects } from "@/content/frontend-projects";
import { FrontendProjectCard } from "@/components/frontend-project-card";
import { SectionHeading } from "@/components/section-heading";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="py-20 sm:py-24">
      <Container>

        {/* Header */}
        <SectionHeading
          title="Projects"
          subtitle="Full-stack products built with MERN and modern UI systems."
        />

        {/* Fullstack */}
        <div className="mt-12 grid gap-12 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectImageCard
              key={p.slug}
              href={`/projects/${p.slug}`}
              image={
                (p.metadata.image as string) ||
                "/projects/placeholder.png"
              }
              title={p.metadata.title}
              tags={(p.metadata.stack ?? []) as string[]}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 border-t pt-16 dark:border-white/10">
          <SectionHeading
            title="Frontend Projects"
            subtitle="UI builds crafted with HTML, CSS and JavaScript."
          />

          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            {frontendProjects.map((p) => (
              <FrontendProjectCard
                key={p.title}
                {...p}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
