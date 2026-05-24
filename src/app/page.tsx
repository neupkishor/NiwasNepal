import Link from "next/link";
import CollectionsCarousel from "../components/CollectionsCarousel";
import PropertyCarousel from "../components/PropertyCarousel";
import StatsCarousel from "../components/StatsCarousel";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { properties } from "../data/properties";

const collections = [
  {
    title: "Kalanki Family Homes",
    count: "42+ listings",
    copy: "Move-in ready homes near schools, ring road access, and daily essentials.",
  },
  {
    title: "Rental Yield Picks",
    count: "18+ listings",
    copy: "High-demand rental properties selected for strong occupancy and stable returns.",
  },
  {
    title: "Ready-To-Build Land",
    count: "25+ plots",
    copy: "Verified documents and road access for confident construction planning.",
  },
];

const categories = [
  "Residential House",
  "Apartment",
  "Commercial Space",
  "Land / Plot",
  "Rental Property",
  "Investment Bundle",
];

const testimonials = [
  {
    name: "Suman KC",
    role: "Home Buyer, Kalanki",
    review:
      "Niwas Nepal helped us shortlist and close a family home in Kalanki within two weeks. Their local guidance was excellent.",
  },
  {
    name: "Ritika Shrestha",
    role: "Property Investor",
    review:
      "Very transparent process from inspection to paperwork. I now have two rental units with reliable monthly returns.",
  },
  {
    name: "Prakash Thapa",
    role: "Seller, Kathmandu",
    review:
      "The team positioned my property well, brought qualified buyers, and negotiated a better price than expected.",
  },
];

const locations = ["Kalanki", "Kuleshwor", "Balkhu", "Sitapaila", "Tahachal", "Maitidevi"];

const stats = [
  { label: "Active Listings", value: "120+" },
  { label: "Team Members", value: "16" },
  { label: "Deals Closed", value: "850+" },
  { label: "Client Satisfaction", value: "4.9/5" },
];

export default function Home() {
  return (
    <div>
      <section className="page-pad bg-[color:var(--section-color-1)] pb-12">
        <div className="container grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <p className="section-kicker">Kalanki Focused Real Estate</p>
            <h1 className="section-title text-[clamp(2.4rem,5vw,4.3rem)]">
              Buy, Sell, Or Invest In
              <span className="block text-[color:var(--brand)]">Kalanki With Confidence</span>
            </h1>
            <p className="section-copy mt-5">
              Discover verified listings, local price guidance, and fast support from a team that specializes in Kalanki and nearby Kathmandu areas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/properties" className="btn btn-primary">
                View All Properties
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get Free Consultation
              </Link>
            </div>
          </div>

          <div className="card p-5 md:p-6">
            <h2 className="font-serif text-2xl">Start Your Property Search</h2>
            <p className="section-copy mt-2">Tell us what you need. We will match the best options from Kalanki first.</p>
            <form className="mt-5 grid gap-3">
              <input className="input" placeholder="Location (e.g. Kalanki)" defaultValue="Kalanki" />
              <select className="input" defaultValue="House">
                <option>House</option>
                <option>Apartment</option>
                <option>Land / Plot</option>
                <option>Commercial Space</option>
              </select>
              <select className="input" defaultValue="NRS 1Cr - 3Cr">
                <option>NRS 50L - 1Cr</option>
                <option>NRS 1Cr - 3Cr</option>
                <option>NRS 3Cr - 5Cr</option>
                <option>NRS 5Cr+</option>
              </select>
              <button type="button" className="btn btn-primary mt-1">
                Search Properties
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--section-color-2)] pb-14 pt-12">
        <div className="container">
          <StatsCarousel stats={stats} />
        </div>
      </section>

      <section className="page-pad border-y border-[color:var(--line)] bg-[color:var(--section-color-1)]">
        <div className="container">
          <p className="section-kicker">Featured Listings</p>
          <h2 className="section-title">Hot Properties In And Around Kalanki</h2>
          <p className="section-copy">Quickly compare curated homes and investment-ready opportunities with NRS pricing.</p>
          <div className="mt-9">
            <PropertyCarousel properties={properties} />
          </div>
        </div>
      </section>

      <section className="page-pad bg-[color:var(--section-color-2)]">
        <div className="container">
          <p className="section-kicker">Property Collections</p>
          <h2 className="section-title">Browse By Buyer Intent</h2>
          <div className="mt-8">
            <CollectionsCarousel collections={collections} />
          </div>
        </div>
      </section>

      <section className="page-pad border-y border-[color:var(--line)] bg-[color:var(--section-color-1)]">
        <div className="container grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-kicker">Property Categories</p>
            <h2 className="section-title">Everything You Need In One Place</h2>
            <p className="section-copy">Filter by category and focus on options that fit your plan, budget, and timeline.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--muted)]"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <p className="section-kicker">Where We Operate</p>
            <h3 className="mt-2 font-serif text-3xl">Kathmandu Coverage, Kalanki Priority</h3>
            <p className="section-copy mt-3">Most of our live inventory and site visits are concentrated in Kalanki and nearby neighborhoods.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {locations.map((location) => (
                <div key={location} className="rounded-xl bg-[color:var(--surface-soft)] px-3 py-2 text-center text-sm font-semibold text-[color:var(--foreground)]">
                  {location}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-pad bg-[color:var(--section-color-2)]">
        <div className="container">
          <p className="section-kicker">Reviews & Testimonials</p>
          <h2 className="section-title">Why Clients Recommend Niwas Nepal</h2>
          <div className="mt-8">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>
    </div>
  );
}
