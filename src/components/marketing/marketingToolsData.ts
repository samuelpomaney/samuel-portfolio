import {
  SiGoogleanalytics,
  SiGoogleads,
  SiGooglesearchconsole,
  SiMeta,
  SiHubspot,
} from "react-icons/si";

import {
  RiOpenaiFill,
  RiScissorsCutLine,
  RiInstagramLine,
  RiPaletteLine,
  RiVideoLine,
  RiCodeSSlashLine,
} from "react-icons/ri";

export const marketingTools = [
  {
    category: "Content Creation",
    tools: [
      { name: "Canva", icon: RiPaletteLine },
      { name: "CapCut", icon: RiVideoLine },
      { name: "DaVinci Resolve", icon: RiScissorsCutLine },
      { name: "Instagram Edits", icon: RiInstagramLine },
    ],
  },

  {
    category: "Analytics",
    tools: [
      { name: "Google Analytics", icon: SiGoogleanalytics },
      { name: "Search Console", icon: SiGooglesearchconsole },
      { name: "Google Ads", icon: SiGoogleads },
      { name: "Meta Business Suite", icon: SiMeta },
      { name: "HubSpot", icon: SiHubspot },
    ],
  },

  {
    category: "Development",
    tools: [
     { name: "Claude", icon: RiCodeSSlashLine },
      { name: "Anti Gravity", icon: RiCodeSSlashLine },
      { name: "VS Code", icon: RiCodeSSlashLine },
      { name: "ChatGPT", icon: RiOpenaiFill },
    ],
  },
];