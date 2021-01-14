const fib = (number, acc) => {
  if (number === 1 || number === 2) {
    return [1];
  }

  acc = [...acc, acc[acc.length - 1] + acc[acc.length - 2]]

  if (number === 3) {
    return acc;
  }

  return fib(number - 1, acc);
};

test('test', () => {
  expect(fib(1, [1, 1])).toEqual([1]);
  expect(fib(2, [1, 1])).toEqual([1]);
  expect(fib(3, [1, 1])).toEqual([1, 1, 2]);
  expect(fib(4, [1, 1])).toEqual([1, 1, 2, 3]);
  expect(fib(5, [1, 1])).toEqual([1, 1, 2, 3, 5]);
  expect(fib(6, [1, 1])).toEqual([1, 1, 2, 3, 5, 8]);
});
