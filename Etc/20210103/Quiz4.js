const q1 = (numbers) => {
  let answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let k = 0; k < 3; k++) {
      const rows = [];
      const column = [];
      for (let j = 0; j < 5; j++) {
        rows.push(numbers[i][j + k]);
        column.push(numbers[j + k][i]);
      }

      if (rows.join('') === rows.reverse().join('')) {
        answer += 1;
      }

      if (column.join('') === column.reverse().join('')) {
        answer += 1;
      }
    }
  }

  return answer;
}

test('test', () => {
  expect(q1([
    [2, 4, 1, 5, 3, 2, 6],
    [3, 5, 1, 8, 7, 1, 7],
    [8, 3, 2, 7, 1, 3, 8],
    [6, 1, 2, 3, 2, 1, 1],
    [1, 3, 1, 3, 5, 3, 2],
    [1, 1, 2, 5, 6, 5, 2],
    [1, 2, 2, 2, 2, 1, 5],
  ])).toEqual(3);
});
