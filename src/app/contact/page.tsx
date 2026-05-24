export default function ContactPage() {
  return (
    <div className="page-pad">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article>
          <p className="section-kicker">Contact</p>
          <h1 className="section-title">Let’s Find The Right Property</h1>
          <p className="section-copy">
            Share your requirements and timeline. Our team will get back with curated recommendations and next steps.
          </p>
          <div className="mt-8 space-y-2 text-[color:var(--muted)]">
            <p>Kathmandu, Nepal</p>
            <p>+977-1-555-0100</p>
            <p>info@niwasnepal.com</p>
          </div>
        </article>

        <form className="card p-6 md:p-8">
          <div className="grid gap-4">
            <label className="text-sm font-semibold text-[color:var(--muted)]" htmlFor="name">
              Full Name
            </label>
            <input id="name" className="input" placeholder="Your name" />

            <label className="text-sm font-semibold text-[color:var(--muted)]" htmlFor="email">
              Email
            </label>
            <input id="email" type="email" className="input" placeholder="you@example.com" />

            <label className="text-sm font-semibold text-[color:var(--muted)]" htmlFor="message">
              What are you looking for?
            </label>
            <textarea id="message" className="textarea" placeholder="Tell us preferred location, budget, and timeline" rows={6} />

            <button type="submit" className="btn btn-primary mt-2 w-fit">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
