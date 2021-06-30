// reduce
function solution1(a, b) {
  return a.reduce((acc, cur, i) => acc + (cur * b[i]), 0);
}

// for문
function solution2(a, b) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
}

// while문
function solution6(a, b) {
  let sum = 0;
  let i = 0;

  while (i < a.length) {
    sum += a[i] * b[i];
    i++;
  }

  return sum;
}

// 꼬리재귀
function solution3(a, b, result = 0) {
  if (!a.length) {
    return result;
  }
  const sum = a.pop() * b.pop();

  return solution3(a, b, result + sum);
}

// 재귀
function solution4(a, b) {
  if (!a.length) {
    return 0;
  }

  const sum = a.pop() * b.pop();

  return sum + solution4(a, b);
}

test('solution', () => {
  [solution1, solution2, solution3, solution4, solution6].forEach((solution) => {
    expect(solution([1, 2, 3, 4], [-3, -1, 0, 2])).toEqual(3);
    expect(solution([-1, 0, 1], [1, 0, -1])).toEqual(-2);
  });
});
