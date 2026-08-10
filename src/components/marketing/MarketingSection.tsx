"use client";

import Container from "../ui/Container";

import MarketingHeader from "./MarketingHeader";
import MarketingStats from "./MarketingStats";
import MarketingTools from "./MarketingTools";
import MarketingWorkflow from "./MarketingWorkflow";

export default function MarketingSection() {
  return (
    <section id="marketing" className="py-32">
      <Container>

        <MarketingHeader />

        <div className="mt-16">
          <MarketingStats />
        </div>

        <div className="mt-14 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 backdrop-blur-xl">
          <MarketingTools />

          <div className="mt-10 border-t border-[var(--glass-border)] pt-8">
            <MarketingWorkflow />
          </div>
        </div>

      </Container>
    </section>
  );
}