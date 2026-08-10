"use client";

import {useEffect,useState} from "react";

export default function RealtimeClock(){

const[now,setNow]=useState(new Date());

useEffect(()=>{

const timer=setInterval(()=>{

setNow(new Date());

},1000);

return()=>clearInterval(timer);

},[]);

return(

<p className="font-mono opacity-70">

{now.toLocaleTimeString()}

</p>

);

}