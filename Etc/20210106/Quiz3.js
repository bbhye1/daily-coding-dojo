const q3 = (numbers) => {
  const answer = [];

  for (let i = numbers.length; i > 0; i--) {
    if (i === numbers.length) {
      answer.push(i);
    } else {
      answer.splice(numbers[i - 1], 0, i);
    }
  }

  return answer;
};

test('test', () => {
  expect(q3([5, 3, 4, 0, 2, 1, 1, 0])).toEqual([4, 8, 6, 2, 5, 1, 3, 7]);
  expect(q3([84, 57, 66, 80, 12, 5, 13, 26, 21, 41, 57, 78, 0, 69, 76, 41, 78, 39, 62, 54, 25, 76, 33, 27, 45, 52, 67, 22, 40, 59, 25, 37, 65, 27, 21, 41, 15, 13, 43, 51, 24, 41, 10, 6, 24, 31, 26, 25, 16, 11, 42, 19, 14, 45, 12, 34, 15, 37, 37, 29, 27, 33, 12, 16, 16, 8, 12, 24, 25, 23, 19, 23, 3, 1, 18, 2, 0, 11, 6, 18, 0, 1, 4, 10, 14, 7, 3, 7, 9, 10, 5, 6, 2, 0, 2, 3, 3, 0, 1, 0])).toEqual([13, 77, 74, 81, 73, 6, 76, 94, 44, 82, 98, 66, 5, 43, 93, 7, 87, 38, 50, 37, 79, 55, 63, 53, 9, 49, 35, 28, 83, 8, 67, 21, 57, 31, 24, 100, 52, 34, 41, 95, 23, 64, 45, 65, 48, 18, 10, 47, 16, 91, 78, 32, 86, 29, 99, 46, 88, 2, 25, 71, 84, 36, 75, 61, 11, 20, 92, 3, 42, 26, 39, 60, 70, 68, 19, 96, 56, 69, 72, 14, 62, 30, 4, 40, 1, 89, 51, 58, 59, 12, 15, 27, 97, 80, 17, 85, 33, 22, 54, 90]);
});
