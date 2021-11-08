function solution(s) {
    let answer;
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    if (s == +s) answer = s;
    else {
        for (let i = 0; i < numbers.length; i++) {
            const arr = s.split(numbers[i]);
            s = arr.join(i);
        }

        answer = s;
    }

    return +answer;
}

// replaceAll 쓰지말 것
// 런타임 에러 오류 남.. 즉 시간이 오래 걸린다는 것 또는 ES12+ 가 지원이 안 될 경우 에러 나는듯....

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));