import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

import AboutCards from "./AboutCards";
import AboutContent from "./AboutContent";
import SkillsRibbon from "./SkillsRibbon";

export default function About() {

  return (

    <section
      id="about"
      className="py-28"
    >

      <Container>

        <SectionHeader
          eyebrow="About Me"
          title="Technology. Marketing. Growth."
          description="Combining technical expertise with creativity to build secure systems, modern websites and meaningful digital experiences."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          <AboutContent />

          <AboutCards />

        </div>

        <SkillsRibbon />

      </Container>

    </section>

  );

}