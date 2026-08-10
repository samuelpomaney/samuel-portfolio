"use client";

import TheFinderPreview from "./previews/TheFinderPreview";
import PortfolioPreview from "./previews/PortfolioPreview";
import NetworkMonitorPreview from "./previews/NetworkMonitorPreview";

interface Props {
  title: string;
}

export default function ProjectPreview({
  title,
}: Props) {

  if (title === "TheFinder") {
    return <TheFinderPreview />;
  }

  if (title === "SPYDEX") {
    return <PortfolioPreview />;
  }

  return <NetworkMonitorPreview />;
}