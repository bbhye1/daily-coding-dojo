function getGraph(n, results) {
  const graph = [...new Array(n)].map(() => [...new Array(n)].map(() => false));

  results.forEach(([key, value]) => {
    graph[key - 1][value - 1] = 1;
    graph[key - 1][key - 1] = 0;
    graph[value - 1][value - 1] = 0;
    graph[value - 1][key - 1] = -1;
  });
  return graph;
}

function floyd(n, graph) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        // i라는 선수가 j보다 크고 k보다 작으면 j <
        if (graph[j][i] === 1 && graph[i][k] === 1) {
          graph[j][k] = 1;
        }

        if (graph[j][i] === -1 && graph[i][k] === -1) {
          graph[j][k] = -1;
        }
      }
    }
  }

  return graph;
}

function solution(n, results) {
  const graph = getGraph(n, results);
  floyd(n, graph);
  const guessable = graph
    .filter((a) => !a.includes(false));
  return guessable.length;
}

test('solution', () => {
  expect(solution(5, [
    [4, 3], [4, 2], [3, 2], [1, 2], [2, 5],
  ])).toBe(2);
});
