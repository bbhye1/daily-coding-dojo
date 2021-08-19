function getScores(scores) {
  const result = [...new Array(scores.length)].map(() => []);

  scores.forEach((a) => {
    a.forEach((b, j) => {
      result[j].push(b);
    });
  });

  return result;
}

function getRank(score) {
  const shortScore = Math.floor(score / 10);

  if (shortScore < 5) return 'F';

  const ranks = {
    9: 'A',
    8: 'B',
    7: 'C',
    6: 'D',
    5: 'D',
  };

  return ranks[shortScore];
}

function isBiggestOrSmallest(scores, i) {
  const standard = scores[i];
  let isbiggest = true;
  let isSmallest = true;

  scores.forEach((a, j) => {
    if (j !== i) {
      if (standard >= a) {
        isbiggest = false;
      }

      if (standard <= a) {
        isSmallest = false;
      }
    }
  });

  return isbiggest || isSmallest;
}

function solution1(scores) {
  const reorderedScores = getScores(scores);

  const result = reorderedScores
    .reduce((acc, cur, i) => {
      const current = isBiggestOrSmallest(cur, i)
        ? [...cur.slice(0, i), ...cur.slice(i + 1)]
        : cur;

      const sum = current.reduce((a, c) => a + c, 0);

      return [
        ...acc,
        getRank(Math.floor(sum / current.length)),
      ];
    }, []);

  return result.join('');
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution([
      [100, 90, 98, 88, 65],
      [50, 45, 99, 85, 77],
      [47, 88, 95, 80, 67],
      [61, 57, 100, 80, 65],
      [24, 90, 94, 75, 65],
    ])).toBe('FBABD');
  });
  [solution1].forEach((solution) => {
    expect(solution([
      [50, 90],
      [50, 87],
    ])).toBe('DA');
  });
  [solution1].forEach((solution) => {
    expect(solution([
      [70, 49, 90],
      [68, 50, 38],
      [73, 31, 100],
    ])).toBe('CFD');
  });
});

test('getScores', () => {
  expect(getScores([[50, 90], [50, 87]])).toEqual([[50, 50], [90, 87]]);
});

test('getRank', () => {
  expect(getRank(92)).toBe('A');
  expect(getRank(82)).toBe('B');
  expect(getRank(72)).toBe('C');
  expect(getRank(62)).toBe('D');
  expect(getRank(52)).toBe('D');
  expect(getRank(42)).toBe('F');
});

test('isBiggestOrSmallest', () => {
  expect(isBiggestOrSmallest([50, 90, 90], 1)).toBeFalsy();
  expect(isBiggestOrSmallest([90, 90], 1)).toBeFalsy();
  expect(isBiggestOrSmallest([90, 50, 50], 1)).toBeFalsy();
  expect(isBiggestOrSmallest([90, 50, 70], 1)).toBeTruthy();
});
