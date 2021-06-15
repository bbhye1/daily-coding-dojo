function grap(board, move) {
  const dollsInMoveLine = board.map((row) => row[move - 1]);
  const pickedDollIndex = dollsInMoveLine.findIndex((doll) => doll > 0);

  if (pickedDollIndex < 0) {
    return null;
  }

  const doll = dollsInMoveLine[pickedDollIndex];
  board[pickedDollIndex][move - 1] = 0;

  return doll;
}

function put(basket, doll) {
  const basketSize = basket.length;

  if (basketSize === 0) {
    basket.push(doll);
    return 0;
  }

  const lastDoll = basket[basketSize - 1];

  if (lastDoll === doll) {
    basket.pop();
    return 2;
  }

  basket.push(doll);
  return 0;
}

function solution(board, moves) {
  const basket = [];

  const count = moves.reduce((acc, move) => {
    const grappedDoll = grap(board, move);

    if (!grappedDoll) {
      return acc;
    }

    const popCount = put(basket, grappedDoll);

    return acc + popCount;
  }, 0);

  return count;
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

test('grap', () => {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];

  expect(grap(board, 1)).toBe(4);

  expect(board).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [0, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ]);
});

test('graps empty line', () => {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [0, 2, 4, 4, 2],
    [0, 5, 1, 3, 1],
  ];

  expect(grap(board, 1)).toBe(null);

  expect(board).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [0, 2, 4, 4, 2],
    [0, 5, 1, 3, 1],
  ]);
});

test('put doll into the basket', () => {
  const basket = [];

  put(basket, 1);

  expect(basket[0]).toBe(1);
});

test('pop doll when the same doll is into basket ', () => {
  const basket = [];

  expect(put(basket, 1)).toBe(0);
  expect(put(basket, 1)).toBe(2);

  expect(basket[0]).toBe(undefined);
});
