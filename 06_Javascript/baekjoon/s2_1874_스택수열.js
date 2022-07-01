const input = require('fs').readFileSync('input.txt').toString().split("\n")

function solution() {
  let stack = []
  let ans = []
  let a = 1
  for (let i = 1; i <= input.length; i++) {
    const x = Number(input[i])
    if (
      stack[stack.length - 1] === undefined 
      || stack[stack.length - 1] < x
      ) {
        for (let j = a; j <= x; j++) {
          stack.push(a++)
          ans.push('+')
        }
    } else if (stack[stack.length - 1] > x) {
      return "NO"
    }
    if (x === stack[stack.length - 1]) {
      stack.pop()
      ans.push('-')
    }
  }
  return ans.join("\n")
}

console.log(solution())
