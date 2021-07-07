function solution1(s) {
  const stack = [];

  [...s].forEach((a) => {
    if (a === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(a);
    }
  });

  return !stack.length;
}

// 효율성 실패
function solution2(s) {
  while (s.length > 0) {
    if (s[0] === ')' || s[s.length - 1] === '(') {
      break;
    }

    s = s.replace(/(\()\)/g, '');
  }
  return !s;
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution('()()')).toBeTruthy();
    expect(solution('((()))()')).toBeTruthy();
    expect(solution(')()(')).toBeFalsy();
    expect(solution('((()())')).toBeFalsy();
  });
});
