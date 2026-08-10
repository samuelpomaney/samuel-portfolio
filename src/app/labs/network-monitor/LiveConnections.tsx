"use client";

import { useEffect,useState } from "react";

export default function LiveConnections(){

const[c,setC]=useState(182);

useEffect(()=>{

const timer=setInterval(()=>{

setC(170+Math.floor(Math.random()*40));

},1800);

return()=>clearInterval(timer);

},[]);

return(

<div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6">

<p className="text-sm text-[var(--muted)]">

Live Connections

</p>

<h2 className="mt-3 text-5xl font-black text-[var(--primary)]">

{c}

</h2>

</div>

);

}