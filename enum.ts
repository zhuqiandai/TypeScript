/**
 *  1. 数字枚举
 *  从 0 开始
 */

enum Num {
  One = 3,
  Two,
  Three,
  Four,
}

console.log(Num.One) // 3
console.log(Num.Two) // 4

/**
 *  2. 字符串枚举
 */

enum StringEnum {
  One = '123',
  Two = '456',
}

console.log(StringEnum.One)

/**
 *  3. 常量枚举
 *  不会编译成任何JS代码
 */

const enum Constant {
  One = '123',
  Two = '456',
}
