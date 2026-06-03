export default function Problems() {
  return (
    <section id="problems">
      <div className="container">
        <div className="problems-header fade-up">
          <h2 className="section-title">AI Infrastructure is <span className="text-gradient-premium">Broken</span></h2>
          <p className="section-sub">Building and scaling enterprise AI from scratch takes too long, costs too much, and requires specialized talent that is hard to find.</p>
        </div>
        <div className="problems-grid">
          <div className="problem-card fade-up stagger-1">
            <div className="problem-icon" style={{ color: 'var(--primary2)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <h3>Complex Engineering</h3>
            <p>Stitching together LLMs, vector databases, memory buffers, and orchestration layers takes months of tedious engineering.</p>
          </div>
          <div className="problem-card fade-up stagger-2">
            <div className="problem-icon" style={{ color: 'var(--primary2)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
            </div>
            <h3>Astronomical Costs</h3>
            <p>Running inference at scale and maintaining dedicated infrastructure destroys profit margins for scaling startups.</p>
          </div>
          <div className="problem-card fade-up stagger-3">
            <div className="problem-icon" style={{ color: 'var(--primary2)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
            </div>
            <h3>Slow Deployment</h3>
            <p>Taking a model from a Jupyter notebook to a production-ready edge environment often takes quarters, not days.</p>
          </div>
          <div className="problem-card fade-up stagger-1">
            <div className="problem-icon" style={{ color: 'var(--primary2)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
            </div>
            <h3>Model Degradation</h3>
            <p>Without proper observability, models drift over time, causing hallucinations and degrading user trust silently.</p>
          </div>
          <div className="problem-card fade-up stagger-2">
            <div className="problem-icon" style={{ color: 'var(--primary2)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <h3>Security Risks</h3>
            <p>Deploying AI over sensitive proprietary data often leads to data leaks and compliance violations without strict guardrails.</p>
          </div>
          <div className="problem-card fade-up stagger-3" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary2))', color: '#fff', borderColor: 'transparent' }}>
            <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '0.5rem' }}>85%</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>of AI projects fail to reach production due to infrastructure complexity.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
