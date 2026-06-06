import { useState } from 'react'

const faqData = [
  {
    question: 'Is Kastik a chatbot or a platform?',
    answer: 'It is a platform. Kastik is an infrastructure layer for building various AI applications. Ready-made apps like SalesSetter or FolioML are just some of the applications built on top of Kastik — not the entirety of our product.'
  },
  {
    question: 'How is Kastik different from buying individual AI tools?',
    answer: 'When you buy single vertical tools, you pay repeatedly for each use case, and your data remains siloed. With Kastik, all your AI applications share one knowledge base, one observability dashboard, and one API key.'
  },
  {
    question: 'Do I need engineers to get started?',
    answer: 'No, not if you use our App Templates. They are ready to deploy out-of-the box. For custom applications via the Builder, you can either use our visual workflow builder or have your developers integrate our REST/GraphQL API.'
  },
  {
    question: 'How long does setup take?',
    answer: 'App Templates can be live in 48 hours. Custom applications via the Builder take longer depending on the complexity of your workflow.'
  },
  {
    question: 'Will the AI hallucinate and give false information?',
    answer: 'No. As long as you use our RAG pipeline, the AI answers strictly based on the documents you upload. If the information is not in the knowledge base, the AI is programmed to say it doesn\'t know, rather than making things up.'
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
