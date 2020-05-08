function solution(N) {
	let A = N.toString(2)
	let B = A.split('1').filter(a => a.length >= 1)
	B.sort((a, b) => b.length - a.length)
	
	return B[0].length > 1 ? B[0].length : 0
}

console.log(solution(0))