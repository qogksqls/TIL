let input = require('fs').readFileSync('input.txt').toString().split('\n');
let count = Number(input[0]);
let answerStr = 0;

let num = input[1].split(" ")
let max_num = Math.max(...num)

for(let i = 0; i < count; i++){
    let x = num[i]
    x = Number(x / max_num * 100)
    answerStr += x
}

console.log(answerStr / count)
