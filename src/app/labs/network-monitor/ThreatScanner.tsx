"use client";

import { useEffect,useState } from "react";

const threats=[

"No Threats Found",

"Scanning Ports...",

"Checking Firewall...",

"Inspecting Traffic...",

"System Secure"

];

export default function ThreatScanner(){

const[index,setIndex]=useState(0);

useEffect(()=>{

const timer=setInterval(()=>{

setIndex(prev=>(prev+1)%threats.length);

},1800);

return()=>clearInterval(timer);

},[]);

return(

<div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8">

<h2 className="mb-6 text-2xl font-bold">

Threat Scanner

</h2>

<p className="text-lg text-green-500">

{threats[index]}

</p>

</div>

);

}