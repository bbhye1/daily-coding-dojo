const q2 = (numbers) => {
  let maxSum = 0;
  let index = -1;

  numbers.forEach((a, i) => {
    const result = (a + '')
      .split('')
      .reduce((acc, cur) => Number(acc) + Number(cur));

    if (result > maxSum) {
      maxSum = result;
      index = i;
    }
  });

  const answer = numbers[index];

  return answer;
};

test('test', () => {
  expect(q2([123, 15232, 97])).toEqual(97);
});