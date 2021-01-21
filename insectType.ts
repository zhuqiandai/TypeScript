type PartialPointX = { x: number }
type Point = PartialPointX & { y: number }

let point: Point = {
  x: 1,
  y: 2,
}

/**
 *  同名基础类型
 */

interface X {
  c: string
  d: string
}

interface Y {
  c: number
  e: string
}

type Insect = X & Y
const result: Insect = {
  c: '1', // c 变成了 string & number = never
}

/**
 *  同名非基础类型
 */

interface D {
  d: boolean
}
interface E {
  e: string
}
interface F {
  f: number
}

interface A {
  x: D
}
interface B {
  x: E
}
interface C {
  x: F
}

type ABC = A & B & C

let abc: ABC = {
  x: {
    d: true,
    e: 'semlinker',
    f: 666,
  },
}
