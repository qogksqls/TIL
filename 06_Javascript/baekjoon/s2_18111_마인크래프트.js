const input = require('fs').readFileSync('input.txt').toString().trim().split("\n")

const [N, M, B] = input[0].split(" ").map(Number)
let matrix = []
input.slice(1, N+1).forEach((item) => matrix.push(item.split(" ").map(Number)))
matrix = matrix.flat()

const maxHeight = Math.max(...matrix)
const minHeight = Math.min(...matrix)
let minTime = Number.MAX_VALUE
let h = maxHeight

for (let i = maxHeight; i >= minHeight; i--) {
  let breakBlock = 0
  let fillBlock = 0
  let time = 0

  for (let j = 0; j < matrix.length; j++) {
    const diff = matrix[j] - i
    diff > 0 ? (breakBlock += diff) : (fillBlock += diff * -1)
  }
  
  if (B + breakBlock < fillBlock) {
    continue;
  }

  time = breakBlock * 2 + fillBlock;
  if (time < minTime) {
    minTime = time;
    h = i;
  }
}
console.log(minTime, h)
