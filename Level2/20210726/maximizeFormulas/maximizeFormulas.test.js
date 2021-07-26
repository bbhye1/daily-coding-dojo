function getOrder(operator) {
  const result = [];

  function pick(arr, combinations = []) {
    if (combinations.length === operator.size) {
      result.push(combinations);
      return;
    }

    arr.forEach((inner, i) => {
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      pick(rest, [...combinations, inner]);
    });
  }

  pick([...operator]);
  return result;
}

function solution(expression) {
  const operator = new Set(expression.match(/[^\d]/g));
  const a = expression.match(/[\d]/g);
  const operators = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
  };

  const splited = [...expression].reduce((a, c) => {
    if (isFinite(a[a.length - 1]) && isFinite(c)) {
      a[a.length - 1] += c;
      return a;
    }
    return [...a, c];
  }, ['']);

  const orders = getOrder(operator);

  const result = orders
    .map((order) => {
      let sum = splited;

      order.forEach((oper) => {
        const answer = sum
          .reduce((acc, cur) => {
            if (acc[acc.length - 1] === oper) {
              acc.pop();
              acc[acc.length - 1] = operators[oper](Number(acc[acc.length - 1]), Number(cur));
              return acc;
            }

            return [...acc, cur];
          }, []);
        sum = answer;
      });
      return Math.abs(sum);
    });

  return Math.max(...result);
}

test('solution', () => {
  expect(solution('100-200*300-500+20')).toBe(60420);
  expect(solution('50*6-3*2')).toBe(300);
});

test('getOrder', () => {
  expect(getOrder(new Set(['*', '+']))).toEqual([
    ['*', '+'],
    ['+', '*'],
  ]);
  expect(getOrder(new Set(['*', '+', '-'])).length).toBe(6);
});
