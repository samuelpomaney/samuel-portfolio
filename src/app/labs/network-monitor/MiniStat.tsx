interface Props{
title:string;
value:string;
}

export default function MiniStat({
title,
value
}:Props){

return(

<div className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5">

<p className="text-sm text-[var(--muted)]">

{title}

</p>

<h3 className="mt-2 text-2xl font-black text-[var(--primary)]">

{value}

</h3>

</div>

);

}