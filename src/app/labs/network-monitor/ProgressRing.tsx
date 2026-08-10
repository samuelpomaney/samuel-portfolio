"use client";

import { motion } from "framer-motion";

interface Props{
value:number;
label:string;
}

export default function ProgressRing({value,label}:Props){

const circumference=314;

const offset=circumference-(value/100)*circumference;

return(

<div className="flex flex-col items-center">

<svg width="120" height="120">

<circle
cx="60"
cy="60"
r="50"
stroke="rgba(255,255,255,.08)"
strokeWidth="10"
fill="none"
/>

<motion.circle

cx="60"

cy="60"

r="50"

stroke="var(--primary)"

strokeWidth="10"

fill="none"

strokeLinecap="round"

strokeDasharray={circumference}

animate={{strokeDashoffset:offset}}

style={{rotate:-90,transformOrigin:"50% 50%"}}

/>

</svg>

<p className="-mt-16 text-2xl font-black">

{value}%

</p>

<p className="mt-8 opacity-70">

{label}

</p>

</div>

);

}