import { useState } from 'react'

const faqData = [
  {
    question: 'Is Kastik a chatbot?',
    answer: 'No. Kastik is an AI Customer Agent - a fundamentally different class of product. Traditional chatbots follow rigid decision trees and fail the moment a customer asks something unexpected. Kastik uses large language models to understand natural conversation, remember context across a session, and generate intelligent responses that feel genuinely human.'
  },
  {
    question: 'Can Kastik learn our company data?',
    answer: 'Yes, absolutely. During onboarding you connect Kastik to your knowledge sources - documents, PDFs, URLs, FAQs, help center articles, and product pages. Kastik indexes this content and uses it to answer customer questions accurately. You can update the knowledge base at any time, and changes take effect within minutes.'
  },
  {
    question: 'Which platforms and channels are supported?',
    answer: 'Kastik currently supports WhatsApp Business, website chat widgets, Instagram Direct Messages, Gmail, Slack, Telegram, and Microsoft Teams. We also offer API access for custom integrations.'
  },
  {
    question: 'Is customer data secure and private?',
    answer: 'Security is foundational at Kastik. All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We are SOC 2 Type II certified and GDPR compliant. Conversation data is never used to train AI models for other customers - your data belongs entirely to you.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-header fade-up">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list fade-up stagger-1">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item${openIndex === index ? ' open' : ''}`}
            >
              <div className="faq-q" onClick={() => toggle(index)}>
                <span className="faq-q-text">{item.question}</span>
                <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
