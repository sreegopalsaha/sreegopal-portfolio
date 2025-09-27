import { Container } from "@/components/atoms/container";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <Container>
      <header className="mb-10">
        <h1 className="text-5xl font-serif mb-6">Sree Gopal Saha</h1>

        <div className="flex flex-wrap items-center gap-2 text-base text-muted-foreground mb-3">
          MERN Stack • TypeScript • React.js • Node.js
          <Badge className="ml-2 px-3 py-1.5 inline-flex items-center gap-1.5 bg-neutral-200 dark:bg-neutral-900">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-emerald-400"></span>
            open to work
          </Badge>
        </div>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Hi there, I'm Sree Gopal, a student and developer focused on scalable
          applications. I blend TypeScript with React and Node to create robust
          solutions. Through problem-solving and API development, I craft
          systems that serve real user needs.
        </p>
      </header>
    </Container>
  );
}
