export default function Problems() {
  return (
    <section id="problems">
      <div className="container">
        <div className="problems-header fade-up">
          <h2 className="section-title">AI infrastructure is <span className="text-gradient-premium">broken</span></h2>
          <p className="section-sub">And buying isolated "vertical tools" for every single use case only makes it worse.</p>
        </div>
        <div className="problems-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {/* Option A */}
          <div className="problem-card fade-up stagger-1">
            <div className="problem-icon" style={{ color: '#FF5F56', background: 'rgba(255, 95, 86, 0.1)', borderColor: 'rgba(255, 95, 86, 0.2)', boxShadow: 'inset 0 0 20px rgba(255, 95, 86, 0.1)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <h3>Option A: Build from scratch</h3>
            <p style={{marginBottom: '1rem'}}>Takes 3-6 months just to set up the LLMs, vector databases, memory buffers, and agent orchestration.</p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <li>&times; Hundreds of thousands in costs</li>
              <li>&times; Specialized engineering required</li>
              <li>&times; 85% fail to reach production</li>
            </ul>
          </div>

          {/* Option B */}
          <div className="problem-card fade-up stagger-2">
            <div className="problem-icon" style={{ color: '#FFBD2E', background: 'rgba(255, 189, 46, 0.1)', borderColor: 'rgba(255, 189, 46, 0.2)', boxShadow: 'inset 0 0 20px rgba(255, 189, 46, 0.1)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
            </div>
            <h3>Option B: Vertical silos</h3>
            <p style={{marginBottom: '1rem'}}>Buying one tool for sales, another for research, and another for support. Data doesn't connect.</p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <li>&times; Vendor lock-in per use case</li>
              <li>&times; Fragmented company knowledge</li>
              <li>&times; Multiplied subscription costs</li>
            </ul>
          </div>

          {/* Option C (Kastik) */}
          <div className="problem-card fade-up stagger-3" style={{ background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.15), rgba(10, 10, 15, 1))', borderColor: 'rgba(139, 92, 246, 0.5)', boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)' }}>
            <div className="problem-icon" style={{ color: 'var(--primary2)', background: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(139, 92, 246, 0.4)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <h3 style={{color: '#fff'}}>Option C: Kastik</h3>
            <p style={{marginBottom: '1rem', color: 'rgba(255,255,255,0.8)'}}>One platform. Multiple AI apps. Shared infrastructure. Add new apps without rebuilding anything.</p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: '#d8b4fe', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <li><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline', marginRight:'6px', verticalAlign:'middle'}}><polyline points="20 6 9 17 4 12"/></svg> Deploy first app in 48 hours</li>
              <li><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline', marginRight:'6px', verticalAlign:'middle'}}><polyline points="20 6 9 17 4 12"/></svg> Connected knowledge base</li>
              <li><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline', marginRight:'6px', verticalAlign:'middle'}}><polyline points="20 6 9 17 4 12"/></svg> Ready-made + Custom Builder</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
