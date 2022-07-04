const input = require('fs').readFileSync('input.txt').toString()

let arr = []
let num = 666
while (arr.length <= Number(input) - 1) {
  let temp = String(num)
  for (let i = 0; i < temp.length - 2; i++) {
    if (temp[i] == '6' && temp[i+1] == '6' && temp[i+2] == '6') {
      arr.push(temp)
      break
    }
  }
  num++
}
console.log(arr[arr.length-1])