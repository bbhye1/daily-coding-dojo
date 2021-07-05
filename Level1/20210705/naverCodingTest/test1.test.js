function solution(k, rates) {
  let current = k;
  let money = k;
  let dollar = 0;
  let queue = 0;

  rates.forEach((rate, i) => {
    if (!dollar
      && rate <= current
      && rates[i + 1] > rate) {
      dollar = rate;
      money -= rate;
    }

    if (dollar && rate > dollar) {
      if (rate > queue) {
        queue = rate;
      }

      if (rates[i + 1] < queue) {
        dollar = 0;
        money += queue;
        current = money;
        queue = 0;
      }
    }
  });

  return queue ? queue + money : current;
}

test('solution', () => {
  expect(solution(1000, [1000, 2000, 2100, 1000, 1200])).toBe(2300);
  expect(solution(2000, [1000, 2000, 300, 200, 100, 1000, 1200])).toBe(4100);
  expect(solution(1000, [1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100])).toBe(2150);
  expect(solution(1000, [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100])).toBe(2150);
  expect(solution(1500, [1500, 1400, 1300, 1200])).toBe(1500);
});
