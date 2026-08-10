"use client";

import CountUp from "react-countup";

export default function StatsBar(){

return(

<div className="grid gap-5 md:grid-cols-4">

<div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 text-center">

<h2 className="text-4xl font-black text-[var(--primary)]">

<CountUp end={20}/>+

</h2>

<p className="mt-2">
Services
</p>

</div>

<div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 text-center">

<h2 className="text-4xl font-black text-[var(--primary)]">

<CountUp end={100}/>%

</h2>

<p className="mt-2">
Secure
</p>

</div>

<div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 text-center">

<h2 className="text-4xl font-black text-[var(--primary)]">

24/7

</h2>

<p className="mt-2">
Support
</p>

</div>

<div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 text-center">

<h2 className="text-4xl font-black text-[var(--primary)]">

<CountUp end={4}/>

</h2>

<p className="mt-2">
Business Areas
</p>

</div>

</div>

);

}