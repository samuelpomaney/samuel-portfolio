"use client";

import { useEffect,useState } from "react";

export default function PingMonitor(){

const[ping,setPing]=useState(18);

useEffect(()=>{

const timer=setInterval(()=>{

setPing(12+Math.floor(Math.random()*18));

},1200);

return()=>clearInterval(timer);

},[]);

return(

<div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6">

<p className="text-sm text-[var(--muted)]">

Average Ping

</p>

<h2 className="mt-3 text-5xl font-black text-[var(--primary)]">

{ping}ms

</h2>

</div>

);

}