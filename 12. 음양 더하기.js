function solution(absolutes, signs) {
    const combination = absolutes.map((val, idx) => signs[idx] ? 1 * val : -1 * val);
    return combination.reduce((prev, curr) => prev + curr);
}

console.log(solution([4,7,12], [true,false,true]));
console.log(solution([1,2,3], [false,false,true]));