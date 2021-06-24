//  재귀 - 콜 스택 터짐
function solution1(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return solution1(n - 1) + solution1(n - 2);
}

// 꼬리 재귀 - 콜 스택 터짐
function solution2(n, a = 0, b = 1) {
  if (n === 0) {
    return a;
  }

  const tep = a;
  a = b;
  b = (tep + b) % 1234567;

  return solution2(n - 1, a, b);
}

// 메모이제이션 - 콜 스택 터짐
function solution3(n) {
  const memorize = {
    0: 0,
    1: 1,
  };

  function fibo(number) {
    if (memorize[number] || memorize[number] === 0) {
      return memorize[number];
    }

    const newFibo = fibo(number - 1) + fibo(number - 2);
    memorize[number] = newFibo % 1234567;

    return memorize[number];
  }

  return fibo(n);
}

// reduce - 통과
function solution4(n) {
  const numbers = [...new Array(n)];
  const result = numbers.reduce((acc, cur) => {
    const a = acc[0];
    const b = acc[1] % 1234567;

    return [b, a + b];
  }, [0, 1]);

  return result[0];
}

// for문 - 통과

function solution5(n) {
  let cur = 1;
  let next = 1;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    cur = next;
    next = answer;
    answer = (next + cur) % 1234567;
  }

  return answer;
}
test('solution', () => {
  [solution1, solution2, solution3, solution4, solution5].forEach((solution) => {
    expect(solution(3)).toBe(2);
    expect(solution(5)).toBe(5);
    expect(solution(12)).toBe(144);
  });
});
