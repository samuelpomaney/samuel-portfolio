"use client";

import { useEffect, useState } from "react";

export default function StatusCards() {

  const [cpu,setCpu]=useState(34);
  const [ram,setRam]=useState(62);
  const [traffic,setTraffic]=useState(812);

  useEffect(()=>{

    const timer=setInterval(()=>{

      setCpu(20+Math.floor(Math.random()*50));

      setRam(40+Math.floor(Math.random()*45));

      setTraffic(600+Math.floor(Math.random()*700));

    },1800);

    return()=>clearInterval(timer);

  },[]);

  const cards=[
    ["CPU",cpu+"%"],
    ["RAM",ram+"%"],
    ["Traffic",traffic+" Mbps"],
    ["Firewall","ONLINE"]
  ];

  return(

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      {cards.map(([title,value])=>(

        <div key={title} className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6">

          <p className="text-sm text-[var(--muted)]">

            {title}

          </p>

          <h2 className="mt-3 text-4xl font-black text-[var(--primary)]">

            {value}

          </h2>

        </div>

      ))}

    </div>

  );

}