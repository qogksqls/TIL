const input = require('fs').readFileSync('input.txt').toString().split("\n")

function solution() {
  let q = []
  let answer = []
  for (let i = 1; i <= input[0]; i++) {
    if (input[i].slice(0, 3) === 'pus') {
      q.push(input[i].slice(5, input[i].length))
    } else if (input[i].slice(0, 3) === 'pop') {
      if (q[0] !== undefined) {
        answer.push(q[0])
        q.shift()
      } else {
        answer.push(-1)
      }
    } else if (input[i].slice(0, 3) === 'siz') {
      answer.push(q.length)
    } else if (input[i].slice(0, 3) === 'emp') {
      if (q[0] !== undefined) {
        answer.push(0)
      } else {
        answer.push(1)
      }
    } else if (input[i].slice(0, 3) === 'fro') {
      if (q[0] !== undefined) {
        answer.push(q[0])
      } else {
        answer.push(-1)
      }
    } else if (input[i].slice(0, 3) === 'bac') {
      if (q[0] !== undefined) {
        answer.push(q[q.length - 1])
      } else {
        answer.push(-1)
      }
    }
  }
  return answer
}
console.log(solution().join("\n"))