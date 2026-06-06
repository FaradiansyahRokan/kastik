import { useState, useEffect, useRef } from 'react'
import smallLogo from '../assets/logos.png'

const messages = [
  { role: 'customer', text: "I need a custom agent that can answer questions based on our API documentation.", time: '10:02 AM' },
  { role: 'agent', text: "Done. I've created the 'API Support' agent and connected it to your developer portal. The vector database is indexed and ready for RAG.", time: '10:02 AM' },
  { role: 'customer', text: "Perfect. Can I get the endpoint to deploy it to our web app?", time: '10:03 AM' },
  { role: 'agent', text: "Your endpoint is live at api.kastik.ai/v1/agents/api-support/chat. Ready to accept queries in production.", time: '10:03 AM' },
]

export default function DemoChat() {
  const [visibleMessages, setVisibleMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    let timeout
    let idx = 0

    function showNext() {
      if (idx >= messages.length) {
        timeout = setTimeout(() => {
          setVisibleMessages([])
          setIsTyping(false)
          idx = 0
          timeout = setTimeout(showNext, 1000)
        }, 6000)
        return
      }

      const msg = messages[idx]

      if (msg.role === 'agent') {
        setIsTyping(true)
        timeout = setTimeout(() => {
          setIsTyping(false)
          setVisibleMessages(prev => [...prev, msg])
          idx++
          timeout = setTimeout(showNext, 2200)
        }, 1200)
      } else {
        setVisibleMessages(prev => [...prev, msg])
        idx++
        timeout = setTimeout(showNext, 1200)
      }
    }

    timeout = setTimeout(showNext, 1000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [visibleMessages, isTyping])

  return (
    <section id="demo">
      <div className="container">
        <div className="demo-inner">
          <div className="fade-up">
            <h2 className="section-title">The <span className="text-gradient-premium">Builder</span></h2>
            <p className="section-sub" style={{maxWidth:'100%'}}>For teams with unique workflows. A visual agent builder + API-first access lets you compose custom AI applications using the same powerful infrastructure.</p>
            <div style={{marginTop:'2rem',display:'flex',flexDirection:'column',gap:'0.875rem'}}>
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem',fontSize:'0.875rem',color:'var(--muted)'}}>
                <span style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(91,78,232,0.1)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--primary)',flexShrink:0,fontWeight:600}}>1</span>
                Define custom tools and personas
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem',fontSize:'0.875rem',color:'var(--muted)'}}>
                <span style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(91,78,232,0.1)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--primary)',flexShrink:0,fontWeight:600}}>2</span>
                Connect your proprietary data for RAG
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem',fontSize:'0.875rem',color:'var(--muted)'}}>
                <span style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(91,78,232,0.1)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--primary)',flexShrink:0,fontWeight:600}}>3</span>
                Deploy as a REST API in one click
              </div>
            </div>
          </div>
          <div className="fade-up stagger-2">
            <div className="chat-window" id="chatWindow">
              <div className="chat-header">
                <div className="chat-header-avatar">
                  <img src={smallLogo} alt="Kastik" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <div>
                  <div className="chat-header-name">Kastik Assistant</div>
                  <div className="chat-header-status">
                    <span style={{width:'7px',height:'7px',borderRadius:'50%',background:'#16A34A',display:'block'}}></span>
                    Online &middot; Typically replies instantly
                  </div>
                </div>
              </div>
              <div className="chat-body" ref={bodyRef}>
                {visibleMessages.map((msg, i) => (
                  <div key={i} className={`msg ${msg.role}`}>
                    <div className="msg-bubble">{msg.text}</div>
                    <div className="msg-meta">{msg.time}{msg.role === 'customer' ? ' \u00B7 Seen' : ''}</div>
                  </div>
                ))}
                {isTyping && (
                  <div className="msg agent">
                    <div className="msg-typing">
                      <div className="typing-dots"><span></span><span></span><span></span></div>
                      <span className="msg-typing-text">Kastik is typing...</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="chat-footer">
                <input className="chat-input" type="text" placeholder="Type a message..." readOnly />
                <button className="chat-send">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
