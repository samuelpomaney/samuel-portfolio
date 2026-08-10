const reviews=[

{
name:"Michael",
text:"Fantastic quality and fast delivery."
},

{
name:"Sarah",
text:"Exactly as described. Highly recommended."
},

{
name:"Daniel",
text:"Customer support was excellent."
}

];

export default function ProductReviews(){

return(

<div className="mt-10">

<h3 className="mb-6 text-2xl font-bold">

Customer Reviews

</h3>

<div className="space-y-4">

{reviews.map(review=>(

<div

key={review.name}

className="rounded-2xl border border-[var(--glass-border)] p-5"

>

<p className="font-bold">

{review.name}

</p>

<p className="mt-2 text-[var(--muted)]">

{review.text}

</p>

</div>

))}

</div>

</div>

);

}