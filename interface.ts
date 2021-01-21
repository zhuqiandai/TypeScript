/**
 *  只读属性
 */
interface Person {
  count: ReadonlyArray<string>
}

const person: Person = {
  count: ['1', '2', 1],
}

person.count.push(1)

/**
 *  任意属性，索引签名
 */
interface Man {
  name: string
  age?: number
  [propName: string]: boolean
}

const man: Man = {
  name: '123',
  woman: true,
}

interface SetPoint {
  (x: number, y: number): void
}

const setPoint: SetPoint = (x, y) => {
  return x + y
}
