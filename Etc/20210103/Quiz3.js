const q3 = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    const rows = new Set();
    const colums = new Set();
    const square = new Set();

    for (let j = 0; j < numbers.length; j++) {

      if ([0, 3, 6].includes(i) && [0, 3, 6].includes(j)) {
        for (let k = 0; k < 3; k++) {
          for (let f = 0; f < 3; f++) {
            square.add(numbers[i + k][j + f]);
          }
        }
      }

      rows.add(numbers[i][j]);
      colums.add(numbers[j][i]);
    }

    if (square.size && rows.size !== 9) {
      return 'No';
    }
    if (rows.size !== 9 || colums.size !== 9) {
      return 'No';
    }
  }

  return 'YES';
};

test('test', () => {
  expect(q3([
    [1, 4, 3, 6, 2, 8, 5, 7, 9],
    [5, 7, 2, 1, 3, 9, 4, 6, 8],
    [9, 8, 6, 7, 5, 4, 2, 3, 1],
    [3, 9, 1, 5, 4, 2, 7, 8, 6],
    [4, 6, 8, 9, 1, 7, 3, 5, 2],
    [7, 2, 5, 8, 6, 3, 9, 1, 4],
    [2, 3, 7, 4, 8, 1, 6, 9, 5],
    [6, 1, 9, 2, 7, 5, 8, 4, 3],
    [8, 5, 4, 3, 9, 6, 1, 2, 7],
  ])).toEqual('YES');
});
