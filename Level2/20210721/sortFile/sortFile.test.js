function seperate1(text) {
  const headEnd = [...text]
    .findIndex((a) => a !== ' ' && isFinite(a));

  const numberEnd = [...text]
    .slice(headEnd)
    .findIndex((a) => a === ' ' || !isFinite(a));

  if (numberEnd < 0) {
    return [
      text.slice(0, headEnd),
      text.length - headEnd < 5 ? text.slice(headEnd) : text.slice(headEnd, headEnd + 5),
      text.length - headEnd < 5 ? '' : text.slice(headEnd + 5),
    ];
  }

  return [
    text.slice(0, headEnd),
    text.slice(headEnd, headEnd + (numberEnd <= 5 ? numberEnd : 5)),
    text.slice(headEnd + (numberEnd <= 5 ? numberEnd : 5)),
  ];
}

function seperate2(text) {
  const [, head, numbers] = text.match(/(\D*)([0-9]*)/i);
  const number = numbers.slice(0, 5);
  const tail = text.replace(head + number, '');

  return [head, number, tail];
}

function textSort(text1, text2) {
  const result = [...text1]
    .reduce((acc, cur, i) => {
      if (acc !== 0) return acc;
      if (!text2[i]) return 1;

      const curCode = cur.toUpperCase();
      const compareCode = text2[i].toUpperCase();
      if (curCode < compareCode) {
        acc = -1;
      }

      if (curCode > compareCode) {
        acc = 1;
      }

      return acc;
    }, 0);

  if (!result && text1.length < text2.length) {
    return -1;
  }
  return result;
}

function numberSort(arr1, arr2) {
  if (arr1[0].toUpperCase() === arr2[0].toUpperCase()) {
    if (Number(arr1[1]) < Number(arr2[1])) {
      return -1;
    }
    return 1;
  }
  return 0;
}

function solution(files) {
  const seperated = files.map((a) => seperate1(a));
  const result = [...seperated]
    .sort((a, b) => textSort(a[0], b[0]))
    .sort((a, b) => numberSort(a, b))
    .map((a) => a.join(''));

  return result;
}

test('solution', () => {
  expect(solution([
    'img12.png', 'img10.png', 'img02.png',
    'img1.png', 'IMG01.GIF', 'img2.JPG',
  ])).toEqual([
    'img1.png', 'IMG01.GIF', 'img02.png',
    'img2.JPG', 'img10.png', 'img12.png',
  ]);

  expect(solution([
    'img12.png', 'Im g10.png', 'img02.png',
  ])).toEqual([
    'Im g10.png', 'img02.png', 'img12.png',
  ]);

  expect(solution([
    'im ga12.png', 'Im g10.png', 'img02.png',
  ])).toEqual([
    'Im g10.png', 'im ga12.png', 'img02.png',
  ]);

  expect(solution([
    'bmg14.png', 'bmg12.png', 'Amg10.png', 'bag02.png',
  ])).toEqual([
    'Amg10.png', 'bag02.png', 'bmg12.png', 'bmg14.png',
  ]);

  expect(solution([
    'F-5 Freedom Fighter', 'B-50 Superfortress',
    'A-10 Thunderbolt II', 'F-14 Tomcat',
  ])).toEqual([
    'A-10 Thunderbolt II', 'B-50 Superfortress',
    'F-5 Freedom Fighter', 'F-14 Tomcat',
  ]);

  expect(solution([
    'A- 10 Thunderbolt II', 'A-10 Thunderbolt II',
  ])).toEqual([
    'A-10 Thunderbolt II', 'A- 10 Thunderbolt II',
  ]);

  expect(solution([
    'A-a10 Thunderbolt II', 'A- 10 Thunderbolt II',
  ])).toEqual([
    'A- 10 Thunderbolt II', 'A-a10 Thunderbolt II',
  ]);

  expect(solution([
    'A- a10 Thunderbolt II', 'A- 10 Thunderbolt II',
  ])).toEqual([
    'A- 10 Thunderbolt II', 'A- a10 Thunderbolt II',
  ]);
});

test('seperate', () => {
  [seperate1, seperate2].forEach((seperate) => {
    expect(seperate('foo9.txt')).toEqual(['foo', '9', '.txt']);
    expect(seperate('foo010bar020.zip')).toEqual(['foo', '010', 'bar020.zip']);
    expect(seperate('F-15')).toEqual(['F-', '15', '']);
    expect(seperate('F-1572727')).toEqual(['F-', '15727', '27']);
    expect(seperate('F-1572727aa')).toEqual(['F-', '15727', '27aa']);
  });
});

test('textSort', () => {
  expect(textSort('abc', 'aca')).toBe(-1);
  expect(textSort('abc', 'ab c')).toBe(1);
  expect(textSort('ab c', 'abc')).toBe(-1);
  expect(textSort('ab c', 'ab c')).toBe(0);
  expect(textSort('abc', 'ab-c')).toBe(1);
  expect(textSort('ab-c', 'abc')).toBe(-1);
  expect(textSort('ab-c', 'ab c')).toBe(1);
  expect(textSort('acc', 'aca')).toBe(1);
  expect(textSort('acc', 'acca')).toBe(-1);
  expect(textSort('acc ', 'aca ')).toBe(1);
  expect(textSort('acc a', 'acc a')).toBe(0);
  expect(textSort('F-', 'F ')).toBe(1);
  expect(textSort('F ', 'F  ')).toBe(-1);
});

test('numberSort', () => {
  expect(numberSort(['foo', '9', '.txt'], ['foo', '01', 'bar020.zip'])).toBe(1);
  expect(numberSort(['foo', '00', '.txt'], ['foo', '01', 'bar020.zip'])).toBe(-1);
  expect(numberSort(['aoo', '00', '.txt'], ['foo', '01', 'bar020.zip'])).toBe(0);
});
