const q4 = (numbers) => {
  const answer = [];

  numbers.forEach((a) => {
    const reversed = Number((a + '').split('').reverse().join(''));

    let isPrime = true;

    for (let i = 2; i < (reversed / 2) + 1; i++) {
      if (reversed % i === 0) {
        isPrime = false;
        return;
      }
    }

    if (isPrime) {
      answer.push(reversed);
    }
  });

  return answer;
};

test('test', () => {
  expect(q4([32, 55, 62, 3700, 250])).toEqual([23, 73]);
});

