"use client";

import { motion } from "framer-motion";

import ProductRating from "./ProductRating";
import ProductReviews from "./ProductReviews";
import DeliveryInfo from "./DeliveryInfo";

interface Props{
product:any;
onClose:()=>void;
onAdd:()=>void;
}

export default function ProductModal({

product,

onClose,

onAdd

}:Props){

if(!product)return null;

return(

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">

<motion.div

initial={{opacity:0,scale:.85}}

animate={{opacity:1,scale:1}}

className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[32px] bg-[var(--background)] p-10"

>

<div className="text-center text-8xl">

{product.image}

</div>

<h1 className="mt-6 text-5xl font-black">

{product.name}

</h1>

<ProductRating/>

<p className="mt-8 leading-8 text-[var(--muted)]">

Premium genuine product supplied by SPYDEX with full warranty and customer support.

</p>

<DeliveryInfo/>

<ProductReviews/>

<div className="mt-10 flex gap-4">

<button

onClick={onAdd}

className="rounded-full bg-[var(--primary)] px-7 py-3 font-bold text-black"

>

Add to Cart

</button>

<button

onClick={onClose}

className="rounded-full border border-[var(--glass-border)] px-7 py-3"

>

Close

</button>

</div>

</motion.div>

</div>

);

}