function isTop(priority, indexedList) {
  return indexedList.filter((a) => priority[0] < a[0]).length === 0;
}

function solution1(priorities, location) {
  const indexedList = priorities.map((a, i) => [a, i]);
  const printer = [];

  while (indexedList.length > 0) {
    const priority = indexedList.shift();

    if (isTop(priority, indexedList)) {
      printer.push(priority);
      continue;
    }

    indexedList.push(priority);
  }

  return printer.findIndex(([_, i]) => i === location) + 1;
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution([2, 1, 3, 2], 2)).toBe(1);
    expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
  });
});

test('isTop', () => {
  expect(isTop([2, 0], [[1, 1], [3, 2], [2, 3]])).toBeFalsy();
  expect(isTop([4, 1], [[2, 2], [3, 2], [2, 3]])).toBeTruthy();
  expect(isTop([4, 1], [])).toBeTruthy();
});
