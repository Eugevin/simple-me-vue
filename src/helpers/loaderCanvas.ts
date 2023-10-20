class Bubble {
  #canvas: HTMLCanvasElement
  #ctx: CanvasRenderingContext2D
  #x: number
  #y: number
  #gradient: CanvasGradient
  #radius: number
  #alpha: number
  #vx: number
  #vy: number

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, x?: number, y?: number) {
    this.#canvas = canvas
    this.#ctx = ctx
    this.#radius = 5 + Math.random() * 10
    this.#x = x ? x : this.#radius + Math.random() * (this.#canvas.width - this.#radius * 2)
    this.#y = y ? y : this.#radius + Math.random() * (this.#canvas.height - this.#radius * 2)
    this.#gradient = this.#ctx.createLinearGradient(0, 0, this.#canvas.width, this.#canvas.height)
    this.#vx = Math.round(Math.random()) === 1 ? Math.random() * 1 : Math.random() * -1
    this.#vy = Math.round(Math.random()) === 1 ? Math.random() * 1 : Math.random() * -1

    this.#gradient.addColorStop(0, '#833ab4')
    this.#gradient.addColorStop(0.5, '#fd1d1d')
    this.#gradient.addColorStop(1, '#fcb045')

    this.#alpha = 0

    this.#ctx.fillStyle = this.#gradient
  }

  draw() {
    if (this.#alpha < 1) {
      this.#alpha = +(this.#alpha + 0.1).toFixed(1)
    }

    this.#ctx.globalAlpha = this.#alpha
    this.#ctx.beginPath()
    this.#ctx.arc(this.#x, this.#y, this.#radius, 0, Math.PI * 2)
    this.#ctx.fillStyle = this.#gradient
    this.#ctx.fill()
  }

  move() {
    this.#x += this.#vx

    if (this.#x > this.#canvas.width - this.#radius || this.#x < this.#radius) {
      this.#vx *= -1
    }

    this.#y += this.#vy

    if (this.#y > this.#canvas.height - this.#radius || this.#y < this.#radius) {
      this.#vy *= -1
    }
  }
}

class CanvasBg {
  #canvas: HTMLCanvasElement
  #ctx: CanvasRenderingContext2D
  #bubbles: Array<Bubble> = []
  #totalBubbles: number = 10
  #mousePressed: boolean = false
  #animationFrame: number = 0

  constructor(canvas: HTMLCanvasElement) {
    this.#canvas = canvas as HTMLCanvasElement
    this.#ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  }

  init() {
    this.#handleSize()
    this.#handleClick()
    this.#createBubbles()
    this.#drawLoop()
  }

  stop() {
    cancelAnimationFrame(this.#animationFrame)
  }

  #handleBubbles() {
    this.#bubbles.forEach(bubble => {
      bubble.draw()
      bubble.move()
    })
  }

  #createBubbles(x?: number, y?: number) {
    if (x && y) {
      this.#bubbles.push(new Bubble(this.#canvas, this.#ctx, x, y))
      return
    }

    for (let i = 0; i < this.#totalBubbles; i++) {
      this.#bubbles.push(new Bubble(this.#canvas, this.#ctx))
    }
  }

  #drawLoop() {
    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height)

    this.#handleBubbles()

    this.#animationFrame = requestAnimationFrame(this.#drawLoop.bind(this))
  }

  #handleSize() {
    this.#canvas.width = window.innerWidth
    this.#canvas.height = window.innerHeight

    window.addEventListener('resize', () => {
      this.#canvas.width = window.innerWidth
      this.#canvas.height = window.innerHeight
    })
  }

  #handleClick() {
    this.#canvas.addEventListener('mousedown', e => {
      this.#mousePressed = true
      this.#createBubbles(e.x, e.y)
    })

    this.#canvas.addEventListener('touchstart', e => {
      this.#mousePressed = true
      this.#createBubbles(e.touches[0].clientX, e.touches[0].clientY)
    })

    this.#canvas.addEventListener('mousemove', e => {
      if (this.#mousePressed) this.#createBubbles(e.x, e.y)
    })

    this.#canvas.addEventListener('touchmove', e => {
      if (this.#mousePressed) this.#createBubbles(e.touches[0].clientX, e.touches[0].clientY)
    })

    this.#canvas.addEventListener('mouseup', () => {
      this.#mousePressed = false
    })

    this.#canvas.addEventListener('touchend', () => {
      this.#mousePressed = false
    })
  }
}

export { CanvasBg }
