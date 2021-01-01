const q2 = (word) => {
  const numberString = word
    .split('')
    .map((a) => Number(a))
    .filter((a) => a >= 0).join('');
  const number = Number(numberString);

  let divineNumber = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divineNumber++;
    }
  }
  return [number, divineNumber];
};

test('test', () => {
  expect(q2('g0en2Ts8eSoft')).toEqual([28, 6]);
});
