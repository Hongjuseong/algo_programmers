function solution(a, b) {
    const combination = a.map((val, idx) => val * b[idx]);
    return combination.reduce((prev, curr) => prev + curr);
}

function solution2(a, b) {
    let answer = 0;

    for (let i = 0; i < a.length; i++) {
        const aVal = a[i];
        const bVal = b[i];

        answer += aVal * bVal;
    }

    return answer;
}

console.log(solution([1,2,3,4], [-3,-1,0,2]));
console.log(solution2([1,2,3,4], [-3,-1,0,2]));
console.log(solution([-1,0,1], [1,0,-1]));
console.log(solution2([-1,0,1], [1,0,-1]));