/**
 *  1. 联合类型
 */
type num = 1 | 2

let num1: num = 1

type eventName = 'click' | 'move' | 'double'

let event1: eventName = 'double'

function unionFunc(name: string | undefined) {}

/**
 *  2. 可辨识类型
 */

enum CarTransmission {
  Automatic = 200,
  Manual = 300,
}

interface Motorcycle {
  vType: 'motorcycle'
  make: Number
}

interface Car {
  vType: 'car'
  transmission: CarTransmission
}

interface Truck {
  vType: 'truck' // discriminant
  capacity: number // in tons
}

type Vehicle = Motorcycle | Car | Truck

const EVALUATION_FACTOR = Math.PI

function evaluatePrice(vehicle: Vehicle) {
  switch (vehicle.vType) {
    case 'truck':
      return vehicle.capacity * EVALUATION_FACTOR
  }
}

const myTruck: Truck = { vType: 'truck', capacity: 9.5 }
evaluatePrice(myTruck)
