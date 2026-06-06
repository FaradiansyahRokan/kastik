export default function Solution() {
  return (
    <section id="solution">
      <div className="container">
        <div className="solution-inner fade-up">
          <div className="solution-text">
            <h2 className="section-title">One Platform, <span className="text-gradient-premium">Three Layers</span></h2>
            <p className="section-sub" style={{ marginBottom: '1.5rem', maxWidth: '480px' }}>
              The secret weapon: every Kastik product is built on the same shared engine. You get the same RAG, memory, and inference quality &mdash; whether you're using a ready-made app or building from scratch.
            </p>
            <div className="solution-benefits">
              <div className="benefit-item">
                <i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i> <span>Shared AI infrastructure</span>
              </div>
              <div className="benefit-item">
                <i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i> <span>No vendor lock-in per product</span>
              </div>
              <div className="benefit-item">
                <i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i> <span>Enterprise-hardened security</span>
              </div>
            </div>
          </div>
          <div className="solution-flow">
            <div className="flow-step">
              <div className="flow-dot">01</div>
              <div className="flow-content">
                <h4>Core Engine</h4>
                <p>The shared infrastructure your apps run on. RAG pipelines, vector memory, LLM inference, and agent orchestration &mdash; all pre-built.</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-dot">02</div>
              <div className="flow-content">
                <h4>App Templates</h4>
                <p>Production-ready AI apps built on the Core Engine. Deploy a sales agent, research assistant, or support bot in hours, not months.</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-dot">03</div>
              <div className="flow-content">
                <h4>Builder</h4>
                <p>For teams with unique workflows. A visual agent builder + API-first access lets developers compose custom AI applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
