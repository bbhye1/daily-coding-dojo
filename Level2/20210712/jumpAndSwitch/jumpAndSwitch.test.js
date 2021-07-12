function getJumpRest(num, n) {
  let i = 1;
  let result = 0;

  while (result <= n) {
    result = num * (2 ** i);
    i++;
  }
  return result ? n - (result / 2) : 0;
}

// 틀린 풀이: 앞 수가 홀 수인 경우를 처리하지 못함
function solution1(n) {
  let answer = 1e9;

  for (let i = 1; i < n - 1; i++) {
    const rest = getJumpRest(i, n);
    const jumped = (i % 2) + 1;
    if (answer >= jumped + rest) {
      answer = jumped + rest;
    }
  }
  return answer;
}

// 무조건 전체의 2로 나누어 최소를 구하는 전략 => 2진수로 구하기
function solution2(n) {
  return [...n.toString(2)].reduce((acc, cur) => {
    if (cur === '1') {
      acc += 1;
      return acc;
    }

    return acc;
  }, 0);
}

// 재귀로 풀기
function solution3(n, result = 0) {
  if (n === 0) {
    return result;
  }

  return solution3(Math.floor(n / 2), result + (n % 2));
}

test('solution', () => {
  [solution2, solution3].forEach((solution) => {
    expect(solution(5)).toEqual(2);
    expect(solution(6)).toEqual(2);
    expect(solution(5000)).toEqual(5);
  });
});

// test('getJump', () => {
//   expect(getJumpRest(1, 10)).toBe(2);
//   expect(getJumpRest(1, 11)).toBe(3);
//   expect(getJumpRest(3, 11)).toBe(5);
//   expect(getJumpRest(3, 12)).toBe(0);
//   expect(getJumpRest(3, 6)).toBe(0);
//   expect(getJumpRest(2, 5)).toBe(1);
// });
