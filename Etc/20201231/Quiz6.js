const q6 = (corrects) => {
  let answer = 0;
  let plusScore = 0;

  corrects.forEach((ox) => {
    if (ox) {
      answer += 1;
      answer += plusScore;
      plusScore += 1;
    } else {
      plusScore = 0;
    }
  });

  return answer;
};

test('test', () => {
  expect(q6([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])).toEqual(10);
});
