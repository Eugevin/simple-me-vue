function debounce(fn: () => void, delay: number) {
  let timer = setTimeout(() => {}, 200)

  return () => {
    clearTimeout(timer)

    timer = setTimeout(() => fn(), delay)
  }
}

export default debounce