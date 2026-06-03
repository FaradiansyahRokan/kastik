export default function Industries() {
  const industries = [
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>, title: 'SaaS & Tech', desc: 'Handle trial support, onboarding questions, and feature requests â€” converting free users to paid at scale.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, title: 'Agencies', desc: 'Qualify inbound leads, capture project briefs, and book discovery calls â€” even when your team is deep in client work.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>, title: 'E-Commerce', desc: 'Answer product questions, handle order tracking, and turn browsers into buyers with personalized recommendations.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, title: 'Healthcare', desc: 'Book patient appointments, answer FAQs, and triage inquiries â€” HIPAA-compliant and always available.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>, title: 'Education', desc: 'Guide prospective students through enrollment, answer curriculum questions, and capture admissions leads 24/7.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Influencer Management', desc: 'Manage brand partnership inquiries, fan DMs, and sponsorship requests at scale without personal bandwidth.' },
  ]

  const staggers = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-1', 'stagger-2', 'stagger-3']

  return (
    <section id="industries">
      <div className="container">
        <div className="industries-header fade-up">
          <h2 className="section-title">Built For Every Customer-Focused Business</h2>
          <p className="section-sub">Kastik adapts to your industry&apos;s language, workflows, and compliance requirements out of the box.</p>
        </div>
        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div key={i} className={`industry-card fade-up ${staggers[i]}`}>
              <div className="industry-icon">{ind.icon}</div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
