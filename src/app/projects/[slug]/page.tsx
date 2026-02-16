import type { Metadata } from "next";
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx-projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { Screenshot } from "@/components/screenshot";

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug?: string }> }
): Promise<Metadata> {
  const { slug } = await props.params; 

  if (!slug) {
    return {
      title: "Project",
      description: "Project case study",
    };
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.metadata.title as string,
    description: project.metadata.tagline as string,
  };
}

export default async function ProjectPage(
  props: { params: Promise<{ slug?: string }> }
) {
  const { slug } = await props.params; 
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
  <CaseStudyLayout
    title={project.metadata.title}
    tagline={project.metadata.tagline}
  >
    <MDXRemote source={project.content} components={{ Screenshot }} />

  </CaseStudyLayout>
);

}
