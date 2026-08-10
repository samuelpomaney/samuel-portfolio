const rows=[

["192.168.1.20","HTTPS","Allowed"],

["10.0.0.5","SSH","Allowed"],

["8.8.8.8","DNS","Allowed"],

["52.24.10.3","HTTPS","Allowed"]

];

export default function ConnectionTable(){

return(

<div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 overflow-x-auto">

<table className="w-full">

<thead>

<tr className="border-b border-[var(--glass-border)]">

<th className="py-3 text-left">

Host

</th>

<th>

Port

</th>

<th>

Status

</th>

</tr>

</thead>

<tbody>

{rows.map(row=>(

<tr
key={row[0]}
className="border-b border-[var(--glass-border)]/40"
>

<td className="py-3">

{row[0]}

</td>

<td>

{row[1]}

</td>

<td className="text-green-500">

{row[2]}

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}