export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing-header fade-up">
          <h2 className="section-title">Simple, Predictable Pricing</h2>
          <p className="section-sub">Start building for free. Scale your infrastructure as your apps grow. No hidden API costs.</p>
        </div>
        <div className="pricing-grid fade-up stagger-1">
          {/* Developer */}
          <div className="pricing-card">
            <div className="plan-name">Developer</div>
            <div className="plan-price">$99<span>/mo</span></div>
            <div className="plan-desc">For builders and startups deploying their first AI application to production.</div>
            <ul className="plan-features">
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Core Engine API access</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>1M Tokens / month</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Access to all App Templates</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>10GB Vector Storage</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Community Support</span></li>
            </ul>
            <button className="btn-plan">Get Started</button>
          </div>
          {/* Growth */}
          <div className="pricing-card featured">
            <div className="featured-badge">Most Popular</div>
            <div className="plan-name" style={{color:'var(--primary)'}}>Scale</div>
            <div className="plan-price">$299<span>/mo</span></div>
            <div className="plan-desc" style={{borderColor:'rgba(91,78,232,0.15)'}}>For growing teams scaling multiple AI apps with high traffic demands.</div>
            <ul className="plan-features">
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>10M Tokens / month</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Priority Inference Routing</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Custom LLM Fine-tuning</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>100GB Vector Storage</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Advanced Observability</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Priority Email & Slack Support</span></li>
            </ul>
            <button className="btn-plan featured-btn">Get Started</button>
          </div>
          {/* Enterprise */}
          <div className="pricing-card">
            <div className="plan-name">Enterprise</div>
            <div className="plan-price" style={{fontSize:'1.8rem'}}>Custom</div>
            <div className="plan-desc">For large organizations with complex workflows, compliance needs, and dedicated support.</div>
            <ul className="plan-features">
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Unlimited Tokens</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Dedicated GPU Instances</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Custom SLA Guarantees</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>SOC2 / HIPAA Compliance</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>SSO & RBAC</span></li>
              <li><i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i><span>Dedicated Success Engineer</span></li>
            </ul>
            <button className="btn-plan">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}
