export default function Personas() {
  return (
    <section id="personas" className="personas-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="personas-header fade-up">
          <h2 className="section-title">Choose Your <span className="text-gradient-premium">Path</span></h2>
          <p className="section-sub">
            Whether you're building raw infrastructure or deploying ready-made agents, 
            Kastik has the tools to accelerate your AI adoption.
          </p>
        </div>

        {/* Dual Path Grid */}
        <div className="personas-grid">
          
          {/* Card 1: AI Engineers */}
          <div className="persona-card fade-up stagger-1">
            {/* Top: Text Content */}
            <div className="persona-content">
              <div className="persona-tag">For Developers</div>
              <h3>For AI Engineers</h3>
              <p className="persona-sub">Kastik provides raw access to inference endpoints and orchestration layers.</p>
              
              <ul className="persona-features">
                <li>
                  <span className="persona-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Low-latency inference APIs
                </li>
                <li>
                  <span className="persona-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Fine-tune custom LLMs and Vector DBs
                </li>
                <li>
                  <span className="persona-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Build complex RAG pipelines in code
                </li>
              </ul>
              
              <button className="persona-btn">Explore Documentation</button>
            </div>
            
            {/* Bottom: Code Graphic */}
            <div className="persona-graphic dev-graphic">
              <div className="mock-code-window">
                <div className="mock-header">
                  <span></span><span></span><span></span>
                </div>
                <div className="mock-body">
                  <div className="line"><span className="kw">import</span> {'{'} KastikClient {'}'} <span className="kw">from</span> <span className="str">'@kastik/sdk'</span>;</div>
                  <div className="line"><span className="kw">const</span> ai = <span className="kw">new</span> <span className="fn">KastikClient</span>(API_KEY);</div>
                  <div className="line">&nbsp;</div>
                  <div className="line"><span className="kw">const</span> result = <span className="kw">await</span> ai.rag.<span className="fn">query</span>({'{'}</div>
                  <div className="line indent">vectorDb: <span className="str">'enterprise_docs'</span>,</div>
                  <div className="line indent">model: <span className="str">'Kastik-Omni-v2'</span></div>
                  <div className="line">{'}'});</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Enterprise */}
          <div className="persona-card fade-up stagger-2">
            {/* Top: Text Content */}
            <div className="persona-content">
              <div className="persona-tag">For Business</div>
              <h3>For Enterprise</h3>
              <p className="persona-sub">Automate workflows and deploy AI agents across your company without writing code.</p>
              
              <ul className="persona-features">
                <li>
                  <span className="persona-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Deploy autonomous agents instantly
                </li>
                <li>
                  <span className="persona-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Native CRM &amp; ERP integrations
                </li>
                <li>
                  <span className="persona-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Reduce operational costs by 60%
                </li>
              </ul>
              
              <button className="persona-btn">Talk to Sales</button>
            </div>
            
            {/* Bottom: Cube Graphic */}
            <div className="persona-graphic biz-graphic">
              <div className="cube-scene">
                <div className="glowing-cube">
                  <div className="cube-face top"></div>
                  <div className="cube-face left"></div>
                  <div className="cube-face right"></div>
                </div>
                <div className="cube-glow"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
