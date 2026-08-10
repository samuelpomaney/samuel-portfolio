"use client";

import { motion } from "framer-motion";

interface Props{
title:string;
value:string;
}

export default function MetricCard({title,value}:Props){

return(

<motion.div

whileHover={{y:-6}}

className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6"

>

<p className="text-sm opacity-60">

{title}

</p>

<h2 className="mt-4 text-4xl font-black text-[var(--primary)]">

{value}

</h2>

</motion.div>

);

}