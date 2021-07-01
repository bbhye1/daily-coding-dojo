// 배열메서드
function solution1(array, commands) {
  return commands
    .reduce((acc, [start, end, number]) => {
      const slice = array
        .slice(start - 1, end)
        .sort((a, b) => a - b)[number - 1];

      return [...acc, slice];
    }, []);
}

// 꼬리재귀
function solution2(array, commands, answer = []) {
  if (!commands.length) {
    return answer;
  }
  const [start, end, i] = commands.pop();
  const number = array
    .slice(start - 1, end)
    .sort((a, b) => a - b)[i - 1];

  return solution2(array, commands, [number, ...answer]);
}

// 재귀
function solution3(array, commands) {
  if (!commands.length) {
    return [];
  }
  const [start, end, i] = commands.pop();
  const number = array
    .slice(start - 1, end)
    .sort((a, b) => a - b)[i - 1];

  return [...solution3(array, commands), number];
}

// for문
function solution4(array, commands) {
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    const [start, end, j] = commands[i];
    const number = array
      .slice(start - 1, end)
      .sort((a, b) => a - b)[j - 1];
    answer.push(number);
  }
  return answer;
}

// 배열메서드 2
function solution5(array, commands) {
  return commands
    .map(([start, end, number]) => {
      const slice = array
        .slice(start - 1, end)
        .sort((a, b) => a - b)[number - 1];

      return slice;
    });
}

test('solution', () => {
  [solution1, solution2, solution3, solution4, solution5].forEach((solution) => {
    expect(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
  });
});
