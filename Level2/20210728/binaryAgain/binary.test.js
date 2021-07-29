function removeZero1(s) {
  return [...s].reduce((acc, cur) => {
    if (cur === '0') {
      acc.zeroCount += 1;
      return acc;
    }

    acc.removed += cur;
    return acc;
  }, {
    zeroCount: 0,
    removed: '',
  });
}

function removeZero2(s) {
  return {
    zeroCount: (s.match(/0/g) || []).length,
    removed: s.replace(/0/g, ''),
  };
}

function solution2(s, result = [0, 0]) {
  if (s === '1') {
    return result;
  }

  const { zeroCount, removed } = removeZero1(s);
  const newBinary = removed.length.toString(2);

  return solution2(newBinary, [result[0] + 1, result[1] + zeroCount]);
}

function solution1(s) {
  const result = [0, 0];

  while (s !== '1') {
    const zeroRemoved = removeZero1(s);
    result[1] += zeroRemoved.zeroCount;
    s = zeroRemoved.removed.length.toString(2);
    result[0] += 1;
  }

  return result;
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution('110010101001')).toEqual([3, 8]);
    expect(solution('01110')).toEqual([3, 3]);
    expect(solution('1111111')).toEqual([4, 1]);
  });
});

test('removeZero', () => {
  [removeZero1, removeZero2].forEach((removeZero) => {
    expect(removeZero('110010101001')).toEqual({ zeroCount: 6, removed: '111111' });
    expect(removeZero('11111')).toEqual({ zeroCount: 0, removed: '11111' });
  });
});
