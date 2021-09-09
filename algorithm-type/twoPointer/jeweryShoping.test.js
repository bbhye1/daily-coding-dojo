function solution(gems) {
  const only = new Set(gems).size;
  const result = [0, gems.length + 1];
  let start = 0;
  let end = 0;

  const cart = new Map();
  cart.set(gems[0], 1);

  while (end < gems.length) {
    const hasFullJewers = cart.size === only;

    if (hasFullJewers) {
      if (end - start < result[1] - result[0]) {
        result[0] = start + 1;
        result[1] = end + 1;
      }

      const jewery = cart.get(gems[start]);

      if (jewery > 1) {
        cart.set(gems[start], jewery - 1);

        start++;
        continue;
      }

      cart.delete(gems[start]);
      start++;
    } else {
      end++;

      const jewery = cart.get(gems[end]);

      if (!jewery) {
        cart.set(gems[end], 1);
        continue;
      }

      cart.set(gems[end], jewery + 1);
    }
  }
  return result;
}

test('solution', () => {
  expect(solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA'])).toEqual([3, 7]);
  expect(solution(['AA', 'AB', 'AC', 'AA', 'AC'])).toEqual([1, 3]);
  expect(solution(['XYZ', 'XYZ', 'XYZ'])).toEqual([1, 1]);
  expect(solution(['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB'])).toEqual([1, 5]);
});
