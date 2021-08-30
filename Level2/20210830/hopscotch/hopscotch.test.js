function solution1(land) {
  let result = [0, 0, 0, 0];
  let i = land.length - 1;

  while (i > -1) {
    result = [
      Math.max(...result.slice(1)) + land[i][0],
      Math.max(...result.slice(0, 1), ...result.slice(2)) + land[i][1],
      Math.max(...result.slice(0, 2), ...result.slice(3)) + land[i][2],
      Math.max(...result.slice(0, 3)) + land[i][3],
    ];

    i--;
  }

  return Math.max(...result);
}

function solution2(land) {
  return Math.max(
    ...land.reduce((a, c) => [
      c[0] + Math.max(a[1], a[2], a[3]),
      c[1] + Math.max(a[0], a[2], a[3]),
      c[2] + Math.max(a[0], a[1], a[3]),
      c[3] + Math.max(a[0], a[1], a[2]),
    ], [0, 0, 0, 0]),
  );
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution([
      [1, 2, 3, 5],
      [5, 6, 7, 8],
      [4, 3, 2, 1],
    ])).toBe(16);
  });
});
