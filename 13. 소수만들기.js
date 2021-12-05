function solution(arr) {
	let answer = 0;
	const n = arr.length;
    
    function isPrime(n) {
        if (n === 1) return false;
        for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    function DFS(depth, index, sum) {
        if (depth === 3) {
            if (isPrime(sum)) {
                answer++;
            }
        } else {
            for (let i = index; i < n; i++) {
                DFS(depth + 1, i + 1, sum + arr[i]);
            }
        }
    }

	DFS(0, 0, 0);	
	return answer;
}

console.log(solution([1,2,3,4]));
console.log(solution([1,2,7,6,4]));

