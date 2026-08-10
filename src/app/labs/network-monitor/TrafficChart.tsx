"use client";

import { motion } from "framer-motion";

const bars=[50,90,70,45,80,100,60,75,85,55];

export default function TrafficChart(){

return(

<div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8">

<h2 className="mb-8 text-2xl font-bold">

Traffic

</h2>

<div className="flex h-64 items-end justify-between">

{bars.map((height,index)=>(

<motion.div

key={index}

animate={{

height:[height,height+40,height]

}}

transition={{

repeat:Infinity,

duration:2,

delay:index*.15

}}

className="w-8 rounded-full bg-[var(--primary)]"

/>

))}

</div>

</div>

);

}