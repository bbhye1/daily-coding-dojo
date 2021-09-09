const solution = (N, S, numList) => {
  let start = 0;
  let end = 0;
  let bag = numList[0];
  let result = N;

  while (end < numList.length) {
    if (bag < S) {
      end++;
      bag += numList[end];
      continue;
    }

    if (end - start < result) {
      result = end - start + 1;
    }

    bag -= numList[start];
    start++;
  }

  return result;
};

test('solution', () => {
  expect(solution(10, 15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8])).toBe(2);
  expect(solution(10, 10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 10])).toBe(1);
});
