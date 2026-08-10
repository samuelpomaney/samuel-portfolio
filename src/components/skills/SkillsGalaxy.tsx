import Container from "../ui/Container";
import SkillBubble from "./SkillBubble";
import skills from "./skillsData";

export default function SkillsGalaxy() {
  return (
    <section className="py-32">

      <Container>

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Expertise
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Skills That Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[var(--muted)]">
            Every technology complements another. Together they create secure,
            scalable and high-performance digital solutions.
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-8">

          {skills.map((skill) => (
            <SkillBubble
              key={skill.title}
              {...skill}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}