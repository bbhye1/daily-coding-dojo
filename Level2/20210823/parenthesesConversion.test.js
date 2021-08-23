function getUV1(p) {
  let i = 0;
  const count = {
    '(': 0,
    ')': 0,
  };

  while (!i || count['('] !== count[')']) {
    count[p[i]] += 1;
    i++;
  }

  return [p.slice(0, i), p.slice(i)];
}

function getUV2(p, count = [0, 0], result = ['', '']) {
  if (count[0] && count[0] === count[1]) {
    return [result[0], p];
  }

  const brackets = { '(': 0, ')': 1 };

  count[brackets[p[0]]] += 1;
  result[0] += p[0];

  return getUV2(p.slice(1), count, result);
}

function isComplete(p) {
  const result = [...p].reduce((acc, cur) => {
    if (!acc.length) {
      acc = [cur];
      return acc;
    }

    const last = acc.pop();

    if (last === '(' && cur === ')') {
      return acc;
    }

    return [...acc, last, cur];
  }, []);

  return !result.length;
}

function reverse(p) {
  return [...p].map((a) => (a === '(' ? ')' : '(')).join('');
}

function solution(p) {
  if (p === '') return '';

  const [u, v] = getUV1(p);

  if (isComplete(u)) {
    return u + solution(v);
  }

  return `(${solution(v)})${reverse(u.slice(1, u.length - 1))}`;
}

test('solution', () => {
  expect(solution('(()())()')).toBe('(()())()');
  expect(solution(')(')).toBe('()');
  expect(solution('()))((()')).toBe('()(())()');
});

test('getUV', () => {
  [getUV1, getUV2].forEach((getUV) => {
    expect(getUV('(()())()')).toEqual(['(()())', '()']);
    expect(getUV(')(')).toEqual([')(', '']);
    expect(getUV('()))((()')).toEqual(['()', '))((()']);
  });
});

test('isComplete', () => {
  expect(isComplete('(()())')).toBeTruthy();
  expect(isComplete('(()()(')).toBeFalsy();
  expect(isComplete('')).toBeTruthy();
});

test('reverse', () => {
  expect(reverse('(())')).toBe('))((');
});
