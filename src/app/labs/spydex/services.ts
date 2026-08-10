import { Service } from "./types";

const services: Service[] = [
  {
    id: 1,

    title: "Cybersecurity Assessment",

    category: "Security",

    icon: "🛡️",

    price: "Starting from $250",

    delivery: "3–5 Days",

    description:
      "Identify vulnerabilities before attackers do and receive a complete security assessment.",

    features: [
      "Vulnerability Scan",
      "Security Report",
      "Risk Assessment",
      "Priority Fixes",
      "Recommendations",
    ],
  },

  {
    id: 2,

    title: "Business Website",

    category: "Development",

    icon: "💻",

    price: "Starting from $500",

    delivery: "1–3 Weeks",

    description:
      "Modern responsive business websites designed for speed, SEO and conversions.",

    features: [
      "Responsive Design",
      "SEO Optimised",
      "Fast Performance",
      "Admin Dashboard",
      "Contact Forms",
    ],
  },

  {
    id: 3,

    title: "Tech Shop",

    category: "Store",

    icon: "🛒",

    price: "Get Quote",

    delivery: "Same Day",

    description:
      "Purchase genuine laptops, phones, gaming consoles, cameras and accessories.",

    features: [
      "Laptops",
      "Phones",
      "Gaming Consoles",
      "Cameras",
      "Accessories",
    ],
  },

  {
    id: 4,

    title: "Social Media Growth",

    category: "Marketing",

    icon: "📈",

    price: "Starting from $150",

    delivery: "Monthly",

    description:
      "Build your brand through strategic content, analytics and audience growth.",

    features: [
      "Content Strategy",
      "Analytics",
      "Optimisation",
      "Brand Growth",
      "Monthly Reports",
    ],
  },
];

export default services;