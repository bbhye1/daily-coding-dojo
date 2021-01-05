// const q4 = (heights, m) => {
//   while (m > 0) {
//     const maxIndex = heights.indexOf(Math.max(...heights));
//     const minIndex = heights.indexOf(Math.min(...heights));
//     heights[maxIndex] -= 1;
//     heights[minIndex] += 1;
//     m--;
//   }

//   const answer = Math.max(...heights) - Math.min(...heights);
//   return answer;
// };

const q4 = (heights, m) => {
  while (m > 0) {
    heights.sort((a, b) => b - a);
    heights[0] -= 1;
    heights[heights.length - 1] += 1;
    m--;
  }

  heights.sort((a, b) => b - a);

  const answer = heights[0] - heights[heights.length - 1];
  return answer;
};

test('test', () => {
  expect(q4([69, 42, 68, 76, 40, 87, 14, 65, 76, 81], 50)).toEqual(20);
  expect(q4([53, 33, 57, 45, 59, 56, 63, 78, 49, 24, 24, 67, 81, 71, 63, 33, 63, 56, 96, 59, 16, 38, 50, 75, 31, 43, 61, 95, 92, 28, 51, 59, 20, 81, 74, 69, 72, 84, 71, 94, 70, 87, 39, 46, 11, 20, 38, 93, 91, 65], 300)).toEqual(17);
  expect(q4([64, 75, 66, 52, 11, 57, 87, 92, 92, 28, 51, 88, 78, 97, 26, 49, 56, 69, 99, 61, 77, 60, 30, 78, 31, 77, 44, 55, 98, 97, 61, 26, 15, 85, 24, 40, 75, 87, 36, 81, 75, 75, 57, 32, 40, 54, 88, 10, 68, 17, 48, 72, 67, 11, 73, 20, 22, 56, 85, 24, 53, 38, 83, 53, 70, 94, 24, 64, 91, 80, 60, 46, 57, 49, 73, 59, 20, 48, 48, 37, 98, 89, 10, 85, 46, 13, 53, 44, 46, 85, 21, 13, 87, 39, 19, 97, 58, 80, 66, 37], 120)).toEqual(62);
});
