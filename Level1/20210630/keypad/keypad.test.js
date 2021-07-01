function calculateDistance([a1, b1], [a2, b2]) {
  return Math.abs(a1 - a2) + Math.abs(b1 - b2);
}

function getLocation(num, keypad) {
  return keypad.reduce((acc, cur, i) => {
    if (cur.includes(num)) {
      const j = cur.findIndex((a) => a === num);

      return [i, j];
    }
    return acc;
  }, [0, 0]);
}

function solution1(number, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  let left = [3, 0];
  let right = [3, 2];
  let answer = '';

  number.forEach((num) => {
    if ([1, 4, 7, '*'].includes(num)) {
      const leftLocation = getLocation(num, keypad);
      left = leftLocation;
      answer += 'L';
    }

    if ([3, 6, 9, '#'].includes(num)) {
      const rightLocation = getLocation(num, keypad);
      right = rightLocation;
      answer += 'R';
    }

    if ([2, 5, 8, 0].includes(num)) {
      const numLocation = getLocation(num, keypad);
      const leftDistance = calculateDistance(left, numLocation);
      const rightDistance = calculateDistance(right, numLocation);

      if (leftDistance > rightDistance) {
        right = numLocation;
        answer += 'R';
      } else if (leftDistance < rightDistance) {
        left = numLocation;
        answer += 'L';
      } else if (hand === 'right') {
        right = numLocation;
        answer += 'R';
      } else {
        left = numLocation;
        answer += 'L';
      }
    }
  });

  return answer;
}

function solution2(number, hand) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let left = '*';
  let right = '#';
  let answer = '';

  number.forEach((num) => {
    const location = keypad[num];

    if ([1, 4, 7, '*'].includes(num)) {
      left = num;
      answer += 'L';
    }

    if ([3, 6, 9, '#'].includes(num)) {
      right = num;
      answer += 'R';
    }

    if ([2, 5, 8, 0].includes(num)) {
      const leftDistance = calculateDistance(keypad[left], location);
      const rightDistance = calculateDistance(keypad[right], location);

      if (leftDistance > rightDistance) {
        right = num;
        answer += 'R';
      } else if (leftDistance < rightDistance) {
        left = num;
        answer += 'L';
      } else if (hand === 'right') {
        right = num;
        answer += 'R';
      } else {
        left = num;
        answer += 'L';
      }
    }
  });

  return answer;
}

test('solution', () => {
  [solution2].forEach((solution) => {
    expect(solution([1, 4, 6], 'right')).toBe('LLR');
    expect(solution([1, 9, 4, 6], 'right')).toBe('LRLR');
    expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')).toBe('LRLLLRLLRRL');
    expect(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')).toBe('LRLLRRLLLRR');
  });
});

test('getLocation', () => {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  expect(getLocation(4, keypad)).toEqual([1, 0]);
  expect(getLocation(6, keypad)).toEqual([1, 2]);
});

test('calculateDistance', () => {
  expect(calculateDistance([0, 0], [1, 2])).toBe(3);
  expect(calculateDistance([2, 2], [0, 1])).toBe(3);
});
