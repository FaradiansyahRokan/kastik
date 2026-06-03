export default function Solution() {
  return (
    <section id="solution">
      <div className="container">
        <div className="solution-inner fade-up">
          <div className="solution-text">
            <h2 className="section-title">One Platform for Every AI Workload</h2>
            <p className="section-sub" style={{ marginBottom: '1.5rem', maxWidth: '480px' }}>
              We abstract away the complexity of machine learning infrastructure so your team can focus on building magical product experiences.
            </p>
            <div className="solution-benefits">
              <div className="benefit-item">
                <i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i> <span>Serverless GPU Inference</span>
              </div>
              <div className="benefit-item">
                <i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i> <span>One-click Model Fine-tuning</span>
              </div>
              <div className="benefit-item">
                <i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i> <span>Integrated Vector DB & Embeddings</span>
              </div>
              <div className="benefit-item">
                <i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i> <span>Multi-modal Agent Orchestration</span>
              </div>
              <div className="benefit-item">
                <i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></i> <span>Enterprise SOC2 Compliant Security</span>
              </div>
            </div>
          </div>
          <div className="solution-flow">
            <div className="flow-step">
              <div className="flow-dot">1</div>
              <div className="flow-content">
                <h4>Connect Your Data</h4>
                <p>Sync S3, Snowflake, or Notion. We instantly index and vectorize your proprietary data.</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-dot">2</div>
              <div className="flow-content">
                <h4>Train & Fine-Tune</h4>
                <p>Select base models (Llama, Mistral, Gemini) and fine-tune them on your data in minutes.</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-dot">3</div>
              <div className="flow-content">
                <h4>Build Agents</h4>
                <p>Define custom tools and logic for autonomous agents using our visual workflow builder.</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-dot">4</div>
              <div className="flow-content">
                <h4>Deploy via API</h4>
                <p>Push to production instantly with a single robust GraphQL or REST endpoint.</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="flow-dot">5</div>
              <div className="flow-content">
                <h4>Monitor & Scale</h4>
                <p>Track latency, costs, and model drift in real-time as your app scales to millions of users.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
