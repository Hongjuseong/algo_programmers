function solution(lottos, win_nums) {
    const answer = [];
    let min = 0;
    let max = 0;

    const rank = [6, 6, 5, 4, 3, 2, 1];

    for (let i = 0; i < lottos.length; i++) {
        const number = lottos[i];
        const index = win_nums.indexOf(number);

        if (index >= 0) {
            min++; // 최저 순위
        }

        if (number === 0) {
            max++; 
        }
    }

    max += min; // 최고 순위

    answer.push(rank[max], rank[min]);

    return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));