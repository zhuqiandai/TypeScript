type Foo = string | number | boolean

/**
 *
 * 这时候 else 分支的 foo 类型会被收窄为 boolean 类型，
 * 导致无法赋值给 never 类型，这时就会产生一个编译错误
 */

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === 'string') {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === 'number') {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo
  }
}

/**
 *  结论： 使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码
 */
