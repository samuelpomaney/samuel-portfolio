"use client";

import { motion } from "framer-motion";

import { Service } from "./types";

interface Props{

service:Service;

selected:boolean;

onClick:()=>void;

}

export default function ServiceCard({

service,

selected,

onClick

}:Props){

return(

<motion.button

whileHover={{y:-8}}

whileTap={{scale:.98}}

onClick={onClick}

className={`w-full rounded-[30px] border p-6 text-left transition ${
selected
?"border-[var(--primary)] bg-[var(--primary)]/10"
:"border-[var(--glass-border)] bg-[var(--glass-bg)]"
}`}

>

<div className="flex items-center justify-between">

<div className="text-5xl">

{service.icon}

</div>

<span className="rounded-full border border-[var(--glass-border)] px-3 py-1 text-xs">

{service.category}

</span>

</div>

<h2 className="mt-5 text-2xl font-bold">

{service.title}

</h2>

<p className="mt-4 leading-7 text-[var(--muted)]">

{service.description}

</p>

<div className="mt-6 flex flex-wrap gap-2">

{service.features.map(feature=>(

<span

key={feature}

className="rounded-full border border-[var(--glass-border)] px-3 py-1 text-xs"

>

{feature}

</span>

))}

</div>

<p className="mt-6 font-bold text-[var(--primary)]">

{service.price}

</p>

</motion.button>

);

}