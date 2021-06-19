function getRealNumbers(absolutes, signs) {
  return absolutes.map((number, i) => {
    if (signs[i]) {
      return number;
    }

    return -number;
  });
}

function solution(absolutes, signs) {
  const realNumbers = getRealNumbers(absolutes, signs);

  return realNumbers.reduce((acc, cur) => acc + cur, 0);
}

function solution2(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => (acc + (signs[i] ? cur : -cur)), 0);
}

test('solution', () => {
  expect(solution([4, 7, 12], [true, false, true])).toBe(9);
  expect(solution([1, 2, 3], [false, false, true])).toBe(0);
});

test('solution2', () => {
  expect(solution2([4, 7, 12], [true, false, true])).toBe(9);
  expect(solution2([1, 2, 3], [false, false, true])).toBe(0);
});

test('getRealNumbers', () => {
  expect(getRealNumbers([4, 7, 12], [true, false, true])).toEqual([4, -7, 12]);
});
