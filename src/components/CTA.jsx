export default function CTA() {
  return (
    <section id="cta">
      <div className="cta-mesh"></div>
      <div className="container">
        <div className="cta-inner fade-up">
          <div className="cta-label"><span></span>Ready to deploy?</div>
          <h2 className="section-title">Build any AI app.<br />Ship in 48 hours.</h2>
          <p className="section-sub">Deploy enterprise-grade AI applications using our App Templates, or compose custom agents via our Builder.</p>
          <div className="cta-btns">
            <button className="btn-cta-primary">Start building</button>
            <button className="btn-cta-ghost">Book a Demo</button>
          </div>
          <p style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.5)',marginTop:'1.5rem'}}>Setup in under 48 hours &middot; SOC 2 Type II</p>
        </div>
      </div>
    </section>
  )
}
