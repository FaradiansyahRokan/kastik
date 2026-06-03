export default function Workflow() {
  return (
    <section id="workflow">
      <div className="container">
        <div className="workflow-header fade-up">
          <h2 className="section-title">Live in 48 Hours</h2>
          <p className="section-sub">From signup to your first automated customer conversation in under two days â€” no engineers required.</p>
        </div>
        <div className="workflow-steps fade-up stagger-1">
          <div className="wf-step">
            <div className="wf-num">1</div>
            <h4 className="wf-title">Customer sends a message</h4>
            <p className="wf-desc">On any channel â€” WhatsApp, website chat, Instagram, or email.</p>
          </div>
          <div className="wf-step">
            <div className="wf-num">2</div>
            <h4 className="wf-title">Kastik understands intent</h4>
            <p className="wf-desc">AI reads the message, detects intent, and looks up relevant knowledge.</p>
          </div>
          <div className="wf-step">
            <div className="wf-num">3</div>
            <h4 className="wf-title">Best response generated</h4>
            <p className="wf-desc">A precise, on-brand, contextual reply is crafted in under a second.</p>
          </div>
          <div className="wf-step">
            <div className="wf-num">4</div>
            <h4 className="wf-title">Customer receives help instantly</h4>
            <p className="wf-desc">Satisfied, qualified, booked. Zero wait time. Zero dropped leads.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
