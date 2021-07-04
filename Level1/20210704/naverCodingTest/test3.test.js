function solution(block, board) {
  const blocks = {
    0: (x, y) => [[x, y], [x + 1, y], [x + 2, y]],
    1: (x, y) => [[x, y], [x, y + 1], [x, y + 2]],
    2: (x, y) => [[x, y], [x + 1, y], [x + 1, y + 1]],
    3: (x, y) => [[x, y], [x + 1, y], [x + 1, y - 1]],
    4: (x, y) => [[x, y], [x, y + 1], [x + 1, y + 1]],
    5: (x, y) => [[x, y], [x + 1, y], [x, y + 1]],
  };
  const blanks = board
    .map((a, i) => a
      .map((b, j) => [i, j, b])
      .filter((b) => !b[2]));

  blanks.forEach((line, i) => {
    line.forEach(([x, y, _]) => {
      let result = true;

      const position = blocks[block](x, y);

      position.forEach(([xPos, yPos]) => {
        if (!board[xPos] || !board[xPos][yPos]) {
          result = false;
        }
      });
    });
  });
  return 2;
}

test('solution', () => {
  expect(solution(0,
    [
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 0, 1],
    ])).toBe(2);
});
