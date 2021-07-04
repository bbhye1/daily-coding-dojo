// 깊이 우선 탐색
function combiations(numbers, r) {
  const result = [];

  function go(i = -1, combination = []) {
    // 종료조건 -> 다 뽑았다. 뽑은게 r 개다.
    if (combination.length === r) {
      result.push(combination);
      return;
    }

    numbers.forEach((n, j) => {
      if (j > i) {
        go(j, [...combination, n]);
      }
    });
  }

  go();
  console.log(result);
  return result;
}

test('combiations', () => {
  expect(combiations([1, 2, 3, 4, 5], 3).length).toBe(10);
});
