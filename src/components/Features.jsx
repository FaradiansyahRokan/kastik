import { useEffect } from 'react'

export default function Features() {
  useEffect(() => {
    const heights = [40, 55, 35, 70, 45, 85, 60, 90, 50, 78, 65, 95]
    const c1 = document.getElementById('chart1')
    if (c1 && c1.children.length === 0) {
      heights.forEach(h => {
        const b = document.createElement('div')
        b.className = 'bar-chart-bar'
        b.style.height = h + '%'
        c1.appendChild(b)
      })
    }
  }, [])

  return (
    <section id="features">
      <div className="container">
        <div className="features-header fade-up">
          <div className="section-label"><span></span>Core Infrastructure</div>
          <h2 className="section-title">Everything to Build Advanced AI</h2>
          <p className="section-sub">A complete ecosystem for training, deploying, and monitoring autonomous systems and machine learning models.</p>
        </div>
        <div className="bento">
          <div className="bento-card large fade-up stagger-1">
            <div className="bento-icon icon-purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
            </div>
            <h3>Custom LLM Fine-Tuning</h3>
            <p>Train state-of-the-art language models on your proprietary data securely. Kastik provides enterprise-grade infrastructure to deploy models that understand your domain perfectly.</p>
            <div className="bento-mini-chart" id="chart1"></div>
          </div>
          <div className="bento-card fade-up stagger-2">
            <div className="bento-icon icon-teal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3>High-Performance Inference</h3>
            <p>Sub-millisecond latency for complex predictive models with our globally distributed GPU edge network.</p>
          </div>
          <div className="bento-card fade-up stagger-1">
            <div className="bento-icon icon-amber">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            </div>
            <h3>Autonomous AI Agents</h3>
            <p>Deploy intelligent agents capable of complex reasoning, multi-step execution, and autonomous decision making.</p>
          </div>
          <div className="bento-card fade-up stagger-2">
            <div className="bento-icon icon-pink">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
            </div>
            <h3>Vector Database & RAG</h3>
            <p>Built-in hybrid search infrastructure for Retrieval-Augmented Generation that grounds your AI in truth.</p>
          </div>
          <div className="bento-card fade-up stagger-3">
            <div className="bento-icon icon-purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Enterprise Guardrails</h3>
            <p>Comprehensive security layer ensuring your AI systems operate strictly within defined ethical and operational boundaries.</p>
          </div>
          <div className="bento-card large fade-up stagger-1">
            <div className="bento-icon icon-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            </div>
            <h3>Observability & Analytics</h3>
            <p>Real-time insights into model performance, token usage, latency, and drift detection. Make data-driven decisions about your machine learning strategy instantly.</p>
          </div>
          <div className="bento-card fade-up stagger-2">
            <div className="bento-icon icon-green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/><rect width="8" height="8" x="8" y="8" rx="1"/></svg>
            </div>
            <h3>Unified API Layer</h3>
            <p>Integrate computer vision, NLP, and predictive models into your apps through a single, elegant GraphQL and REST API.</p>
          </div>
          <div className="bento-card fade-up stagger-3">
            <div className="bento-icon icon-teal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3>Edge Deployment</h3>
            <p>Push optimized models directly to the edge for real-time processing without massive cloud overheads.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
