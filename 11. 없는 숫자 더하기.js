function solution(numbers) {
    const max = [];
    const reducer = (prev, curr) => prev + curr;

    // 초기 1 ~ 9의 합
    for (let i = 1; i < 10; i++) {
        max.push(i);
    }

    const maxNumber = max.reduce(reducer, 0);
    const currNumber = numbers.reduce(reducer, 0);

    return maxNumber - currNumber;    
}

console.log(solution([1,2,3,4,6,7,8,0]));
console.log(solution([5,8,4,0,6,7,9]));