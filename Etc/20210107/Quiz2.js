const q2 = (blank) => {
  let answer = 0;
  let stack = [];
  const array = blank.split('');

  array.forEach((a, i) => {
    if (a === '(') {
      if (array[i + 1] === ')') {
        answer += stack.length;
      } else {
        stack.push(a);
      }
    } else {
      if (array[i - 1] === ')') {
        answer += 1;
        stack.pop();
      }
    }
  });
  return answer;
};


test('test', () => {
  expect(q2('()(((()())(())()))(())')).toEqual(17);
  expect(q2('(((()(()()))(())()))(()())')).toEqual(24);
});
