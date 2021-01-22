function identity<T>(params: T): T {
  return params
}

const genericFunc = <T>(params: T): T => {
  return params
}

genericFunc('123')

/**
 *   泛型接口
 */

interface GenericIdentityFn<T> {
  (arg: T): T
}

/**
 *  泛型类
 */

class GenericNumber<T> {
  zeroValue: T
}
