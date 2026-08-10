"use client";

import ProgressRing from "./ProgressRing";

export default function SystemHealth(){

return(

<div className="grid gap-8 md:grid-cols-3">

<ProgressRing value={81} label="CPU"/>

<ProgressRing value={62} label="Memory"/>

<ProgressRing value={94} label="Firewall"/>

</div>

);

}