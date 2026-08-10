interface Props{
name:string;
ip:string;
status:string;
}

export default function DeviceCard({
name,
ip,
status
}:Props){

return(

<div className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5">

<h3 className="font-bold">

{name}

</h3>

<p className="mt-2 text-sm text-[var(--muted)]">

{ip}

</p>

<p className="mt-4 text-green-500">

{status}

</p>

</div>

);

}