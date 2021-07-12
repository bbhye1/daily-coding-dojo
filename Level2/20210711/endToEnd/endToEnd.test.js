function solution1(n, words) {
  const container = new Set();
  let index = 0;
  let result = [0, 0];

  while (index < words.length) {
    const word = words[index];
    const next = words[index + 1];

    if (container.has(word)) {
      const number = (index % n) + 1;
      const turn = Math.ceil((index + 1) / n);
      result = [number, turn];
      break;
    }

    if (next && next[0] !== word[word.length - 1]) {
      const number = ((index + 1) % n) + 1;
      const turn = Math.ceil((index + 2) / n);
      result = [number, turn];
      break;
    }

    container.add(word);
    index++;
  }

  return result;
}

// 다른 풀이
function solution2(n, words) {
  let result = 0;

  words.reduce((acc, word, i) => {
    result = result
    || ((words.slice(0, i).indexOf(word) !== -1 || acc !== word[0]) ? i : result);
    return word[word.length - 1];
  }, '');

  const number = (result % n) + 1;
  const turn = Math.floor(result / n) + 1;
  return result ? [number, turn] : [0, 0];
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'])).toEqual([3, 3]);
    expect(solution(5, ['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure', 'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive'])).toEqual([0, 0]);
    expect(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])).toEqual([1, 3]);
  });
});
