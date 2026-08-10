"use client";

import Node from "./Node";
import Connection from "./Connection";
import DataPacket from "./DataPacket";

export default function LiveTopology() {
  const paths = [
    "M70 60 L200 140",
    "M200 140 L330 60",
    "M200 140 L70 250",
    "M200 140 L330 250",
  ];

  return (
    <svg
      viewBox="0 0 400 320"
      preserveAspectRatio="xMidYMid meet"
      className="h-auto w-full max-w-[400px]"
      aria-label="Live network topology"
      role="img"
    >
      {paths.map((path) => (
        <Connection key={path} d={path} />
      ))}

      {paths.map((path, i) => (
        <DataPacket key={i} path={path} />
      ))}

      <Node x={70} y={60} />
      <Node x={330} y={60} />
      <Node x={200} y={140} />
      <Node x={70} y={250} />
      <Node x={330} y={250} />
    </svg>
  );
}