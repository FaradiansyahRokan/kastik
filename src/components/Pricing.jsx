export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing-header fade-up">
          <h2 className="section-title">Simple, Predictable Pricing</h2>
          <p className="section-sub">Start free, scale without surprises. Every plan includes unlimited conversations and core AI features.</p>
        </div>
        <div className="pricing-grid fade-up stagger-1">
          {/* Starter */}
          <div className="pricing-card">
            <div className="plan-name">Starter</div>
            <div className="plan-price">$49<span>/mo</span></div>
            <div className="plan-desc">Perfect for small businesses and solo founders just getting started with AI support.</div>
            <ul className="plan-features">
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>1 AI Agent</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>500 conversations/mo</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>WhatsApp + Website</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Basic Analytics</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Knowledge Base (10 docs)</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Email Support</span></li>
            </ul>
            <button className="btn-plan">Get Started</button>
          </div>
          {/* Growth */}
          <div className="pricing-card featured">
            <div className="featured-badge">Most Popular</div>
            <div className="plan-name" style={{color:'var(--primary)'}}>Growth</div>
            <div className="plan-price">$149<span>/mo</span></div>
            <div className="plan-desc" style={{borderColor:'rgba(91,78,232,0.15)'}}>For growing teams that need full multi-channel coverage and advanced lead qualification.</div>
            <ul className="plan-features">
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>3 AI Agents</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Unlimited conversations</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>All channels</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Advanced Analytics</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Knowledge Base (unlimited)</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>CRM Integrations</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Lead Qualification</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Priority Support</span></li>
            </ul>
            <button className="btn-plan featured-btn">Get Started</button>
          </div>
          {/* Enterprise */}
          <div className="pricing-card">
            <div className="plan-name">Enterprise</div>
            <div className="plan-price" style={{fontSize:'1.8rem'}}>Custom</div>
            <div className="plan-desc">For large organizations with complex workflows, compliance needs, and dedicated support.</div>
            <ul className="plan-features">
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Unlimited AI Agents</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Custom conversation limits</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>White-label option</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Dedicated Success Manager</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>SSO + RBAC</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>SLA Guarantee</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Custom Integrations</span></li>
            </ul>
            <button className="btn-plan">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}
