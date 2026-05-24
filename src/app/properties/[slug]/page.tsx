import Link from "next/link";
import { properties } from "../../../data/properties";

type Params = {
  params: { slug: string };
};

export default function PropertyDetail({ params }: Params) {
  const property = properties.find((item) => item.slug === params.slug);

  if (!property) {
    return (
      <div className="page-pad">
        <div className="container max-w-3xl">
          <article className="card p-8 text-center">
            <p className="section-kicker">Not Found</p>
            <h1 className="section-title">Property Not Found</h1>
            <p className="section-copy mx-auto">The listing may have been moved or updated. Explore available properties below.</p>
            <Link href="/properties" className="btn btn-primary mt-6">
              Back To Listings
            </Link>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="page-pad">
      <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="card overflow-hidden">
          <div className="h-80 bg-gradient-to-br from-[#f0e4cb] via-[#f7efde] to-[#f9f3e7] p-6">
            <div className="flex h-full items-end rounded-2xl border border-white/70 bg-white/45 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--brand)]">{property.location}</p>
            </div>
          </div>
          <div className="p-7">
            <h1 className="font-serif text-4xl leading-tight">{property.title}</h1>
            <p className="mt-3 text-3xl font-bold text-[color:var(--brand)]">{property.price}</p>
            <p className="section-copy mt-4">{property.description}</p>
          </div>
        </article>

        <aside className="space-y-6">
          <article className="card p-6">
            <h2 className="font-serif text-2xl">Property Details</h2>
            <ul className="mt-4 space-y-3 text-[color:var(--muted)]">
              <li className="flex items-center justify-between border-b border-[color:var(--line)] pb-3">
                <span>Bedrooms</span>
                <span className="font-semibold text-[color:var(--foreground)]">{property.beds ?? "-"}</span>
              </li>
              <li className="flex items-center justify-between border-b border-[color:var(--line)] pb-3">
                <span>Bathrooms</span>
                <span className="font-semibold text-[color:var(--foreground)]">{property.baths ?? "-"}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Listing Type</span>
                <span className="font-semibold text-[color:var(--foreground)]">Residential</span>
              </li>
            </ul>
          </article>

          <article className="card p-6">
            <h2 className="font-serif text-2xl">Schedule A Viewing</h2>
            <p className="section-copy mt-2">Speak with our team to arrange a private site visit.</p>
            <Link href="/contact" className="btn btn-primary mt-5 w-full">
              Contact Niwas Nepal
            </Link>
          </article>
        </aside>
      </div>
    </div>
  );
}
