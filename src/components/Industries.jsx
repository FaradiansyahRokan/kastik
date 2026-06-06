export default function Industries() {
  const industries = [
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'Low-latency Inference', desc: 'Optimized models and routing infrastructure delivering under 1 second end-to-end response times.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: 'Custom LLM Fine-tuning', desc: 'Securely fine-tune leading open-source models on your proprietary datasets without data leakage.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>, title: 'Complex RAG Pipelines', desc: 'Build Retrieval-Augmented Generation workflows via our visual builder or code, complete with vector DBs.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>, title: 'GraphQL + REST API', desc: 'One endpoint per deployment. Integrate computer vision, NLP, and predictive models into your apps.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title: 'Full Observability', desc: 'Real-time dashboard for tracking latency, token usage, cost, and automated model drift detection.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Enterprise Security', desc: 'SOC 2 Type II compliant, HIPAA-ready, and multi-tenant isolation. Your data never leaves your environment.' },
  ]

  const staggers = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-1', 'stagger-2', 'stagger-3']

  return (
    <section id="industries">
      <div className="container">
        <div className="industries-header fade-up">
          <h2 className="section-title">Built for builders. <span className="text-gradient-premium">Open for everyone.</span></h2>
          <p className="section-sub">Production-grade AI infrastructure. One API. No boilerplate. Launch your first application today.</p>
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
