const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

function carPassing(cars,speed){
  const newObj = {
    speed: speed,
    time: Date.now
  }
  cars.push(newObj)
  return cars
}

carPassing(cars, speed)
console.log(cars)