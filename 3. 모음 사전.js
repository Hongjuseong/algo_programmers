function solution(word) {
	const words = ['A', 'E', 'I', 'O', 'U'];
	const result = [];
	let index = 0;

	function DFS(depth, num, arr) {
		if (depth === num) {
			result.push(arr.join(''));
		} else {
			for (let i = 0; i < words.length; i++) {
				arr.push(words[i]);
				DFS(depth + 1, num, arr);
				arr.pop();
			}
		}
	}

	for (let i = 1; i <= words.length; i++) {
		DFS(0, i, []);
	}

	index = result.sort().indexOf(word) + 1;
    return index;
}