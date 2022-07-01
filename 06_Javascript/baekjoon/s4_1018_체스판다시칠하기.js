let input = require('fs').readFileSync('input.txt').toString().split("\n")
const NM = input[0].split(" ")
let myMin = NM[0] * NM[1]

function makeMatrix(r, c) {
	for (let i = r; i < r + 8; i ++) {
		let a = []
		for (let j = c; j < c + 8; j ++) {
			a[j-c] = input[i][j]
		}
		matrix[i-r] = a
	}
}

function findMin1() {
	let temp = 0
	const x = matrix[0][0]
	for (let i = 0; i < 8; i ++) {
		for (let j = 0; j < 8; j ++) {
			if (i % 2 === 0 && j % 2 === 0) {
				if (x !== matrix[i][j]) {
					temp += 1
				}
			} else if (i % 2 === 0 && j % 2 !== 0) {
				if (x === matrix[i][j]) {
					temp += 1
				}
			} else if (i % 2 !== 0 && j % 2 === 0) {
				if (x === matrix[i][j]) {
					temp += 1
				}
			} else {
				if (x !== matrix[i][j]) {
					temp += 1
				}
			}
		}
		if (temp >= myMin) {
			return temp
		}
	}
	return temp
}

function findMin2() {
	let temp = 0
	const x = matrix[0][0]
	for (let i = 0; i < 8; i ++) {
		for (let j = 0; j < 8; j ++) {
			if (i % 2 === 0 && j % 2 === 0) {
				if (x === matrix[i][j]) {
					temp += 1
				}
			} else if (i % 2 === 0 && j % 2 !== 0) {
				if (x !== matrix[i][j]) {
					temp += 1
				}
			} else if (i % 2 !== 0 && j % 2 === 0) {
				if (x !== matrix[i][j]) {
					temp += 1
				}
			} else {
				if (x === matrix[i][j]) {
					temp += 1
				}
			}
		}
		if (temp >= myMin) {
			return temp
		}
	}
	return temp
}

let matrix = []
for (let i = 1; i < NM[0] - 6; i ++) {
	for (let j = 0; j < NM[1] - 7; j ++) {
		makeMatrix(i, j)
		myMin = Math.min(myMin, findMin1())
		myMin = Math.min(myMin, findMin2())
	}
}
console.log(myMin)

