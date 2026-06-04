import { useState, useEffect, useRef } from 'react'
import smallLogo from '../assets/logos.png'

const messages = [
  { role: 'customer', text: "Hi, I'd like to know more about your services.", time: '2:31 PM' },
  { role: 'agent', text: "Of course! I'm Kastik, your AI assistant. Could you tell me a little about your business?", time: '2:31 PM' },
  { role: 'customer', text: "We run an online store - mostly home decor.", time: '2:32 PM' },
  { role: 'agent', text: "Perfect. Our AI Customer Agent can automatically answer product inquiries, qualify leads, and support customers 24/7 - even while your team sleeps. Would you like to see how it could work for your store?", time: '2:32 PM' },
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
            <h2 className="section-title">See Kastik In Action</h2>
            <p className="section-sub" style={{maxWidth:'100%'}}>Watch how Kastik handles a real customer inquiry qualifying the lead and guiding them toward a booking without any human input.</p>
            <div style={{marginTop:'2rem',display:'flex',flexDirection:'column',gap:'0.875rem'}}>
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem',fontSize:'0.875rem',color:'var(--muted)'}}>
                <span style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(91,78,232,0.1)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--primary)',flexShrink:0,fontWeight:600}}>1</span>
                Kastik responds in under 1 second
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem',fontSize:'0.875rem',color:'var(--muted)'}}>
                <span style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(91,78,232,0.1)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--primary)',flexShrink:0,fontWeight:600}}>2</span>
                Automatically qualifies the customer
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem',fontSize:'0.875rem',color:'var(--muted)'}}>
                <span style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(91,78,232,0.1)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--primary)',flexShrink:0,fontWeight:600}}>3</span>
                Moves them toward booking no human needed
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
