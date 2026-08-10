import Link from "next/link";

const labs=[

{
title:"TheFinder",
emoji:"💼",
href:"/labs/thefinder",
description:"Interactive recruitment platform demo."
},

{
title:"SPYDEX",
emoji:"🚀",
href:"/labs/spydex",
description:"Interactive technology company demo."
},

{
title:"Network Monitor",
emoji:"🛡",
href:"/labs/network-monitor",
description:"Live cybersecurity simulator."
}

];

export default function Labs(){

return(

<main className="min-h-screen px-6 py-20">

<div className="mx-auto max-w-7xl">

<h1 className="text-center text-6xl font-black">

Interactive Labs

</h1>

<p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-[var(--muted)]">

Explore fully interactive demonstrations of my featured projects.

</p>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

{labs.map(lab=>(

<Link

key={lab.title}

href={lab.href}

className="group rounded-[32px] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[var(--primary)]"

>

<div className="text-6xl">

{lab.emoji}

</div>

<h2 className="mt-8 text-3xl font-black">

{lab.title}

</h2>

<p className="mt-5 leading-8 text-[var(--muted)]">

{lab.description}

</p>

<div className="mt-10 inline-flex rounded-full bg-[var(--primary)] px-6 py-3 font-bold text-black">

Launch Demo →

</div>

</Link>

))}

</div>

</div>

</main>

);

}