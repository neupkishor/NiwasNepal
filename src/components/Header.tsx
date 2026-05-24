import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/agents", label: "Agents" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--surface)]/95 shadow-[0_12px_28px_rgba(25,22,18,0.14)] backdrop-blur">
      <div className="container flex h-[var(--header-height)] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-[color:var(--line)] bg-white p-1 shadow-sm">
            <Image src="/logo.jpeg" alt="Niwas Nepal" fill className="object-contain" priority />
          </div>
          <div>
            <p className="font-serif text-xl leading-tight text-[color:var(--foreground)]">Niwas Nepal</p>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--muted)]">Real Estate</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] font-semibold text-[color:var(--muted)] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[color:var(--brand)]">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary text-sm">
            Book A Viewing
          </Link>
        </nav>

        <Link href="/contact" className="btn btn-primary text-sm md:hidden">
          Contact
        </Link>
      </div>
    </header>
  );
}
