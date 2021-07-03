function put(basket, number) {
  if (basket[basket.length - 1] === number) {
    basket.pop();
    return 2;
  }

  basket.push(number);
  return 0;
}

function pick(board, number) {
  const array = board
    .map((a, i) => a
      .map((b, j) => board[j][i]));

  const index = array[number - 1].findIndex((a) => a);

  if (index < 0) return null;

  const result = array[number - 1][index];
  board[index][number - 1] = 0;

  return result;
}

function solution(board, moves) {
  const basket = [];
  let count = 0;

  moves
    .forEach((move) => {
      const puppet = pick(board, move);
      if (puppet) {
        const pop = put(basket, puppet);
        count += pop;
      }
    });

  return count;
}

test('solution', () => {
  expect(solution([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ], [1, 5, 3, 5, 1, 2, 1, 4])).toEqual(4);
});

test('pick', () => {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];

  expect(pick(board, 1)).toBe(4);
  expect(board).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [0, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ]);
  expect(pick(board, 1)).toBe(3);
  expect(board).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [0, 2, 4, 4, 2],
    [0, 5, 1, 3, 1],
  ]);
  expect(pick(board, 1)).toBe(null);
  expect(board).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [0, 2, 4, 4, 2],
    [0, 5, 1, 3, 1],
  ]);
  expect(pick(board, 2)).toBe(2);
});

test('pop', () => {
  const basket = [];
  expect(put(basket, 4)).toEqual(0);
  expect(basket).toEqual([4]);
  expect(put(basket, 4)).toEqual(2);
  expect(basket).toEqual([]);
});
