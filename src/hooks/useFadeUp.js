import { useEffect } from 'react'

export default function useFadeUp(containerRef) {
  useEffect(() => {
    const container = containerRef?.current || document;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    
    const elements = container.querySelectorAll('.fade-up')
    elements.forEach(el => observer.observe(el))
    
    return () => observer.disconnect()
  }, [containerRef])
}
