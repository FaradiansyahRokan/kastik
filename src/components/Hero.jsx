import { useState, useEffect } from 'react'

export default function Hero() {
  const [lines, setLines] = useState([])
  const [currentLineStr, setCurrentLineStr] = useState('')
  const [isThinking, setIsThinking] = useState(false)

  useEffect(() => {
    const sequence = [
      { 
        text: "Deploy an autonomous sales agent trained on our Q3 data.", 
        delay: 1500,
        aiText: "Done. The agent is now live and analyzing 14.2M records.",
        cardTitle: "Sales Agent",
        cardStatus: "Live",
        cardMetric1: "Latency: 12ms",
        cardMetric2: "Inference: Edge-optimized"
      },
      { 
        text: "Analyze support tickets and generate a RAG knowledge base.", 
        delay: 2000,
        aiText: "Knowledge base generated. Indexed 4,592 support tickets.",
        cardTitle: "Vector DB",
        cardStatus: "Synced",
        cardMetric1: "Embeddings: text-embedding-3",
        cardMetric2: "Accuracy: 98.4%"
      },
      { 
        text: "Set up a churn prediction model for the Enterprise tier.", 
        delay: 1800,
        aiText: "Model deployed. Currently monitoring 850 enterprise accounts.",
        cardTitle: "Predictive AI",
        cardStatus: "Active",
        cardMetric1: "Update: Real-time",
        cardMetric2: "Confidence: 94%"
      }
    ]

    let isMounted = true
    let seqIndex = 0

    const runChat = async () => {
      while (isMounted) {
        // Clear chat for next scenario
        setLines([])
        setCurrentLineStr('')
        await new Promise(r => setTimeout(r, 800))

        const currentSeq = sequence[seqIndex]
        const targetText = currentSeq.text
        
        // 1. Type the prompt
        for (let i = 0; i <= targetText.length; i++) {
          if (!isMounted) break
          setCurrentLineStr(targetText.substring(0, i))
          await new Promise(r => setTimeout(r, 20 + Math.random() * 25))
        }

        if (!isMounted) break
        await new Promise(r => setTimeout(r, 400))

        // 2. Submit prompt
        setCurrentLineStr('')
        setLines([{ role: 'user', text: targetText }])
        
        // 3. AI Thinking
        setIsThinking(true)
        await new Promise(r => setTimeout(r, 1000 + Math.random() * 500))
        setIsThinking(false)

        // 4. AI Response
        if (!isMounted) break
        setLines(prev => [
          ...prev, 
          { 
            role: 'ai', 
            text: currentSeq.aiText,
            component: (
              <div className="chat-mini-card">
                <div className="mini-card-header">
                  <span>{currentSeq.cardTitle}</span>
                  <span className="live-dot">{currentSeq.cardStatus}</span>
                </div>
                <div className="mini-card-body">
                  <div>{currentSeq.cardMetric1}</div>
                  <div>{currentSeq.cardMetric2}</div>
                </div>
              </div>
            )
          }
        ])

        // Wait before next loop
        await new Promise(r => setTimeout(r, currentSeq.delay + 2500))
        
        seqIndex = (seqIndex + 1) % sequence.length
      }
    }

    runChat()
    return () => { isMounted = false }
  }, [])

  return (
    <section id="hero" className="hero-premium">
      {/* Aurora Background Elements */}
      <div className="hero-aurora a-1"></div>
      <div className="hero-aurora a-2"></div>
      <div className="hero-aurora a-3"></div>

      <div className="container relative-z">
        <div className="hero-content fade-up">
          <div className="premium-eyebrow">
            <span className="star-icon">★</span> 5.0 over 500+ Enterprise Clients
          </div>
          
          <h1 className="hero-h1 premium-h1">
            Build next-generation AI and autonomous systems on the <span className="text-gradient-premium">Kastik platform.</span>
          </h1>
          
          <p className="hero-sub premium-sub">
            Design, deploy, and scale enterprise-grade Machine Learning models, autonomous agents, and predictive AI solutions — built for companies that demand intelligent infrastructure.
          </p>
          
          <div className="hero-cta-wrapper fade-up stagger-1">
            <div className="premium-input-group">
              <input type="email" placeholder="Enter your email address..." className="premium-input" />
              <button className="premium-btn">
                <span className="btn-glow"></span>
                Get started free
              </button>
            </div>
            <p className="hero-micro">Don't want to wait? <a href="#" className="premium-link">Try the early AI Beta today.</a></p>
          </div>
        </div>

        <div className="hero-visual fade-up stagger-2">
          {/* Simple & Hooky AI Chat Prompt Simulation */}
          <div className="hero-prompt-ui">
            <div className="prompt-messages">
              {lines.map((msg, i) => (
                <div key={i} className={`msg-bubble ${msg.role} fade-in-up`}>
                  {msg.role === 'ai' && <div className="msg-avatar">K</div>}
                  <div className="msg-content">
                    {msg.text}
                    {msg.component && (
                      <div className="msg-component">
                        {msg.component}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isThinking && (
                <div className="msg-bubble ai fade-in-up">
                  <div className="msg-avatar">K</div>
                  <div className="msg-content thinking">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="prompt-input-bar">
              <span className="prompt-placeholder">{currentLineStr}<span className="prompt-cursor"></span></span>
              <div className="prompt-send"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
