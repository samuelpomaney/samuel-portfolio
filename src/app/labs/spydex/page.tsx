import Header from "./Header";
import CompanyBanner from "./CompanyBanner";
import QuickStats from "./QuickStats";
import ProductGrid from "./ProductGrid";
import RequestForm from "./RequestForm";
import StatsBar from "./StatsBar";
import Testimonials from "./Testimonials";

export default function SpydexDemo(){

return(

<main className="min-h-screen bg-[var(--background)] px-6 py-16">

<div className="mx-auto max-w-7xl">

<Header/>

<StatsBar />

<CompanyBanner/>

<QuickStats/>

<ProductGrid/>

<div className="my-20"/>

<Testimonials />

<RequestForm/>

</div>

</main>

);

}