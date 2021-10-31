function solution(n, wires) {
    const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    const visit = Array.from({length: n + 1}).fill(0);
    let count = 0;
    let answer = Number.MAX_SAFE_INTEGER;
    
    // 2차원 배열 내 전력망 연결 좌표
    wires.forEach(([v1, v2]) => {
        graph[v1][v2] = 1;
        graph[v2][v1] = 1;
    });

    function DFS(tower) {
        visit[tower] = 1;
        count++;

        for (let i = 1; i <= n; i++) {

            if (graph[tower][i] && !visit[i]) {
                DFS(i);
            }
        }
    }

    for (let i = 0; i < wires.length; i++) {
        const [v1, v2] = wires[i];

        // 전력 끊기
        graph[v1][v2] = 0;
        graph[v2][v1] = 0;
        DFS(1);
        // 전력 복원
        graph[v1][v2] = 1;
        graph[v2][v1] = 1;

        // (총 전력탑 갯수 - 나뉘었을 때의 전력탑)(= 그 외 갯수) - 나뉘었을 때의 전력탑 = 서로 나뉜 두 전력망의 전력탑 갯수 차이
        answer = Math.min(answer, Math.abs(n - count - count));
        // visit 초기화
        visit.forEach((v, i) => visit[i] = 0);
        // 카운트 초기화
        count = 0;
    }

    return answer;
}