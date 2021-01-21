/**
 *  1. 类型断言
 */
let somevalue: any = '123'
let result: number = (<string>somevalue).length
let result1: number = (somevalue as string).length

/**
 *  2. 非空断言
 * 具体而言，x! 将从 x 值域中排除 null 和 undefined 。
 */
function myfunc(maybeString: string | undefined | null) {
  const onlyString: string = maybeString
  const ignoreString: string = maybeString!
}
