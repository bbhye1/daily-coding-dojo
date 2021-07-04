function solution(money, cost) {
  let result = 0;

  for (let i = 0; i < cost.length; i++) {
    let end = i;
    let total = 0;

    while (total + cost[end] < money) {
      total += cost[end];
      end++;
    }

    if (end - i > result) {
      result = end - i;
    }
  }

  return result;
}

test('solution', () => {
  expect(solution(420,
    [0, 900, 0, 200, 150, 0, 30, 50])).toBe(5);
});

test('solution', () => {
  expect(solution(100,
    [245, 317, 151, 192])).toBe(0);
});
