const input = require('fs').readFileSync('input.txt').toString().trim().split("\n")
const [N, M] = input[0].split(" ").map(Number)
let trees = input[1].split(" ").map(Number)
trees.sort(function (a, b) {
  return b - a
})

let [tree, c] = [0, 1]
let flag = 1
for (let i = 1; i < N; i++) {
  if (tree + (trees[i-1] - trees[i]) * c < M) {
    tree += (trees[i-1] - trees[i]) * c
    c++
  } else {
    if (tree < M) {
      let j = 0
      while (tree < M) {
        tree += c
        j++
      }
      flag = 0
      console.log(trees[i-1] - j)
      break
    }
  }
}
if (flag) {
  let k = 0
  while (tree < M) {
    tree += c
    k++
  }
  console.log(trees[trees.length-1] - k)
}