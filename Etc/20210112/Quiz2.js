const q2 = (n) => {
  const answer = [];
  const array = new Array(n + 1).fill(0);
  const DFS = (v) => {
    if (v === n + 1) {
      const result = array.map((a, i) => {
        if (a > 0) {
          return i;
        }
      }).filter((a) => a);
      answer.push(result);
    } else {
      array[v] = 1;
      DFS(v + 1);
      array[v] = 0;
      DFS(v + 1);
    }
  };
  DFS(1);
  return answer.filter(a => a.length);
};

test('test', () => {
  expect(q2(3)).toEqual([[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3]]);
});
