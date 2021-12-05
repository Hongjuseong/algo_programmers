function solution(answers) {
    const answer = [];
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const oneCorrect = check(one, answers);
    const twoCorrect = check(two, answers);
    const threeCorrect = check(three, answers);

    answer.push(oneCorrect);
    answer.push(twoCorrect);
    answer.push(threeCorrect);

    const maxCorrect = Math.max(...answer);
    const result = [];

    for (let i = 0; i < 3; i++) {
        if (maxCorrect === answer[i]) {
            result.push(i + 1);
        }
    }

    return result;
}

function check(person, answers) {
    let count = 0;

    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        const pAnswer = person[i % person.length];

        if (answer === pAnswer) count++;
    }

    return count;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));