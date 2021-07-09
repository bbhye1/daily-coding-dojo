// 시간 초과
function solution1(p) {
  let result = true;

  while (result) {
    const same = [...p].find((a, i) => a === p[i + 1]);

    if (!same) {
      result = false;
    }

    const rest = p.replace(new RegExp(same + same, 'g'), '');

    p = rest;
  }

  return p.length ? 0 : 1;
}

// 시간초과
function solution2(p) {
  if (!p) {
    return 1;
  }

  const letters = [...p];
  const same = letters.find((a, i) => a === p[i + 1]);

  if (!same) {
    return 0;
  }

  const rest = p.replace(new RegExp(same + same, 'g'), '');
  return solution2(rest);
}

// 효율성까지 통과
function solution3(p) {
  const stack = [];

  [...p].forEach((letter) => {
    const pop = stack.pop();

    if (pop !== letter) {
      stack.push(pop);
      stack.push(letter);
    }
  });

  return stack.length > 1 ? 0 : 1;
}

test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution('baabaa')).toBe(1);
    expect(solution('cdcd')).toBe(0);
    expect(solution('ccdcd')).toBe(0);
    expect(solution('baaaaabaa')).toBe(0);
  });
});
