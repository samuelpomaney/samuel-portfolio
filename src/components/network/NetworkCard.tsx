import { ReactNode } from "react";

import PremiumCard from "../ui/PremiumCard";

interface Props {
  children: ReactNode;
}

export default function NetworkCard({
  children,
}: Props) {
  return (
    <div
      className="
      relative
      overflow-visible
      pb-12
      "
    >
      <PremiumCard
        className="
        overflow-visible
        rounded-[32px]
        p-6
        lg:p-8
        "
      >
        {children}
      </PremiumCard>
    </div>
  );
}