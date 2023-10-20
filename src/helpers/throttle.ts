function throttle(fn: () => void, delay: number) {
  let timer = false

  return () => {
    if (timer) return

    fn()
    timer = true

    setTimeout(() => {
      timer = false
    }, delay)
  }
}

export default throttle