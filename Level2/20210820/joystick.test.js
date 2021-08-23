function getMinLetterChange(letter) {
  const code = letter.charCodeAt() - 65;

  return code <= 13 ? code : 26 - code;
}

function getRightDistanceAndIndex(name, letters, now) {
  const difference = letters
    .findIndex((letter, i) => letter !== name[i]);
  const rest = name.length - now;

  return difference > now
    ? [difference - now, difference]
    : [difference + rest, difference];
}

function getLeftDistanceAndIndex(name, letters, now) {
  const reverseName = [...name].reverse().join('');

  const difference = [...letters]
    .reverse()
    .findIndex((letter, i) => letter !== reverseName[i]);

  const rest = name.length - 1 - now;
  const index = name.length - 1 - difference;

  return difference < rest
    ? [difference + now + 1, index]
    : [difference - rest, index];
}

function solution(name) {
  const completeName = [...name].map((_) => 'A');

  let result = 0;
  let index = 0;

  while (completeName.join('') !== name) {
    const letter = name[index];

    const move = getMinLetterChange(letter);
    completeName[index] = letter;

    if (completeName.join('') === name) {
      result += move;
      break;
    }

    const [rightMove, rightIndex] = getRightDistanceAndIndex(name, completeName, index);
    const [leftMove, leftIndex] = getLeftDistanceAndIndex(name, completeName, index);

    if (rightMove <= leftMove) {
      result += move + rightMove;
      index = rightIndex;
    } else {
      result += move + leftMove;
      index = leftIndex;
    }
  }
  return result;
}

test('solution', () => {
  expect(solution('JEROEN')).toBe(56);
  expect(solution('AJEROEN')).toBe(57);
  expect(solution('JAN')).toBe(23);
  expect(solution('JAJAAAAAAAAAJAJ')).toBe(44);
  expect(solution('AAA')).toBe(0);
  expect(solution('AAAAJAA')).toBe(12);
});

test('getMinLetterChange', () => {
  expect(getMinLetterChange('J')).toBe(9);
  expect(getMinLetterChange('N')).toBe(13);
  expect(getMinLetterChange('A')).toBe(0);
  expect(getMinLetterChange('B')).toBe(1);
  expect(getMinLetterChange('C')).toBe(2);
  expect(getMinLetterChange('Z')).toBe(1);
  expect(getMinLetterChange('Y')).toBe(2);
});

test('getRightDistanceAndIndex', () => {
  expect(getRightDistanceAndIndex('JAN', ['J', 'A', 'A'], 0)).toEqual([2, 2]);
  expect(getRightDistanceAndIndex('JANAAAAAAJA', ['J', 'A', 'N', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'], 2)).toEqual([7, 9]);
  expect(getRightDistanceAndIndex('JAJAAAAAAAAAJAJ', [
    'J', 'A', 'A', 'A',
    'A', 'A', 'A', 'A',
    'A', 'A', 'A', 'A',
    'A', 'A', 'J',
  ], 14)).toEqual([3, 2]);
  expect(getRightDistanceAndIndex('JAJAAAAAAAAAJAJ', [
    'J', 'A', 'A', 'A',
    'A', 'A', 'A', 'A',
    'A', 'A', 'A', 'A',
    'J', 'A', 'J',
  ], 12)).toEqual([5, 2]);
});

test('getLeftDistanceAndIndex', () => {
  expect(getLeftDistanceAndIndex('JAN', ['J', 'A', 'A'], 0)).toEqual([1, 2]);
  expect(getLeftDistanceAndIndex('JANAAAAAAJA', ['J', 'A', 'N', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'], 2)).toEqual([4, 9]);
  expect(getLeftDistanceAndIndex('JAJAAAAAAAAAJAJ', [
    'J', 'A', 'A', 'A',
    'A', 'A', 'A', 'A',
    'A', 'A', 'A', 'A',
    'A', 'A', 'J',
  ], 14)).toEqual([2, 12]);
  expect(getLeftDistanceAndIndex('JAJAAAAAAAAAJAJ', [
    'J', 'A', 'A', 'A',
    'A', 'A', 'A', 'A',
    'A', 'A', 'A', 'A',
    'J', 'A', 'J',
  ], 12)).toEqual([10, 2]);
});
