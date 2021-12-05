function solution(array, commands) {
    const answer = [];

    for (let i = 0; i < commands.length; i++) {
        const arr = commands[i];
        const part = array.slice(arr[0] - 1, arr[1]);

        part.sort((a, b) => a - b);

        answer.push(part[arr[2] - 1]);
    }

    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));