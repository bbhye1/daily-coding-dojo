function solution(arr) {
  const only = new Set(arr);

  for (let i = 1; i <= arr.length; i++) {
    if (!only.has(i)) {
      return false;
    }
  }
  return true;
}

test('solution', () => {
  expect(solution([4, 1, 3, 2])).toBeTruthy();
  expect(solution([4, 1, 2])).toBeFalsy();
});
