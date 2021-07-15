function solution(s) {
  const numbers = JSON
    .parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    .sort((a, b) => a.length - b.length)
    .flat();

  return [...new Set(numbers)];
}

test('solution', () => {
  expect(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'))
    .toEqual([2, 1, 3, 4]);
  expect(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'))
    .toEqual([2, 1, 3, 4]);
  expect(solution('{{20,111},{111}}'))
    .toEqual([111, 20]);
  expect(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'))
    .toEqual([3, 2, 4, 1]);
});
