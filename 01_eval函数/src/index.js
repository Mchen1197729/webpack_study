import './style/index.Less'

function sum(x) {
  return function (y) {
    return x + y
  }
}

console.log(sum(10)(20))
