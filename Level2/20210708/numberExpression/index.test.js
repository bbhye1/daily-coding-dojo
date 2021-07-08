function solution1(n) {
  let result = 0;
  let count = 0;

  const combination = new Set();

  for (let i = Math.ceil(n / 2); i > 0; i--) {
    if (result < n) {
      combination.add(i);
      result += i;
    }

    if (result >= n) {
      if (result === n) {
        count++;
      }
      const num = combination.values().next().value;
      combination.delete(num);
      result -= num;
    }
  }
  return count + 1;
}

// while문으로 풀기
function solution2(n) {
  let result = 0;
  let count = 0;
  let i = Math.ceil(n / 2);

  const combination = new Set();
  while (i > 0) {
    if (result < n) {
      combination.add(i);
      result += i;
    }

    if (result >= n) {
      if (result === n) {
        count++;
      }
      const num = combination.values().next().value;
      combination.delete(num);
      result -= num;
    }

    i--;
  }
  return count + 1;
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(15)).toBe(4);
    expect(solution(10)).toBe(2);
    expect(solution(20)).toBe(2);
  });
});
