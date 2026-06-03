export default function Security() {
  return (
    <section id="security">
      <div className="container">
        <div className="security-inner">
          <div className="fade-up">
            <div className="section-label"><span></span>Security</div>
            <h2 className="section-title">Enterprise-Grade Security</h2>
            <p className="section-sub" style={{maxWidth:'100%'}}>Kastik is built on infrastructure that meets the highest standards of data privacy, compliance, and availability.</p>
            <div className="trust-badges">
              <div className="trust-badge">✓ SOC 2 Type II</div>
              <div className="trust-badge">✓ GDPR Compliant</div>
              <div className="trust-badge">✓ HIPAA Ready</div>
              <div className="trust-badge">✓ 99.9% Uptime SLA</div>
            </div>
          </div>
          <div className="security-grid fade-up stagger-2">
            <div className="security-card">
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h4>Secure Data Storage</h4>
              <p>All data encrypted at rest and in transit using AES-256 and TLS 1.3 standards.</p>
            </div>
            <div className="security-card">
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h4>Role-Based Access</h4>
              <p>Granular permissions ensure each team member sees only what they need.</p>
            </div>
            <div className="security-card">
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
              </div>
              <h4>Reliable Cloud Infrastructure</h4>
              <p>Hosted on AWS with multi-region redundancy and automated failover.</p>
            </div>
            <div className="security-card">
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h4>Scalable Architecture</h4>
              <p>Handles millions of messages per month without degrading performance.</p>
            </div>
            <div className="security-card full-width">
              <div className="sec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>High Availability</h4>
              <p>Designed for zero downtime deployments with automatic scaling, real-time monitoring, and 24/7 infrastructure oversight so your AI agent is always available when your customers need it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
