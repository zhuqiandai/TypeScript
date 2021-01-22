/**
 *  类的继承
 */

class Animal {
  name: string

  constructor(theName: string) {
    this.name = theName
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name) // 调用父类的构造函数
  }

  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}

const snake = new Snake('sisisi')
snake.move()
console.log(snake.name)

/**
 *  抽象类 abstract
 */

abstract class name {
  private hahah = ''

  constructor(parameters) {
    this.hahah = parameters
  }

  abstract say()
}
