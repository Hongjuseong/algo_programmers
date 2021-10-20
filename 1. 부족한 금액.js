function solution(price, money, count) {
    let answer = -1;

    for (let i = 1; i <= count; i++) {
        money -= price * i;
    }

    if (money > 0) {
        answer = 0;
    } else {
        answer = money * -1;    
    }

    return answer;
}