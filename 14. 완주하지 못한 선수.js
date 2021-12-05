function solution(participant, completion) {
    let answer = '';
    const sortParticipant = [...participant];
    const sortCompletion = [...completion];

    sortParticipant.sort();
    sortCompletion.sort();

    for (let i = 0; i < sortParticipant.length; i++) {
        const target = sortParticipant[i];
        if (target !== sortCompletion[i]) return sortParticipant[i]; 
    }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola']));
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']));