function solution1(n) {
  const three = n.toString(3)
    .split('')
    .reverse()
    .join('');
  return parseInt(three, 3);
}

function solution2(n) {
  const three = n.toString(3);
  let result = '';

  for (let i = three.length - 1; i >= 0; i--) {
    result += three[i];
  }

  return parseInt(result, 3);
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(45)).toBe(7);
    expect(solution(125)).toBe(229);
  });
});
