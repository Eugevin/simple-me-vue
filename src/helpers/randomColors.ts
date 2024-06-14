const randomColorStep = () => Math.floor(Math.random() * 10)

function randomColors(linear: boolean = false): Array<string> {
  const targetColorArr = []

  for (let i = 0; i < 3; i++) {
    targetColorArr.push(randomColorStep())
  }

  const targetColor = `#${targetColorArr.join('')}`

  console.log()

  return linear ? [targetColor, `#${Number(targetColorArr.join('')) - 5}`] : [targetColor]
}

export default randomColors