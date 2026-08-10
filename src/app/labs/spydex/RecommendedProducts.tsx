import products from "./products";

export default function RecommendedProducts(){

return(

<div className="mt-16">

<h2 className="mb-8 text-3xl font-black">

Recommended Products

</h2>

<div className="grid gap-5 md:grid-cols-3">

{products.slice(0,3).map(product=>(

<div

key={product.id}

className="rounded-3xl border border-[var(--glass-border)] p-5"

>

<div className="text-5xl">

{product.image}

</div>

<h3 className="mt-4 font-bold">

{product.name}

</h3>

<p className="mt-2 text-[var(--primary)]">

{product.price}

</p>

</div>

))}

</div>

</div>

);

}