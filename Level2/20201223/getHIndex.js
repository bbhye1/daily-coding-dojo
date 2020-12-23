const getHIndex = (citations) => {
  let answer = 0;

  const end = Math.max(...citations);

  for (let i = 1; i <= end; i++) {
    const filtered = citations.filter((a) => a >= i).length;
    const rest = citations.filter((a) => a < i && a > 0).length;

    if (filtered >= i && rest <= i) {
      answer++;
    }
  }

  return answer;
};

test('test', () => {
  expect(getHIndex([3, 0, 6, 1, 5])).toEqual(3);
  expect(getHIndex([12, 11, 10, 9, 8, 1])).toEqual(5);
  expect(getHIndex([6, 6, 6, 6, 6, 1])).toEqual(5);
  expect(getHIndex([4, 4, 4, 5, 0, 1, 2, 3])).toEqual(4);
  expect(getHIndex([0, 1,])).toEqual(1);
  expect(getHIndex([2, 7, 5])).toEqual(2);
  expect(getHIndex([0, 0, 1, 1])).toEqual(1);
});
