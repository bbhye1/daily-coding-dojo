// const q2 = (rank, m) => {
//   const array = rank.map((a, i) => [a, i]);
//   const answer = [];

//   while (array.length > 0) {
//     const shifted = array.shift();
//     const filtered = array.filter((a) => a[0] > shifted[0]);

//     if (!filtered.length) {
//       answer.push(shifted);
//     } else {
//       array.push(shifted);
//     }
//   }

//   return answer.findIndex((a) => a[1] === m) + 1;
// };

const q2 = (rank, m) => {
  const array = rank.map((a, i) => [a, i]);
  let answer = 0;

  while (array.length > 0) {
    const shifted = array.shift();
    const filtered = array.filter((a) => a[0] > shifted[0]);

    if (!filtered.length) {
      answer += 1;

      if (shifted[1] === m) {
        break;
      }
    } else {
      array.push(shifted);
    }
  }

  return answer;
};

test('test', () => {
  expect(q2([60, 50, 70, 80, 90], 2)).toEqual(3);
  expect(q2([60, 60, 90, 60, 60, 60], 0)).toEqual(5);
  expect(q2([70, 81, 58, 71, 62, 68, 92, 63, 50, 53, 53, 61, 77, 96, 67, 60, 74, 54, 91, 81, 65, 65, 82, 50, 95, 98, 87, 93, 70, 72, 90, 62, 64, 99, 74, 73, 67, 95, 71, 82, 61, 96, 57, 84, 84, 91, 52, 50, 88, 90, 77, 54, 50, 70, 52, 99, 99, 83, 72, 57, 78, 61, 54, 59, 58, 78, 79, 75, 84, 78, 95, 61, 61, 50, 90, 76, 51, 55, 64, 99, 50, 72, 61, 77, 72, 93, 62, 87, 76, 57, 62, 74, 94, 71, 98, 84, 63, 74, 73, 68], 25)).toEqual(6);
});
