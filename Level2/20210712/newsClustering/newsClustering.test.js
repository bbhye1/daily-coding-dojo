function makeMultipleSet(string) {
  return [...string.toUpperCase()]
    .map((_, i, arr) => arr[i] + arr[i + 1])
    .filter((s) => s.match(/[A-Z]{2}/));
}

function count(arr) {
  return arr.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
      return acc;
    }

    acc[cur] += 1;
    return acc;
  }, {});
}

// 순환 한번만
function common1(multiple1, multiple2) {
  const count1 = count(multiple1);
  const count2 = count(multiple2);

  return Object.keys(count1)
    .reduce((acc, key) => {
      if (count1[key] && count2[key]) {
        acc += Math.min(count1[key], count2[key]);
      }
      return acc;
    }, 0);
}

// 동작을 가독성 좋게 표현
function common2(multiple1, multiple2) {
  const count1 = count(multiple1);
  const count2 = count(multiple2);

  return Object.keys(count1)
    .map((key) => Math.min(count1[key], count2[key]))
    .filter((i) => i)
    .reduce((a, c) => a + c, 0);
}

function solution1(str1, str2) {
  const mutiSet1 = makeMultipleSet(str1);
  const mutiSet2 = makeMultipleSet(str2);
  const commonCount = common2(mutiSet1, mutiSet2);
  const allCount = mutiSet1.length + mutiSet2.length - commonCount;

  if (!allCount) {
    return 65536;
  }

  const similarity = Math.floor((commonCount / allCount) * 65536);

  return similarity;
}

function a(array) {
  const sorted = array.sort((a, b) => a - b);
  const point1 = 0;
  const point2 = 0;
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution('FRANCE', 'french')).toBe(16384);
    expect(solution('handshake', 'shake hands')).toBe(65536);
    expect(solution('aa1+aa2', 'AAAA12')).toBe(43690);
    expect(solution('E=M*C^2', 'e=m*c^2')).toBe(65536);
  });
});

test('makeMultipleSet - uppercase', () => {
  expect(makeMultipleSet('FRANCE')).toEqual(['FR', 'RA', 'AN', 'NC', 'CE']);
  expect(makeMultipleSet('french')).toEqual(['FR', 'RE', 'EN', 'NC', 'CH']);
});

test('makeMultipleSet - is not string', () => {
  expect(makeMultipleSet('aa1+aa2')).toEqual(['AA', 'AA']);
  expect(makeMultipleSet('E=M*C^2')).toEqual([]);
});

test('common', () => {
  [common1, common2].forEach((common) => {
    expect(common([1, 2, 2, 2, 3], [1, 2, 2])).toBe(3);
  });
});

test('count', () => {
  expect(count([1, 2, 3, 1, 1, 3])).toEqual({
    1: 3,
    2: 1,
    3: 2,
  });
});
