class CranePupet {
  constructor(board) {
    this.board = board;
    this.basket = [];
    this.popCount = 0;
  }

  getGrapDollColumnIndex(move) {
    const dollsInMoveLine = this.board.map((row) => row[move - 1]);
    const pickedDollIndex = dollsInMoveLine.findIndex((doll) => doll > 0);
    return pickedDollIndex;
  }

  play(move) {
    const ColumnIndex = this.getGrapDollColumnIndex(move);
    const RowIndex = move - 1;

    if (ColumnIndex >= 0) {
      const doll = this.board[ColumnIndex][RowIndex];
      this.board[ColumnIndex][RowIndex] = 0;

      this.putInBasket(doll);
    }
  }

  putInBasket(doll) {
    const basketSize = this.basket.length;

    if (basketSize === 0) {
      this.basket.push(doll);
      return;
    }

    const lastDoll = this.basket[basketSize - 1];

    if (lastDoll === doll) {
      this.basket.pop();
      this.popCount += 2;
      return;
    }

    this.basket.push(doll);
  }

  getPopCount() {
    return this.popCount;
  }
}

function solution(board, moves) {
  const cranePupet = new CranePupet(board);

  moves.forEach((move) => {
    cranePupet.play(move);
  });

  return cranePupet.getPopCount();
}

test('solution', () => {
  expect(solution([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ], [1, 5, 3, 5, 1, 2, 1, 4])).toBe(4);
  expect(solution([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ], [1, 1, 1, 5, 3, 5])).toBe(4);
});

test('create CranePupet', () => {
  const board = [
    [0, 2, 0],
    [1, 2, 0],
    [2, 2, 1],
  ];
  const cranePupet = new CranePupet(board);
  expect(cranePupet.board).toStrictEqual(board);
  expect(cranePupet.basket).toStrictEqual([]);
  expect(cranePupet.popCount).toBe(0);
});

test('getPopCount', () => {
  const board = [
    [0, 2, 0],
    [1, 2, 0],
    [2, 2, 1],
  ];
  const cranePupet = new CranePupet(board);
  cranePupet.popCount = 3;

  expect(cranePupet.getPopCount()).toBe(3);
});

test('putInBasket', () => {
  const board = [
    [0, 2, 0],
    [1, 2, 0],
    [2, 2, 1],
  ];

  const cranePupet = new CranePupet(board);

  cranePupet.putInBasket(1);

  expect(cranePupet.basket).toStrictEqual([1]);

  cranePupet.putInBasket(1);

  expect(cranePupet.basket).toStrictEqual([]);
  expect(cranePupet.getPopCount()).toBe(2);
});

test('getGrapDollColumnIndex', () => {
  const board = [
    [0, 2, 0],
    [1, 2, 0],
    [2, 2, 1],
  ];

  const cranePupet = new CranePupet(board);

  expect(cranePupet.getGrapDollColumnIndex(1)).toBe(1);
  expect(cranePupet.getGrapDollColumnIndex(2)).toBe(0);
  expect(cranePupet.getGrapDollColumnIndex(3)).toBe(2);
});

test('play', () => {
  const board = [
    [0, 2, 0],
    [1, 2, 0],
    [2, 2, 1],
  ];

  const cranePupet = new CranePupet(board);

  cranePupet.play(1);

  expect(cranePupet.board).toStrictEqual([
    [0, 2, 0],
    [0, 2, 0],
    [2, 2, 1],
  ]);

  cranePupet.play(3);

  expect(cranePupet.board).toStrictEqual([
    [0, 2, 0],
    [0, 2, 0],
    [2, 2, 0],
  ]);

  cranePupet.play(3);

  expect(cranePupet.board).toStrictEqual([
    [0, 2, 0],
    [0, 2, 0],
    [2, 2, 0],
  ]);

  expect(cranePupet.getPopCount()).toBe(2);
  expect(cranePupet.basket).toStrictEqual([]);
});
