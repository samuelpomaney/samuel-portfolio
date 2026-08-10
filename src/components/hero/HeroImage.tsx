import Image from "next/image";

import TiltCard from "../tilt/TiltCard";
import Glass from "../ui/Glass";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      <TiltCard>
        <Glass className="group relative overflow-visible p-5">
          <div className="relative w-full max-w-[420px]">
            <Image
              src="/images/samuel.png"
              alt="Samuel Dziedzorm Pomaney Yaw (Spy Dee)"
              width={420}
              height={520}
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="h-auto w-full rounded-[24px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </Glass>
      </TiltCard>
    </div>
  );
}