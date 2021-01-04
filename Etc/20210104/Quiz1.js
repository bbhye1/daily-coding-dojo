const q1 = (m, numbers) => {
  const sorted = numbers.sort((a, b) => a - b);
  let answer = sorted.indexOf(m) + 1;
  return answer;
}

const q1 = (m, numbers) => {
  const sorted = numbers.sort((a, b) => a - b);
  let answer = 0;

  let lt = 0;
  let rt = sorted.length - 1;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (sorted[mid] === m) {
      answer = mid + 1;
      break;
    } else if (sorted[mid] > m) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

test('test', () => {
  expect(q1(32, [23, 87, 65, 12, 57, 32, 99, 81])).toEqual(3);
  expect(q1(55, [23, 33, 74, 4, 8, 5, 6, 83, 76, 89, 84, 32, 44, 93, 65, 42, 31, 17, 60, 7, 20, 29, 94, 3, 30, 34, 91, 38, 59, 55, 68, 82, 36, 9, 79, 92, 69, 64, 78, 63, 28, 1, 72, 43, 100, 25, 18, 53, 58, 54, 39, 51, 66, 71, 97, 88, 37, 24, 35, 10, 15, 2, 70, 52, 27, 95, 85, 22, 40, 47, 56, 99, 50, 96, 46, 49, 11, 45, 26, 86, 19, 98, 57, 67, 13, 21, 16, 80, 73, 77, 41, 90, 12, 48, 75, 81, 87, 14, 61, 62])).toEqual(55);
});
