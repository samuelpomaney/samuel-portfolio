import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";

import ExperienceCard from "../cards/ExperienceCard";
import technologyData from "./technologyData";

export default function TechnologySection() {
  return (
    <section
      id="technology"
      className="py-20 lg:py-28 xl:py-36"
    >
      <Container>

        <SectionHeader
          eyebrow="Technology & Security"
          title="Building Secure Digital Solutions"
          description="Combining Computer Science, networking, Linux administration, web development and cybersecurity to create reliable systems that businesses can trust."
        />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">

          {technologyData.map(card => (

            <ExperienceCard
              key={card.title}
              {...card}
            />

          ))}

        </div>

      </Container>
    </section>
  );
}