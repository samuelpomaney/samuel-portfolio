import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

import NetworkCard from "./NetworkCard";
import NetworkGraph from "./NetworkGraph";
import dynamic from "next/dynamic";

const NetworkAnimation = dynamic(
  () => import("./NetworkAnimation")
);
import LiveStatus from "./LiveStatus";
import ActivityFeed from "./ActivityFeed";
import SecurityStatus from "./SecurityStatus";
import TechOrbit from "./TechOrbit";
import CyberGrid from "./CyberGrid";
import Terminal from "./Terminal";

export default function TechnologyShowcase() {
  return (
    <section className="py-20 lg:py-28 xl:py-36">

      <Container>

        <SectionHeader
          eyebrow="Technology Showcase"
          title="Interactive Infrastructure Simulator"
          description="A visual demonstration of networking concepts, cybersecurity monitoring, Linux systems and secure infrastructure."
        />

        <NetworkCard>

          <div className="grid gap-10 xl:grid-cols-[1.05fr_.95fr_1fr]">

            {/* LEFT */}

            <div className="space-y-6">

              <NetworkGraph />

              <LiveStatus />

              <ActivityFeed />

              <Terminal />

            </div>

            {/* CENTER */}

            <div className="relative min-h-[650px] overflow-visible rounded-[32px]">

              <CyberGrid />

              <div className="relative z-10">

                <NetworkAnimation />

              </div>

              <div className="relative z-10 mt-8">

                <SecurityStatus />

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-center space-y-8">

              <TechOrbit />

              <div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">

                  LIVE SECURITY

                </p>

                <h2 className="mb-5 text-3xl font-black lg:text-4xl">

                  Secure Infrastructure

                </h2>

                <p className="leading-8 text-[var(--muted)]">

                  Network architecture, Linux administration, web security,
                  system monitoring and cybersecurity working together in
                  one interactive dashboard.

                </p>

              </div>

            </div>

          </div>

        </NetworkCard>

      </Container>

    </section>
  );
}