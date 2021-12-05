function solution(n) {
    // 3진법
    const remainValue = [4, 1, 2];
    let answer = '';

    while(n) {
        const remainder = n % 3;
        const quotient = Math.floor(n / 3);
        answer = `${remainValue[remainder]}${answer}`;
        
        if (remainder === 0) {
            n = quotient - 1;
        } else {
            n = quotient;
        }
    }
    
    return answer;
}

console.log(solution(6));
console.log(solution(7));
console.log(solution(10));