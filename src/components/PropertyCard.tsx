import Link from "next/link";

type Property = {
  slug: string;
  title: string;
  price: string;
  location: string;
  beds?: number;
  baths?: number;
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="card group overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]">
      <div className="h-44 bg-gradient-to-br from-[#f9f2e3] via-[#f0e5cf] to-[#f6efe2] p-5">
        <div className="flex h-full items-end justify-between rounded-2xl border border-white/60 bg-white/40 px-4 py-3 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--brand)]">Featured</p>
          <p className="text-sm text-[color:var(--muted)]">{property.location}</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-2xl leading-tight">{property.title}</h3>
        <p className="mt-2 text-2xl font-bold text-[color:var(--brand)]">{property.price}</p>
        <p className="mt-3 text-sm text-[color:var(--muted)]">
          {property.beds ?? "-"} bedrooms • {property.baths ?? "-"} bathrooms
        </p>
        <div className="mt-5">
          <Link href={`/properties/${property.slug}`} className="btn btn-secondary text-sm">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
