function createAnalytics() {
  let counter = 0
  let isDestroyed = false

  const onClick = () => counter++

  document.addEventListener('click', onClick)

  return {
    destroy() {
      document.removeEventListener('click', onClick)
      isDestroyed = true
    },
    getCount() {
      return isDestroyed ? 'Analytics is destroyed' : counter
    }
  }
}

window.analytics = createAnalytics()
