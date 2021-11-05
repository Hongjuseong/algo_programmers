function solution(line) {
    const result = [];

    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < line.length - 1; i++) {

        for (let j = i + 1; j < line.length; j++) {
            const [a, b, e] = line[i];
            const [c, d, f] = line[j];

            const denominator = a * d - b * c;

            if (!denominator) continue;

            const xNumerator = b * f - e * d;
            const yNumerator = e * c - a * f;

            if (xNumerator % denominator || yNumerator % denominator) continue;

            // x 교차, y 교차
            const x = xNumerator / denominator;
            const y = yNumerator / denominator;

            result.push([x, y]);

            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }
    }

    const star = Array.from(Array(maxY - minY + 1), () => Array(maxX - minX + 1).fill('.'));

    result.forEach(([x, y]) => {
        star[maxY - y][x - minX] = '*';
    });

    return star.map(val => val.join(''));
}

// console.log(solution([[1, -1, 0], [2, -1, 0]]));
console.log(solution([[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]));
console.log(solution([[0, 1, -1], [1, 0, -1], [1, 0, 1]]));
console.log(solution([[1, -1, 0], [2, -1, 0]]));
console.log(solution([[1, -1, 0], [2, -1, 0], [4, -1, 0]]));

// const star = Array.from({length: maxX - minX + 1}).map(() => Array.from({length: maxY - minY + 1}).fill('.'));
// 0, 4
// 3, 0 3, 8
// 8, 0 8, 8