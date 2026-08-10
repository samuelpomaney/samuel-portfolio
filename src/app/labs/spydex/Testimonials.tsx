"use client";

const testimonials=[

{
name:"Tech Startup",

text:"SPYDEX transformed our website and strengthened our security posture."
},

{
name:"Business Owner",

text:"Professional, responsive and delivered beyond expectations."
},

{
name:"Retail Client",

text:"Bought my laptop from SPYDEX and the support was excellent."
}

];

export default function Testimonials(){

return(

<div className="grid gap-6 lg:grid-cols-3">

{testimonials.map(item=>(

<div
key={item.name}
className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8"
>

<p className="leading-8">

"{item.text}"

</p>

<p className="mt-6 font-bold text-[var(--primary)]">

{item.name}

</p>

</div>

))}

</div>

);

}