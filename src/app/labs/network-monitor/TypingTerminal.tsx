"use client";

import {useEffect,useState} from "react";

const text=[

"> boot sequence started",

"> firewall online",

"> tls enabled",

"> monitoring traffic",

"> inspecting packets",

"> no threats detected",

"> network healthy"

];

export default function TypingTerminal(){

const[index,setIndex]=useState(0);

useEffect(()=>{

const timer=setInterval(()=>{

setIndex(prev=>(prev+1)%text.length);

},1200);

return()=>clearInterval(timer);

},[]);

return(

<div className="space-y-2 font-mono text-green-400">

{text.slice(0,index+1).map(line=>(

<p key={line}>{line}</p>

))}

</div>

);

}