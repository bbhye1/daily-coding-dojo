function rotate(relation) {
  return [...new Array(relation[0].length)]
    .map((_, i) => [...new Array(relation.length)]
      .map((_, j) => relation[j][i]));
}

function isTuple(keys) {
  const tuples = new Set();

  keys.forEach((tuple) => {
    tuples.add(tuple);
  });

  return tuples.size === keys.length;
}

function combine(relation, count) {
  const result = [];

  function go(i = -1, combination = [], index = []) {
    if (combination.length === count) {
      const key = combination
        .reduce((acc, cur) => {
          cur.forEach((item, j) => {
            if (!acc[j]) {
              acc[j] = item;
            } else {
              acc[j] += `,${item}`;
            }
          });
          return acc;
        }, [...new Array(combination[0].length)]);

      if (isTuple(key)) {
        result.push(index);
      }
      return;
    }

    relation.forEach((n, j) => {
      if (j > i) {
        go(j, [...combination, n], [...index, j]);
      }
    });
  }

  go();

  return result;
}

function solution(relation) {
  const result = [];
  const rotateRelation = rotate(relation);

  relation.forEach((_, i) => {
    const keys = [...combine(rotateRelation, i + 1)];
    const only = keys.filter((key) => {
      let isOnly = false;

      result.forEach((indexes) => {
        const isInclude = indexes.every((index) => key.includes(index));

        if (isInclude) {
          isOnly = true;
        }
      });

      return !isOnly;
    });

    if (!result.length) {
      result.push(...keys);
    } else {
      result.push(...only);
    }
  });

  return result.length;
}

test('solution', () => {
  expect(solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ])).toBe(2);
});

test('rotate', () => {
  expect(rotate([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ])).toEqual([
    ['100', '200', '300', '400', '500', '600'],
    ['ryan', 'apeach', 'tube', 'con', 'muzi', 'apeach'],
    ['music', 'math', 'computer', 'computer', 'music', 'music'],
    ['2', '2', '3', '4', '3', '2'],
  ]);
});

test('combine', () => {
  expect(combine([
    ['100', '200', '300', '400', '500', '600'],
    ['ryan', 'apeach', 'tube', 'con', 'muzi', 'apeach'],
    ['music', 'math', 'computer', 'computer', 'music', 'music'],
  ], 2).length).toBe(3);
});

test('isTuple', () => {
  expect(isTuple([
    '100', '200', '300', '400', '500', '600',
  ])).toBeTruthy();

  expect(isTuple([
    '2', '2', '3', '4', '3', '2',
  ])).toBeFalsy();
});
