function isSquare(board) {
  return !board.flat().includes(0);
}

function solution(board) {
  let size = board.length < board[0].length
    ? board.length
    : board[0].length;

  while (size > 0) {
    let result = false;

    for (let i = 0; i + size <= board.length; i++) {
      for (let j = 0; j + size <= board[0].length; j++) {
        const square = board
          .slice(i, size + i)
          .map((a) => a.slice(j, size + j));

        if (isSquare(square)) {
          result = true;
        }
      }
    }

    if (result) {
      break;
    }

    size--;
  }

  return size ** 2;
}

function solution2(board) {
  let answer = 0;
  board.forEach((row, i) => {
    row.forEach((col, j) => {
      if (i - 1 < 0 || j - 1 < 0) return;

      const square = [
        board[i - 1][j - 1],
        board[i - 1][j],
        board[i][j - 1],
      ];

      if (![...square, col].includes(0)) {
        board[i][j] = Math.min(...square) + 1;
        if (answer < board[i][j]) {
          answer = board[i][j];
        }
      }
    });
  });

  if (answer === 0 && board.flat().includes(1)) {
    return 1;
  }

  return answer ** 2;
}

test('solution', () => {
  expect(solution2([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])).toBe(9);
  expect(solution2([
    [0, 1, 1, 0],
    [1, 1, 1, 0],
  ])).toBe(4);
  expect(solution2([
    [0, 0, 0, 0],
    [1, 0, 0, 0],
  ])).toBe(1);
  expect(solution2([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])).toBe(0);
  expect(solution2([
    [1],
  ])).toBe(1);
  expect(solution2([
    [0],
  ])).toBe(0);
  expect(solution2([
    [0],
  ])).toBe(0);
});

test('isSquare', () => {
  expect(isSquare([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ])).toBeTruthy();

  expect(isSquare([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])).toBeFalsy();
});
