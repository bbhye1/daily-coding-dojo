// 재귀
function collatz(n, count) {
  if (n === 1) {
    return count;
  }

  if (count === 500) {
    return -1;
  }

  return collatz(n % 2 === 0 ? n / 2 : (n * 3) + 1, count + 1);
}

function solution1(n) {
  return collatz(n, 0);
}

// while문
function solution2(n) {
  let count = 0;

  while (n > 1) {
    if (count === 500) {
      count = -1;
      break;
    }

    n = n % 2 ? n * 3 + 1 : n / 2;
    count++;
  }

  return count;
}

test('collatz', () => {
  expect(collatz(1, 2)).toBe(2);
  expect(collatz(4, 2)).toBe(4);
  expect(collatz(6, 2)).toBe(10);
  expect(collatz(626331, 0)).toBe(-1);
});

test('solution, ', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(6)).toBe(8);
    expect(solution(16)).toBe(4);
    expect(solution(626331)).toBe(-1);
  });
});
