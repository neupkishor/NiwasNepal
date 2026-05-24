import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/properties";

export default function PropertiesPage() {
  return (
    <div className="page-pad">
      <div className="container">
        <p className="section-kicker">Property Portfolio</p>
        <h1 className="section-title">Explore Current Listings</h1>
        <p className="section-copy">
          Browse homes and investment properties across top neighborhoods in Nepal, each reviewed by our advisory team.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
