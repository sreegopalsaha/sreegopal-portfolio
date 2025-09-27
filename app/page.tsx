import { Container } from "@/components/atoms/container";
import { Section } from "@/components/atoms/section";
import { Chip } from "@/components/chip";
import Summary from "@/components/summary";
import { projects } from "@/data/data";

export default function Home() {
  return (
    <Container>
      <Summary />
      <Section sectionId="featured-projects" title="featured projects">
        <div className="flex flex-wrap gap-3">
          {projects.map((p) => (
            <Chip key={p.name} href={p.href}>
              {p.name}
            </Chip>
          ))}
        </div>
      </Section>
    </Container>
  );
}
