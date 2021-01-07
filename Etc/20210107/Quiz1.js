const q1 = (n, number) => {
  let answer = [];
  const numberArray = (number + '').split('');

  numberArray.forEach((a) => {
    while (answer.length !== 0 && n > 0 && answer[answer.length - 1] < a) {
      n -= 1;
      answer.pop();
    }
    answer.push(a);
  });

  answer.splice(answer.length - n, n);

  return Number(answer.join(''));
};


test('test', () => {
  expect(q1(3, 5276823)).toEqual(7823);
  expect(q1(5, 9977252641)).toEqual(99776);
});
