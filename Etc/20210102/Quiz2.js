const q2 = (numbers) => {
  let answer = 0;

  const middleNumber = Math.floor(numbers.length / 2);

  let middleStart = middleNumber;
  let middleEnd = middleNumber;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = middleStart; j <= middleEnd; j++) {
      answer += numbers[i][j];
    }

    if (i < middleNumber) {
      middleStart -= 1;
      middleEnd += 1;
    } else {
      middleStart += 1;
      middleEnd -= 1;
    }
  }

  return answer;
};

test('test', () => {
  expect(q2([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])).toEqual(379);
  expect(q2([
    [29, 94, 79, 58, 39, 18, 85, 32, 48, 87, 35, 22, 45, 79, 4],
    [49, 92, 63, 98, 13, 53, 25, 92, 85, 82, 31, 66, 76, 81, 97],
    [55, 3, 89, 66, 98, 7, 30, 40, 48, 28, 93, 90, 17, 66, 58],
    [3, 9, 87, 60, 39, 49, 33, 6, 7, 30, 17, 100, 74, 58, 12],
    [98, 98, 52, 61, 98, 73, 68, 76, 24, 4, 31, 97, 25, 99, 96],
    [92, 64, 19, 81, 96, 1, 53, 100, 1, 3, 24, 40, 14, 97, 60],
    [94, 30, 39, 48, 39, 67, 18, 53, 97, 25, 25, 87, 58, 20, 33],
    [81, 39, 28, 40, 28, 45, 52, 21, 57, 64, 69, 47, 56, 42, 100],
    [18, 51, 30, 31, 94, 66, 24, 92, 59, 31, 4, 30, 5, 38, 80],
    [36, 85, 19, 51, 15, 92, 62, 24, 55, 2, 15, 96, 1, 73, 14],
    [15, 100, 23, 21, 91, 58, 90, 38, 34, 100, 83, 18, 77, 8, 100],
    [71, 6, 49, 66, 48, 48, 100, 61, 97, 23, 70, 14, 50, 22, 70],
    [87, 88, 27, 61, 57, 36, 45, 3, 78, 22, 25, 56, 32, 48, 17],
    [58, 43, 42, 99, 56, 42, 61, 81, 16, 19, 5, 13, 89, 8, 4],
    [78, 96, 88, 64, 75, 63, 42, 10, 68, 67, 84, 75, 11, 79, 64],
  ])).toEqual(5226);
});
