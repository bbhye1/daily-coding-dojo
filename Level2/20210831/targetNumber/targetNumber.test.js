function solution(numbers, target, i = 0, result = 0) {
  if (i === numbers.length) {
    if (result === target) {
      return 1;
    }
    return 0;
  }

  const plus = solution(numbers, target, i + 1, result + numbers[i]);
  const minus = solution(numbers, target, i + 1, result - numbers[i]);
  return plus + minus;
}

test('solution', () => {
  expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
});
