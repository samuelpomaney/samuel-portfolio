import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 lg:py-36"
    >
      <Container>

        <SectionHeader
          eyebrow="Experience"
          title="My Journey in Technology"
          description="Every stage has strengthened my technical skills, problem-solving mindset and passion for building secure, modern digital solutions that create real impact."
        />

        <Timeline />

      </Container>
    </section>
  );
}