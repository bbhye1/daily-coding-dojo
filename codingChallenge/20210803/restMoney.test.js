// 나의 풀이 - 재귀
function solution1(price, money, count, total = 0) {
  if (count === 0) {
    return (total - money) > 0
      ? total - money
      : 0;
  }

  const sum = total + (price * count);

  return solution1(price, money, count - 1, sum);
}

// 가우스 공식?
function solution2(price, money, count) {
  const temp = ((price * count) * (count + 1)) / 2 - money;

  return temp > 0 ? temp : 0;
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(3, 20, 4)).toBe(10);
  });
});
