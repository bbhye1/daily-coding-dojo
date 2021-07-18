function solution1(n, a, b, round = 1) {
  const big = Math.max(a, b);
  const small = Math.min(a, b);

  if (big % 2 === 0 && big - small === 1) {
    return round;
  }

  const nextA = Math.ceil(a / 2);
  const nextB = Math.ceil(b / 2);
  return solution1(n / 2, nextA, nextB, round + 1);
}

function solution2(n, a, b) {
  let round = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }

  return round;
}

function solution3(n, a, b, round = 0) {
  if (a === b) return round;

  a = Math.ceil(a / 2);
  b = Math.ceil(b / 2);
  return solution3(n, a, b, round + 1);
}

test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution(8, 4, 7)).toBe(3);
    expect(solution(8, 7, 4)).toBe(3);
    expect(solution(8, 1, 2)).toBe(1);
    expect(solution(8, 2, 3)).toBe(2);
    expect(solution(2, 1, 2)).toBe(1);
    expect(solution(16, 4, 14)).toBe(4);
  });
});
