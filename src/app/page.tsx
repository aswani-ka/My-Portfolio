import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import { SkillsStrip } from "@/components/skills-strip";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <SkillsStrip />
      <Footer />
    </main>
  );
}
