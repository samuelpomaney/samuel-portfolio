"use client";

const alerts=[

"0 Critical",

"2 Medium",

"Firewall Protected",

"TLS Enabled"

];

export default function Alerts(){

return(

<div className="space-y-4">

{alerts.map(alert=>(

<div

key={alert}

className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-3"

>

{alert}

</div>

))}

</div>

);

}