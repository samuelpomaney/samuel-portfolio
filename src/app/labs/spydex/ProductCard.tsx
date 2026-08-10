"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import WishlistButton from "./WishlistButton";
import ProductRating from "./ProductRating";

interface Props{
product:any;
onView:()=>void;
}

export default function ProductCard({

product,

onView

}:Props){

const[liked,setLiked]=useState(false);

return(

<motion.div

whileHover={{y:-8}}

className="relative rounded-[30px] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6"

>

<WishlistButton

active={liked}

onClick={()=>setLiked(!liked)}

/>

<div className="text-6xl">

{product.image}

</div>

<h2 className="mt-5 text-2xl font-bold">

{product.name}

</h2>

<p className="mt-2 text-[var(--primary)]">

{product.category}

</p>

<ProductRating/>

<p className="mt-6 text-3xl font-black">

{product.price}

</p>

<button

onClick={onView}

className="mt-6 w-full rounded-full bg-[var(--primary)] py-3 font-bold text-black"

>

View Product

</button>

</motion.div>

);

}