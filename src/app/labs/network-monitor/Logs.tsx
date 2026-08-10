"use client";

const logs=[

"Firewall Updated",

"DNS Query",

"VPN Connected",

"SSH Login",

"Traffic Analysed",

"Packet Inspected"

];

export default function Logs(){

return(

<div className="space-y-3">

{logs.map(log=>(

<div

key={log}

className="rounded-xl bg-[var(--glass-bg)] px-4 py-3"

>

{log}

</div>

))}

</div>

);

}