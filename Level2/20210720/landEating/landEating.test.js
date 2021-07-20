// 완전탐색 시간 왕창 초과
function solution(land) {
  let result = 0;

  function sum(lands, b, i = 0, combination = 0) {
    if (i === land.length) {
      if (result < combination) {
        result = combination;
      }
      return;
    }

    lands[i]
      .forEach((num, j) => {
        if (j !== b) {
          sum(lands, j, i + 1, combination + num);
        }
      });
  }

  sum(land, -1, 0, 0);

  return result;
}

// 재귀 (시간초과)
function solution2(land) {
  function sum(a, b) {
    if (a === land.length - 1) {
      return land[a][b];
    }

    const rest = [0, 1, 2, 3]
      .filter((num) => num !== b)
      .map((num) => sum(a + 1, num));

    return land[a][b] + Math.max(...rest);
  }

  return Math.max(...land[0].map((_, i) => sum(0, i)));
}

// 동적계획법
function solution3(land) {
  return Math.max(...land.reduce((a, c) => [
    c[0] + Math.max(a[1], a[2], a[3]),
    c[1] + Math.max(a[0], a[2], a[3]),
    c[2] + Math.max(a[0], a[1], a[3]),
    c[3] + Math.max(a[0], a[1], a[2]),
  ], [0, 0, 0, 0]));
}

test('solution', () => {
  expect(solution3([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])).toBe(16);

  expect(solution3([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
  ])).toBe(12);
});
