"use client";

import {motion} from "framer-motion";

const bars=[60,90,40,80,100,65,55,85,70,95];

export default function TrafficGraph(){

return(

<div className="flex h-64 items-end gap-3">

{bars.map((h,i)=>(

<motion.div

key={i}

animate={{

height:[h,h+40,h]

}}

transition={{

repeat:Infinity,

duration:2,

delay:i*.1

}}

className="flex-1 rounded-full bg-[var(--primary)]"

/>

))}

</div>

);

}