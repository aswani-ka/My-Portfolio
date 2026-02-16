import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectMetadata = {
  title: string;
  tagline: string;
  stack?: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
};


const projectsDirectory = path.join(process.cwd(), "src", "content", "projects-mdx");

export function getProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) {
    console.log("❌ projectsDirectory not found:", projectsDirectory);
    return [];
  }

  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug?: string) {
  if (!slug) return null;

  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    console.log("❌ MDX not found:", fullPath);
    console.log("✅ Available slugs:", getProjectSlugs());
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug, metadata: data as ProjectMetadata, content };
}

export function getAllProjects() {
  const slugs = getProjectSlugs();

  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => p !== null);
}

