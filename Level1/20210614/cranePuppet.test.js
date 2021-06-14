function getOnlyDolls(board) {
  const newBoard = [...new Array(board.length)].map((_) => []);
  board.forEach((column, columnIndex) => {
    column.forEach((row, rowIndex) => {
      if (row > 0) {
        newBoard[rowIndex].push(row);
      }
    });
  });

  return newBoard;
}

function grapDoll(board, moves) {
  const onlyDolls = getOnlyDolls(board);

  moves.forEach((move) => {

  });

  const selectedDoll = onlyDolls[move].shift();

  return [selectedDoll, board];
}

function solution(board, moves) {
  return 4;
}

test('solution', () => {
  expect(solution([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ], [1, 5, 3, 5, 1, 2, 1, 4])).toBe(4);
});

test('getOnlyDolls', () => {
  expect(getOnlyDolls([
    [0, 0, 0],
    [0, 0, 1],
    [0, 2, 5],
  ])).toEqual([
    [],
    [2],
    [1, 5],
  ]);

  expect(getOnlyDolls([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ])).toEqual([
    [4, 3],
    [2, 2, 5],
    [1, 5, 4, 1],
    [4, 3],
    [3, 1, 2, 1],
  ]);
});

// test('selectDoll', () => {
//   expect(selectDoll([
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 3],
//     [0, 2, 5, 0, 1],
//     [4, 2, 4, 4, 2],
//     [3, 5, 1, 3, 1],
//   ], 1)).toEqual([4, [
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 3],
//     [0, 2, 5, 0, 1],
//     [0, 2, 4, 4, 2],
//     [3, 5, 1, 3, 1],
//   ]]);
// });
