function generateNumbers(start, end) {
  const size = end - start + 1;

  return [...new Array(size)].map((_, i) => start + i);
}

function countDemicals(number) {
  const numbers = generateNumbers(1, number);
  return numbers
    .filter((item) => number % item === 0)
    .length;
}

function solution(left, right) {
  const numbers = generateNumbers(left, right);

  return numbers.reduce((acc, cur) => {
    const count = countDemicals(cur);
    return count % 2 === 0 ? acc + cur : acc - cur;
  }, 0);
}

test('solution', () => {
  expect(solution(13, 17)).toBe(43);
  expect(solution(24, 27)).toBe(52);
});

test('generateNumbers', () => {
  expect(generateNumbers(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
  expect(generateNumbers(1, 5)).toEqual([1, 2, 3, 4, 5]);
});

test('countDemicals', () => {
  expect(countDemicals(5)).toBe(2);
  expect(countDemicals(10)).toBe(4);
});
