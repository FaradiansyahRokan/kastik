export default function Workflow() {
  return (
    <section id="workflow">
      <div className="container">
        <div className="workflow-header fade-up">
          <h2 className="section-title">Live in 48 Hours</h2>
          <p className="section-sub">From signup to your first automated AI workflow in production under two days. No infrastructure headache.</p>
        </div>
        <div className="workflow-steps fade-up stagger-1">
          <div className="wf-step">
            <div className="wf-num">1</div>
            <h4 className="wf-title">Connect your data</h4>
            <p className="wf-desc">Sync Notion, Drive, or Snowflake. Kastik indexes your proprietary data securely.</p>
          </div>
          <div className="wf-step">
            <div className="wf-num">2</div>
            <h4 className="wf-title">Select or build an app</h4>
            <p className="wf-desc">Pick an App Template or use the visual builder to define custom agent behaviors.</p>
          </div>
          <div className="wf-step">
            <div className="wf-num">3</div>
            <h4 className="wf-title">Test & refine</h4>
            <p className="wf-desc">Use the built-in playground to verify responses and RAG accuracy instantly.</p>
          </div>
          <div className="wf-step">
            <div className="wf-num">4</div>
            <h4 className="wf-title">Deploy to production</h4>
            <p className="wf-desc">Push live via a single REST/GraphQL endpoint. Integrated with your existing tools.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
