function move(s, n) {
  const code = s.charCodeAt();
  const moveNum = code + n;
  const start = code < 95 ? 65 : 97;
  const condition = code < 95 ? 90 : 122;
  const gap = 26;
  const charCode = moveNum >= condition
    ? start + ((moveNum - start) % gap)
    : moveNum;

  return String.fromCharCode(charCode);
}

function solution(s, n) {
  const letters = s
    .split('')
    .map((letter) => {
      if (letter === ' ') {
        return letter;
      }

      return move(letter, n);
    });

  return letters.join('');
}

test('solution', () => {
  expect(solution('A B', 1)).toEqual('B C');
  expect(solution('c d', 1)).toEqual('d e');
  expect(solution('z a', 2)).toEqual('b c');
});

test('move', () => {
  expect(move('A', 3)).toEqual('D');
  expect(move('Z', 2)).toEqual('B');
  expect(move('a', 3)).toEqual('d');
  expect(move('z', 2)).toEqual('b');
});
