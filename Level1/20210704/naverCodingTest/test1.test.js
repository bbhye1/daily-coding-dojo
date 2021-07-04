// queue 대기열 만들고
// 거꾸로 뒤집은 환율표에서 pop으로 꺼내서
// 만약 k보다 작거나 같다면 달러를 사준다.
// 크다면 대기열에 넣는다.
// 다시 k보다 작으면 현재금액은 대기열 중 가장 큰 금액을 더해주고 달러를 사준다.
// 마지막 순환이라면 현재 대기열에서 가장큰 금액을 더해준다.
function solution(k, rates) {
  // const reverse = rates.reverse();

  let queue = [];
  let money = k;
  const total = k;
  let dollar = 0;
  let sell = 0;
  const max = 0;

  rates.forEach((rate, i) => {
    if (dollar && rate > dollar + money) {
      if (rates[i + 1] < rate) {
        sell = rate;
      }
    }

    if (rate <= dollar + money) {
      dollar = rate;
      money -= rate;
      queue = [];
    }

    console.log(queue, dollar, money, max);
  });

  return money + dollar + total;
}

test('solution', () => {
  expect(solution(1000, [1200, 1000, 1100, 1200])).toBe(1200);
  // expect(solution(1000, [1200, 1000, 1100, 1200, 900])).toBe(1200);
  // expect(solution(1000, [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100])).toBe(2150);
});
