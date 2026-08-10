"use client";

import { useEffect,useState } from "react";

const logs=[

"Firewall rule updated",

"SSH login detected",

"Traffic spike analysed",

"DNS cache refreshed",

"TLS handshake completed",

"Database synchronized",

"VPN tunnel active"

];

export default function EventFeed(){

const[index,setIndex]=useState(0);

useEffect(()=>{

const timer=setInterval(()=>{

setIndex(prev=>(prev+1)%logs.length);

},1800);

return()=>clearInterval(timer);

},[]);

return(

<div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6">

<h2 className="mb-5 text-xl font-bold">

Activity

</h2>

<p className="text-[var(--primary)]">

{logs[index]}

</p>

</div>

);

}