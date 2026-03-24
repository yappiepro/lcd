<template>
  <div v-if="!isMobile()">
    <div class="custom-cursor" ref="cursor"></div>
    <div class="custom-cursor-dot" ref="cursorDot"></div>
  </div>
</template>

<script setup>
const cursor = ref(null)
const cursorDot = ref(null)

// Check if device is mobile (available at component level for template)
const isMobile = ref(false)

let mouseX = 0, mouseY = 0
let cursorX = 0, cursorY = 0
let dotX = 0, dotY = 0

let animationFrameId = null

onMounted(() => {
  // Check if mobile
  isMobile.value = window.innerWidth <= 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0

  // Don't initialize on mobile
  if (isMobile.value) {
    return
  }

  // Track mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  // Animation loop
  const animate = () => {
    // Smooth cursor follow
    cursorX += (mouseX - cursorX) * 0.15
    cursorY += (mouseY - cursorY) * 0.15

    dotX = mouseX
    dotY = mouseY

    if (cursor.value) {
      cursor.value.style.left = cursorX + 'px'
      cursor.value.style.top = cursorY + 'px'
    }

    if (cursorDot.value) {
      cursorDot.value.style.left = dotX + 'px'
      cursorDot.value.style.top = dotY + 'px'
    }

    animationFrameId = requestAnimationFrame(animate)
  }
  animate()

  // Magnetic effect for buttons and links
  const magneticBtns = document.querySelectorAll('a, button, .magnetic-btn')

  magneticBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      if (cursor.value) {
        cursor.value.classList.add('hovered')
      }
    })

    btn.addEventListener('mouseleave', () => {
      if (cursor.value) {
        cursor.value.classList.remove('hovered')
        cursor.value.style.transform = 'translate(-50%, -50%)'
      }
    })

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY

      if (cursor.value) {
        cursor.value.style.transform = `translate(calc(-50% + ${deltaX * 0.3}px), calc(-50% + ${deltaY * 0.3}px))`
      }
    })
  })

  // Ripple effect on click
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('span')
    ripple.classList.add('ripple')
    ripple.style.left = e.clientX + 'px'
    ripple.style.top = e.clientY + 'px'
    ripple.style.width = '20px'
    ripple.style.height = '20px'
    document.body.appendChild(ripple)

    setTimeout(() => ripple.remove(), 600)
  })
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
/* Cursor styles are in animations.css */
</style>
