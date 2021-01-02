const q1 = (numbers) => {
  const rows = new Array(5).fill(0);
  const columns = new Array(5).fill(0);
  const middle = new Array(2).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      const column = numbers[j][i];
      rows[j] += column;
      columns[i] += column;

      if (i === j) {
        middle[0] += column;
      }

      if (i + j === 6) {
        middle[1] += column;
      }
    }
  }

  const answer = Math.max(...columns, ...rows, ...middle);

  return answer;
};

test('test', () => {
  expect(q1([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])).toEqual(155);
});
