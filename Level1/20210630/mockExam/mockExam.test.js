function match(arr, pattern) {
  const size = pattern.length;

  return arr
    .filter((num, i) => num === pattern[i % size])
    .length;
}

// 배열메서드
function solution1(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const counts = patterns
    .reduce((acc, pattern, i) => {
      const count = match(answers, pattern);

      if (count > acc[0]) {
        return [count, i + 1];
      }

      if (count === acc[0]) {
        return [...acc, i + 1];
      }

      return acc;
    }, [0, 0]);

  return counts.slice(1);
}

// 재귀
function solution2(answers, i = 0, counts = [0]) {
  if (i === 2) {
    return counts.slice(1);
  }

  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const count = match(answers, patterns[i]);

  if (count === counts[0]) {
    counts = [...counts, i + 1];
  }

  if (count > counts[0]) {
    counts = [count, i + 1];
  }

  return solution2(answers, i + 1, counts);
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution([1, 2, 3, 4, 5])).toEqual([1]);
  });
});

test('match', () => {
  expect(match([1, 1, 2, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5])).toEqual(2);
});
