function solution(w, h) {
    const origin = w * h;
    const min = Math.min(w, h);
    const max = Math.max(w, h);

    // 최대공약수
    // 유클리드 호제법 이용
    const gcd = (a, b) => {
        return a % b === 0 ? b : gcd(b, a % b)
    };

    const divider = (w + h) - gcd(max, min);

    return origin - divider;
}

// 유클리드 호제법의 원리입니다.

// 2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b)
// a와 b의 최대공약수는 b와 r의 최대공약수와 같습니다.
// 이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고,
// 다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수입니다.
// 최소공배수는 두 수를 곱한 후에 최대공약수로 나누면 나옵니다.

console.log(solution(8, 12));