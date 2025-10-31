import { Container } from "@/components/atoms/container";
import { Section } from "@/components/atoms/section";
import { Chip } from "@/components/chip";
import { SocialLinks } from "@/components/social-links";
import Summary from "@/components/summary";
import { backend, frontend, projects, tools } from "@/data/data";

export default function Home() {
  const toolSections = [
    { title: "frontend", id: "frontend", data: frontend },
    { title: "backend", id: "backend", data: backend },
    { title: "tools / ai tools", id: "tools", data: tools },
  ];

  return (
    <Container>
      <Summary />
      <SocialLinks />
      <Section sectionId="featured-projects" title="featured projects">
        <div className="flex flex-wrap gap-3">
          {projects.map((p) => (
            <Chip key={p.name} href={p.href}>
              {p.name}
            </Chip>
          ))}
        </div>
      </Section>
      {toolSections.map(({ title, id, data }) => (
        <Section sectionId={id} key={title} title={title}>
          <div className="flex flex-wrap gap-3">
            {data.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Section>
      ))}
    </Container>
  );
}
