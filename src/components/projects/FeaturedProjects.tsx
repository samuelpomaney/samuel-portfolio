import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

import ProjectGrid from "./ProjectGrid";

export default function FeaturedProjects() {

  return (

    <section
      id="projects"
      className="py-28"
    >

      <Container>

        <SectionHeader
          eyebrow="Featured Projects"
          title="Projects That Solve Real Problems"
          description="A collection of software engineering, cybersecurity and digital growth projects demonstrating practical skills and real-world solutions."
        />

        <ProjectGrid />

      </Container>

    </section>

  );

}