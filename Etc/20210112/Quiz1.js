const getBinaryNumber = (number, result) => {
  if (number === 1) {
    return 1 + result;
  }
  const divine = Math.floor(number / 2);
  const rest = number % 2;

  return getBinaryNumber(divine, rest + result);
}

const q1 = (n) => {
  const binaryNumber = getBinaryNumber(n, '');

  return Number(binaryNumber);
};

test('test', () => {
  expect(q1(11)).toEqual(1011);
});
