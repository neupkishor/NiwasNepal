export default function AboutPage() {
  return (
    <div className="page-pad">
      <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article>
          <p className="section-kicker">About Us</p>
          <h1 className="section-title">Trusted Real Estate Advisors In Nepal</h1>
          <p className="section-copy">
            Niwas Nepal is a boutique real estate team focused on premium homes and strategic property acquisitions. We blend local market depth with transparent, client-first guidance.
          </p>
          <p className="section-copy">
            Whether you are buying a family residence, selling a legacy property, or evaluating high-value investment opportunities, we help you make clear and confident decisions.
          </p>
        </article>

        <div className="card p-7">
          <h2 className="font-serif text-2xl">What We Stand For</h2>
          <ul className="mt-4 space-y-4 text-[color:var(--muted)]">
            <li>
              <p className="font-semibold text-[color:var(--foreground)]">Clarity</p>
              <p>Every recommendation is backed by practical market context and transparent reasoning.</p>
            </li>
            <li>
              <p className="font-semibold text-[color:var(--foreground)]">Craft</p>
              <p>We value homes with architectural character, lifestyle quality, and long-term relevance.</p>
            </li>
            <li>
              <p className="font-semibold text-[color:var(--foreground)]">Care</p>
              <p>From first consultation to final handover, we stay closely involved in your journey.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
