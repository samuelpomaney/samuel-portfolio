import TimelineLine from "./TimelineLine";
import TimelineItem from "./TimelineItem";

import { experience } from "./experienceData";

export default function Timeline() {
  return (
    <div className="relative mx-auto mt-24 max-w-7xl pb-20">

      <TimelineLine />

      <div className="space-y-28">

        {experience.map((item, index) => (

          <TimelineItem
            key={item.title}
            item={item}
            reverse={index % 2 !== 0}
          />

        ))}

      </div>

    </div>
  );
}