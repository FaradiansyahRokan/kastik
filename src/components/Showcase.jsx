import { useState, useEffect } from 'react'

const projects = [
  {
    name: 'FolioML',
    subtitle: 'AI-Powered Knowledge Intelligence Platform',
    description: 'FolioML transforms how professionals research and extract insights from complex documents. Built on a Retrieval-Augmented Generation (RAG) architecture, it grounds every answer in your private knowledge base — ensuring accuracy and trustworthiness.',
    highlights: [
      'Upload PDF, DOCX, CSV — AI extracts and indexes instantly',
      '8 specialized AI Agents for multi-dimensional analysis',
      'Hybrid Retrieval Engine combines semantic search + BM25',
      'Persistent cloud-synced Notebooks accessible anywhere',
    ],
    tags: ['RAG', 'Multi-Agent AI', 'Semantic Search', 'Knowledge Base'],
    color: '#8B5CF6',
    images: [
      { src: '/showcase/folioml-3.png', label: 'Multi-Agent Studio' },
      { src: '/showcase/folioml-1.png', label: 'Dashboard Overview' },
      { src: '/showcase/folioml-2.png', label: 'RAG Chat Interface' }
    ],
    stats: [
      { label: 'Active Users', value: '2.4K+', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
      { label: 'Accuracy', value: '98.4%', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
      { label: 'AI Agents', value: '8', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg> },
      { label: 'Response', value: '< 2s', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
    ],
    techStack: ['Google Gemini', 'Vector DB', 'Next.js', 'Clerk Auth']
  },
  {
    name: 'SalesSetter',
    subtitle: 'AI Sales Automation for WhatsApp',
    description: 'SalesSetter deploys autonomous AI sales agents on WhatsApp that operate around the clock — understanding intent, qualifying prospects, and handing over high-value leads to human closers when it matters most.',
    highlights: [
      'Autonomous AI handles complex multi-turn conversations',
      'Dynamic lead scoring (Cold → Warm → Hot) based on intent',
      'Seamless human handover with real-time alerts',
      'Dashboard with pipeline tracking and conversion analytics',
    ],
    tags: ['WhatsApp API', 'Lead Scoring', 'Sales AI', 'Analytics'],
    color: '#A855F7',
    images: [
      { src: '/showcase/setter-1.png', label: 'Analytics Dashboard' },
      { src: '/showcase/setter-2.png', label: 'Leads Management' },
      { src: '/showcase/setter-3.png', label: 'Conversations View' }
    ],
    stats: [
      { label: 'Pipeline Value', value: '$1.2M', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
      { label: 'Conversion', value: '34%', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
      { label: 'Response', value: '0.8s', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
      { label: 'Leads/mo', value: '500+', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
    ],
    techStack: ['LLM Engine', 'Evolution API', 'Vector DB', 'React']
  }
]

export default function Showcase() {
  const [lightboxImg, setLightboxImg] = useState(null)

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxImg])

  return (
    <section id="showcase">
      <div className="container">
        <div className="showcase-header fade-up">
          <div className="section-label" style={{ color: 'var(--primary2)', letterSpacing: '0.1em' }}>OUR WORK</div>
          <h2 className="section-title">Projects We've <span className="text-gradient-premium">Built</span></h2>
          <p className="section-sub">Real AI-powered products we've designed and deployed for modern businesses.</p>
        </div>

        <div className="showcase-projects">
          {projects.map((project, index) => (
            <div key={project.name} className="showcase-bento fade-up">
              {/* Left Side: Content & Stats */}
              <div className="sb-content">
                <div className="sb-badge">Case Study</div>
                <h3 className="sb-title">{project.name}</h3>
                <p className="sb-subtitle">{project.subtitle}</p>
                <p className="sb-desc">{project.description}</p>
                
                <div className="sb-stats-grid">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="sb-stat">
                      <div className="sb-stat-val">{stat.value}</div>
                      <div className="sb-stat-lbl">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="sb-features">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="sb-feature">
                      <span className="sb-check">✓</span> <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Gallery Bento */}
              <div className="sb-gallery">
                <div className="sb-gallery-main" onClick={() => setLightboxImg(project.images[0].src)}>
                  <img src={project.images[0].src} alt={project.images[0].label} />
                  <div className="sb-img-overlay"><span className="sb-img-label">🔍 {project.images[0].label}</span></div>
                </div>
                <div className="sb-gallery-sub">
                  {project.images.slice(1).map((img, i) => (
                    <div key={i} className="sb-gallery-item" onClick={() => setLightboxImg(img.src)}>
                      <img src={img.src} alt={img.label} />
                      <div className="sb-img-overlay"><span className="sb-img-label">🔍 {img.label}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>×</button>
          <img src={lightboxImg} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
