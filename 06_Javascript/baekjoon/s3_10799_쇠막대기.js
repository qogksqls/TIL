const input = require('fs').readFileSync('input.txt').toString().split("\n")

function solution() {
  const array = input[0]
  let ans = 0
  let bar = []
  let i = 0
  while (i < array.length) {
    const now = array[i];
    let next = ''
    if (i < array.length - 1){
      next = array[i+1]
    }
    if (now === '(') {
      bar.push(now)
      if (next === ')') {
        bar.pop()
        i++
        ans += bar.length  // 조각 계산
      }
    } else {
      bar.pop()
      ans += 1
    }
    i++
  }
  return ans
}
console.log(solution())