import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";

import ExperienceCard from "../cards/ExperienceCard";
import growthData from "./growthData";

export default function GrowthSection() {
  return (
    <section
      id="growth"
      className="py-20 lg:py-28 xl:py-36"
    >
      <Container>
        <SectionHeader
          eyebrow="Growth & Brand"
          title="Helping Brands Grow with Strategy"
          description="From content strategy to audience growth and analytics, I help organisations build stronger digital brands that create measurable business results."
        />

        <div
          className="
            mt-12
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
            lg:mt-16
            lg:gap-8
            items-stretch
          "
        >
          {growthData.map((card) => (
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