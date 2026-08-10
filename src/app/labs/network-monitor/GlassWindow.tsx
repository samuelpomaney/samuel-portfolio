"use client";

import { ReactNode } from "react";

interface Props{
children:ReactNode;
title:string;
}

export default function GlassWindow({children,title}:Props){

return(

<div className="overflow-hidden rounded-[28px] border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,.15)]">

<div className="flex items-center justify-between border-b border-[var(--glass-border)] px-5 py-3">

<div className="flex gap-2">

<div className="h-3 w-3 rounded-full bg-red-500"/>

<div className="h-3 w-3 rounded-full bg-yellow-400"/>

<div className="h-3 w-3 rounded-full bg-green-500"/>

</div>

<p className="font-semibold opacity-80">

{title}

</p>

<div/>

</div>

<div className="p-6">

{children}

</div>

</div>

);

}