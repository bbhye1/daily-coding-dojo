function solution1(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + (signs[i] ? cur : -cur), 0);
}

function solution2(absolutes, signs) {
  let count = 0;

  for (let i = 0; i < absolutes.length; i++) {
    count += signs[i] ? absolutes[i] : -absolutes[i];
  }

  return count;
}

function recursion(absolutes, signs, count) {
  if (absolutes.length === 0) {
    return count;
  }

  const number = absolutes.pop();
  const sign = signs.pop();
  const countNumber = number * (sign ? 1 : -1);

  return recursion(absolutes, signs, count + countNumber);
}

function solution3(absolutes, signs) {
  return recursion(absolutes, signs, 0);
}

test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution([4, 7, 12], [true, false, true])).toBe(9);
    expect(solution([1, 2, 3], [false, false, true])).toBe(0);
  });
});
