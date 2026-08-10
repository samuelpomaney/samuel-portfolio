"use client";

import { motion } from "framer-motion";

import Connection from "./Connection";
import Node from "./Node";
import Packet from "./Packet";

export default function NetworkGraph() {

  const paths = [

    "M120 70 Q210 30 300 70",

    "M120 70 Q90 140 210 190",

    "M300 70 Q330 140 210 190",

    "M210 190 Q150 250 120 310",

    "M210 190 Q270 250 300 310",

    "M120 310 Q210 345 300 310",

  ];

  return (

    <div className="flex w-full items-center justify-center overflow-visible py-6">

      <svg
        viewBox="20 0 380 390"
        className="h-[330px] w-full max-w-[430px] overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >

        <defs>

          <clipPath id="networkClip">

            <rect
              x="-100"
              y="-100"
              width="700"
              height="700"
            />

          </clipPath>

        </defs>

        <g clipPath="url(#networkClip)">

          {paths.map((path) => (

            <Connection
              key={path}
              d={path}
            />

          ))}

          {paths.map((path, index) => (

            <Packet
              key={index}
              path={path}
              delay={index * 0.5}
              duration={3 + index}
            />

          ))}

          <motion.circle
            cx="210"
            cy="190"
            r="130"
            fill="none"
            stroke="rgba(253,158,4,.08)"
            strokeWidth="36"
            strokeLinecap="round"
            strokeDasharray="150 760"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              transformOrigin: "210px 190px",
            }}
          />

          <Node x={120} y={70} />

          <text
            x="120"
            y="45"
            textAnchor="middle"
            fontSize="11"
            fill="currentColor"
          >

            Client

          </text>

          <Node x={300} y={70} />

          <text
            x="300"
            y="45"
            textAnchor="middle"
            fontSize="11"
            fill="currentColor"
          >

            Firewall

          </text>

          <Node x={210} y={190} />

          <text
            x="210"
            y="165"
            textAnchor="middle"
            fontSize="11"
            fill="currentColor"
          >

            API

          </text>

          <Node x={120} y={310} />

          <text
            x="120"
            y="350"
            textAnchor="middle"
            fontSize="11"
            fill="currentColor"
          >

            Linux

          </text>

          <Node x={300} y={310} />

          <text
            x="300"
            y="350"
            textAnchor="middle"
            fontSize="11"
            fill="currentColor"
          >

            Database

          </text>

        </g>

      </svg>

    </div>

  );

}