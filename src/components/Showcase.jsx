import { useState, useEffect } from 'react'

const projects = [
  {
    name: 'FolioML',
    subtitle: 'AI-Powered Knowledge Intelligence Platform',
    description: 'FolioML transforms how professionals research and extract insights from complex documents. Built on a Retrieval-Augmented Generation (RAG) architecture, it grounds every answer in your private knowledge base - ensuring accuracy and trustworthiness.',
    highlights: [
      'Upload PDF, DOCX, CSV - AI extracts and indexes instantly',
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
    description: 'SalesSetter deploys autonomous AI sales agents on WhatsApp that operate around the clock - understanding intent, qualifying prospects, and handing over high-value leads to human closers when it matters most.',
    highlights: [
      'Autonomous AI handles complex multi-turn conversations',
      'Dynamic lead scoring (Cold to Warm to Hot) based on intent',
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
  const [imageIndices, setImageIndices] = useState({
    FolioML: 0,
    SalesSetter: 0
  })
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

  const handlePrevImage = (projectName, projectImages) => {
    setImageIndices((prev) => {
      const idx = prev[projectName] || 0;
      return {
        ...prev,
        [projectName]: idx === 0 ? projectImages.length - 1 : idx - 1
      }
    })
  }

  const handleNextImage = (projectName, projectImages) => {
    setImageIndices((prev) => {
      const idx = prev[projectName] || 0;
      return {
        ...prev,
        [projectName]: idx === projectImages.length - 1 ? 0 : idx + 1
      }
    })
  }

  const handleDotClick = (projectName, imgIndex) => {
    setImageIndices((prev) => ({
      ...prev,
      [projectName]: imgIndex
    }))
  }

  return (
    <section id="showcase">
      <div className="container">
        <div className="showcase-header fade-up">
          <h2 className="section-title">AI apps, <span className="text-gradient-premium">ready to deploy</span></h2>
          <p className="section-sub">Not demos &mdash; production systems. Each includes a complete backend, live dashboard, and integrations.</p>
        </div>

        {/* Stacked Case Studies */}
        <div className="showcase-projects">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0
            const currentImageIndex = imageIndices[project.name] || 0

            return (
              <div 
                key={project.name} 
                className={`showcase-project-card fade-up ${isReverse ? 'reverse-layout' : ''}`}
              >
                <div className="showcase-bento">
                  {/* Left Side: Content */}
                  <div className="sb-content">
                    <div className="sb-badge">App Template</div>
                    <h3 className="sb-title">{project.name}</h3>
                    <p className="sb-subtitle">{project.subtitle}</p>
                    <p className="sb-desc">{project.description}</p>
                    
                    <div className="sb-tech-stack">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="sb-features">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="sb-feature">
                          <svg className="sb-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--primary)',flexShrink:0,marginTop:'2px'}}><polyline points="20 6 9 17 4 12"/></svg>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Image Gallery Carousel */}
                  <div className="sb-gallery-carousel-wrapper">
                    <button 
                      className="sb-carousel-nav-btn prev" 
                      onClick={() => handlePrevImage(project.name, project.images)} 
                      aria-label="Previous image"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>

                    <button 
                      className="sb-carousel-nav-btn next" 
                      onClick={() => handleNextImage(project.name, project.images)} 
                      aria-label="Next image"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>

                    <div 
                      className="sb-carousel-track"
                      style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                      {project.images.map((img, i) => (
                        <div 
                          key={i} 
                          className={`sb-carousel-slide ${currentImageIndex === i ? 'active' : ''}`}
                          onClick={() => setLightboxImg(img.src)}
                        >
                          <img src={img.src} alt={img.label} />
                          <div className="sb-img-overlay">
                            <span className="sb-img-label">{img.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="sb-carousel-dots">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          className={`sb-carousel-dot ${currentImageIndex === i ? 'active' : ''}`}
                          onClick={() => handleDotClick(project.name, i)}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom stats horizontal list */}
                <div className="sb-stats-horizontal">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="sb-stat-card">
                      <div className="sb-stat-icon-wrapper">
                        {stat.icon}
                      </div>
                      <div className="sb-stat-info">
                        <div className="sb-stat-val">{stat.value}</div>
                        <div className="sb-stat-lbl">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>&times;</button>
          <img src={lightboxImg} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
