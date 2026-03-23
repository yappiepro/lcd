import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  const initScrollAnimations = () => {
    // Animate elements on scroll
    const elements = document.querySelectorAll('.animate-on-scroll')
    
    elements.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          el.classList.add('animated')
        }
      })
    })

    // Stagger animation for grid items
    const grids = document.querySelectorAll('.stagger-grid')
    grids.forEach((grid) => {
      const children = grid.children
      
      gsap.fromTo(children, 
        { 
          opacity: 0, 
          y: 60 
        },
        {
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        }
      )
    })
  }

  return { initScrollAnimations }
}

export function useTextReveal() {
  const initTextReveal = () => {
    const headings = document.querySelectorAll('.text-reveal-target')
    
    headings.forEach((heading) => {
      const text = heading.textContent
      heading.innerHTML = ''
      
      text.split('').forEach((char) => {
        const span = document.createElement('span')
        span.textContent = char === ' ' ? '\u00A0' : char
        span.classList.add('char')
        heading.appendChild(span)
      })

      ScrollTrigger.create({
        trigger: heading,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          heading.classList.add('animated')
          const chars = heading.querySelectorAll('.char')
          chars.forEach((char, i) => {
            setTimeout(() => {
              char.style.opacity = '1'
              char.style.transform = 'translateY(0)'
            }, i * 30)
          })
        }
      })
    })
  }

  return { initTextReveal }
}

export function useCounterAnimation() {
  const animateCounter = (element, end, duration = 2000) => {
    let start = 0
    const increment = end / (duration / 16)
    
    const updateCounter = () => {
      start += increment
      if (start < end) {
        element.textContent = Math.floor(start)
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = end
      }
    }
    
    updateCounter()
  }

  const initCounters = () => {
    const counters = document.querySelectorAll('.counter-animate')
    
    counters.forEach((counter) => {
      const endValue = parseInt(counter.getAttribute('data-end'))
      
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          animateCounter(counter, endValue)
        }
      })
    })
  }

  return { initCounters }
}

export function useParallax() {
  const initParallax = () => {
    const parallaxElements = document.querySelectorAll('.parallax-element')
    
    parallaxElements.forEach((el) => {
      const speed = el.getAttribute('data-speed') || 0.5
      
      gsap.to(el, {
        y: (i, target) => ScrollTrigger.maxScroll(window) * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0
        }
      })
    })
  }

  return { initParallax }
}

export function useTiltEffect() {
  const initTilt = () => {
    const tiltElements = document.querySelectorAll('.tilt-card')
    
    tiltElements.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      })

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
      })
    })
  }

  return { initTilt }
}
