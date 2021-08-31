function solution1(n) {
  function jump(x) {
    if (x <= 1) {
      return 1;
    }
    return solution1(x - 1) + solution1(x - 2);
  }

  const result = jump(n);
  return result % 1234567;
}

function solution2(n) {
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i += 1) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

test('solution', () => {
  [solution1, solution2]
    .forEach((solution) => {
      expect(solution(1)).toBe(1);
      expect(solution(2)).toBe(2);
      expect(solution(3)).toBe(3);
      expect(solution(4)).toBe(5);
      expect(solution(5)).toBe(8);
    });
});
