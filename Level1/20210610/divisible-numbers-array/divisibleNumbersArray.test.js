function solution(arr, divisor) {
  const numbers = arr
    .filter((number) => number % divisor === 0)
    .sort((a, b) => a - b);

  if (!numbers.length) {
    return [-1];
  }

  return numbers;
}

test('solution', () => {
  expect(solution([5, 9, 7, 10], 5)).toEqual([5, 10]);
  expect(solution([2, 36, 1, 3], 1)).toEqual([1, 2, 3, 36]);
  expect(solution([3, 2, 6], 10)).toEqual([-1]);
});
