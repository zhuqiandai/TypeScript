class Gretter {
  static cname = 'Gretter'

  private fullname = 'zhuqd'
  #privateField = 123

  gretting: string

  constructor(message: string) {
    this.gretting = message
    console.log(this.#privateField)
  }

  // 静态方法
  static getClassName() {
    return 'Class name is Greeter'
  }

  get getFullName() {
    return this.fullname
  }

  set setFullName(newName: string) {
    this.fullname = newName
  }

  // 成员方法
  greet() {
    return 'Hello, ' + this.gretting
  }
}

const gret = new Gretter('123')
gret.greet()
