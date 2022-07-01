const input = require('fs').readFileSync('input.txt').toString().split('\n');
let answerStr = 0;
input[0] = input[0].trim()
const arr =[...input[0]]


for(let i = 0; i < arr.length; i++){
    let x = arr[i]
    if (x === ' ') {
        answerStr += 1
    }
}
if (arr.length === 0) {
    console.log(0)
} else {
    console.log(answerStr + 1)
}
