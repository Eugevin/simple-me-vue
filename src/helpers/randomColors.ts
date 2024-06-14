const randomColorStep = () => Math.floor(Math.random() * 9) + 1

function randomColors(linear: boolean = false): Array<string> {
  const targetColorArr = []

  for (let i = 0; i < 3; i++) {
    targetColorArr.push(randomColorStep())
  }

  const targetColor = `#${targetColorArr.join('')}`

  return linear ? [targetColor, `#${Number(targetColorArr.join('')) - 5}`] : [targetColor]
}

export default randomColors