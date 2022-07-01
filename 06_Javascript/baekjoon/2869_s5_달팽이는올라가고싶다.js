const input = require('fs').readFileSync('input.txt').toString().split(" ")

const A = Number(input[0])
const B = Number(input[1])
const V = Number(input[2])

let day = parseInt((V - A) / (A - B))
if ((day * (A - B)) + A >= V) {
  console.log(day + 1)
} else {
  console.log(day + 2)
}