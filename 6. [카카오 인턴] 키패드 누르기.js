function solution(numbers, hand) {
    const answer = [];

    //*, #
    let leftHand = 10;
    let rightHand = 12;

    //손가락 거리
    let leftDistance = 0;
    let rightDistance = 0;

    //2, 5, 8, 0
    const midNumber = [2, 5, 8, 11];

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if (!number) number = 11;
        if (number === 1 || number === 4 || number === 7) {
            answer.push('L');
            leftHand = number;
        } else if (number === 3 || number === 6 || number === 9) {
            answer.push('R');
            rightHand = number;
        } else {

            // midNumber를 기준으로 left는 -1, right는 +1에 버튼 위치해 있음
            leftDistance = midNumber.indexOf(leftHand) >= 0 ? Math.abs(number - leftHand) / 3 : Math.floor(Math.abs(number - 1 - leftHand) / 3) + 1;
            rightDistance = midNumber.indexOf(rightHand) >= 0 ? Math.abs(number - rightHand) / 3 : Math.floor(Math.abs(number + 1 - rightHand) / 3) + 1;

            if (leftDistance === rightDistance) {
                hand === 'right' ? answer.push('R') : answer.push('L');
                hand === 'right' ? rightHand = number : leftHand = number;
            } else if (leftDistance > rightDistance) {
                answer.push('R');
                rightHand = number;
            } else {
                answer.push('L');
                leftHand = number;
            }
        }

    }
    return answer.join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
