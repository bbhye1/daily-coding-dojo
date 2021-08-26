function solution(word, cards) {
  let result = 0;

  function pick(i, indexes, restWord) {
    let found = 0;
    if (i === cards[0].length) {
      if (restWord === '') {
        result++;
      }
      return;
    }

    for (let j = 0; j < cards[0].length; j++) {
      if (!indexes.includes(j)
      && [...restWord].includes(cards[i][j])) {
        found++;
        pick(i + 1, [...indexes, j],
          restWord.replace(cards[i][j], ''));
      }
    }

    if (!found) {
      pick(i + 1, indexes, restWord);
    }
  }

  [...new Array(cards.length - word.length + 1)].forEach((_, i) => {
    pick(i, [], word);
  });

  return result;
}

test('solution', () => {
  expect(solution('APPLE', [
    'LLZKE',
    'LCXEA',
    'CVPPS',
    'EAVSR',
    'FXPFP',
  ])).toBe(3);
  expect(solution('BAB', [
    'ZZBZ',
    'BAZB',
    'XBXB',
    'XBAX',
  ])).toBe(4);
  expect(solution('BABXZ', [
    'ZZBZ',
    'BAZB',
    'XBXB',
    'XBAX',
  ])).toBe(0);
});
