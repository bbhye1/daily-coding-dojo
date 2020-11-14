// 내가 원하는 것
// 최대 몇개의 부서에 지원할 수 있는 지

// 내가 아는 것
// 부서별로 신청한 금액 d
// 예산 budget

// 조건
// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다.
// d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
// d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

// 계획
// 각 부서가 신청한 금액을 오름차순으로 정렬한다.
// 작은 수 부터 차례로 예산에서 빼주고 실행 수를 하나씩 올려준다. 
// 예산보다 초과되거나 같으면 실행수를 리턴한다. 


const getCount = (d, budget) => {
  const count = d.sort((a, b) => a - b)
    .map(a => budget -= a)
    .filter(a => a >= 0).length;


  // let count = 0;

  // d.sort((a, b) => a - b);
  // d.forEach((i) => {
  //   budget -= i;

  //   if (budget < 0) {
  //     return count;
  //   }

  //   if (budget === 0) {
  //     count++;
  //     return count;
  //   }
  //   count++;
  // });

  return count;
};

test('run', () => {
  expect(getCount([1, 3, 2, 5, 4], 9)).toEqual(3);
  expect(getCount([2, 2, 3, 3], 10)).toEqual(4);
  expect(getCount([2, 3], 1)).toEqual(0);
});
