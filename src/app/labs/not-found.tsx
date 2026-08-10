import Link from "next/link";

export default function NotFound(){

return(

<main className="flex min-h-screen items-center justify-center px-6">

<div className="text-center">

<h1 className="text-8xl font-black">

404

</h1>

<h2 className="mt-8 text-4xl font-bold">

Page Not Found

</h2>

<p className="mx-auto mt-6 max-w-lg leading-8 text-[var(--muted)]">

Looks like this page has disappeared into cyberspace.

</p>

<Link

href="/"

className="mt-10 inline-flex rounded-full bg-[var(--primary)] px-8 py-4 font-bold text-black"

>

Back Home

</Link>

</div>

</main>

);

}