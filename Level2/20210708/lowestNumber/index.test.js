function solution1(a, b) {
  const sortedA = a.sort((a, b) => a - b);
  const sortedB = b.sort((a, b) => b - a);
  const result = sortedA
    .reduce((acc, cur, i) => acc + (cur * sortedB[i]), 0);
  return result;
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution([1, 4, 2], [5, 4, 4])).toBe(29);
    expect(solution([1, 2], [3, 4])).toBe(10);
  });
});
