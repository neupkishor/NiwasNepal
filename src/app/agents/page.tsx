const agents = [
  {
    name: "Prasanna K.C.",
    role: "Senior Property Advisor",
    phone: "+977-1-555-0100",
    email: "prasanna@niwasnepal.com",
    photo: "/team/prasanna-kc.svg",
  },
  {
    name: "Kiran Gurung",
    role: "Investment Specialist",
    phone: "+977-1-555-0101",
    email: "kiran@niwasnepal.com",
    photo: "/team/kiran-gurung.svg",
  },
];

export default function AgentsPage() {
  return (
    <div className="page-pad">
      <div className="container">
        <p className="section-kicker">Our Team</p>
        <h1 className="section-title">Meet Your Advisors</h1>
        <p className="section-copy">Experienced professionals helping you navigate every stage of buying, selling, and investing.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {agents.map((agent) => (
            <article key={agent.email} className="card p-6">
              <img
                src={agent.photo}
                alt={`${agent.name} profile photo`}
                className="h-24 w-24 rounded-full object-cover ring-2 ring-[color:var(--border)]"
              />
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--brand)]">{agent.role}</p>
              <h2 className="mt-2 font-serif text-3xl">{agent.name}</h2>
              <div className="mt-5 space-y-1 text-[color:var(--muted)]">
                <p>
                  <a className="link-hover" href={`tel:${agent.phone.replaceAll("-", "")}`}>
                    {agent.phone}
                  </a>
                </p>
                <p>
                  <a className="link-hover" href={`mailto:${agent.email}`}>
                    {agent.email}
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
