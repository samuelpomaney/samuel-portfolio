"use client";

import { motion } from "framer-motion";

interface Props{
  x:number;
  y:number;
  label:string;
}

export default function NetworkNode({
  x,
  y,
  label,
}:Props){

return(

<>
<motion.circle
cx={x}
cy={y}
r="10"
fill="var(--primary)"
animate={{
scale:[1,1.2,1]
}}
transition={{
duration:2,
repeat:Infinity
}}
/>

<text
x={x}
y={y-18}
fontSize="11"
textAnchor="middle"
fill="currentColor"
>
{label}
</text>
</>

);

}