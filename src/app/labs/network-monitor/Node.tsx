"use client";

export default function Node({x,y}:{x:number;y:number}){

return(

<circle

cx={x}

cy={y}

r="10"

fill="var(--primary)"

/>

);

}