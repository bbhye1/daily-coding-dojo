const q1 = (n, k) => {
  const array = new Array(n).fill(0).map((a, i) => i + 1);

  while (array.length > 1) {
    for (let i = 1; i <= k; i++) {
      const out = array.shift();

      if (i !== k) {
        array.push(out);
      }
    }
  }

  return array[0]
};


test('test', () => {
  expect(q1(8, 3)).toEqual(7);
  expect(q1(1000, 9)).toEqual(329);
});
