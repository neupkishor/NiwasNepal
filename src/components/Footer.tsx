import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface)]">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="section-kicker">Niwas Nepal</p>
            <h3 className="mt-3 font-serif text-2xl">Homes With Character</h3>
            <p className="section-copy mt-3">
              Boutique real estate advisory for lifestyle homes and high-confidence property investments across Nepal.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--muted)]">Explore</h4>
            <div className="mt-4 flex flex-col gap-2 text-[15px]">
              <Link href="/properties" className="hover:text-[color:var(--brand)]">Properties</Link>
              <Link href="/agents" className="hover:text-[color:var(--brand)]">Agents</Link>
              <Link href="/about" className="hover:text-[color:var(--brand)]">About Us</Link>
              <Link href="/contact" className="hover:text-[color:var(--brand)]">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--muted)]">Contact</h4>
            <div className="mt-4 space-y-2 text-[15px] text-[color:var(--muted)]">
              <p>Kathmandu, Nepal</p>
              <p>+977-1-555-0100</p>
              <p>info@niwasnepal.com</p>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-[color:var(--line)] pt-5 text-sm text-[color:var(--muted)]">
          © {new Date().getFullYear()} Niwas Nepal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
