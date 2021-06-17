function isWin(number, winNumbers) {
  return winNumbers.find((winNumber) => winNumber === number);
}

function getRank(max, min) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  return [rank[max], rank[min]];
}

function solution(lottos, winNums) {
  const knownNumbers = lottos.filter((number) => number > 0);
  const unKnownNumbersCount = lottos.length - knownNumbers.length;

  if (unKnownNumbersCount === lottos.length) {
    return [1, 6];
  }

  const winNumbers = knownNumbers.filter((number) => isWin(number, winNums));

  const max = unKnownNumbersCount + winNumbers.length;
  const min = winNumbers.length;

  return getRank(max, min);
}

test('solution', () => {
  expect(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toEqual([3, 5]);
  expect(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 2])).toEqual([1, 6]);
  expect(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])).toEqual([1, 1]);
});

test('isWin', () => {
  const winNumbers = [31, 10, 45, 1, 6, 19];

  expect(isWin(1, winNumbers)).toBeTruthy();
  expect(isWin(2, winNumbers)).toBeFalsy();
});

test('getScore', () => {
  expect(getRank(4, 2)).toEqual([3, 5]);
});
