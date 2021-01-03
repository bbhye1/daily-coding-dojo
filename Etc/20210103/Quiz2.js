const q2 = (numbers) => {
  let answer = 0;

  numbers.unshift(new Array(numbers[0].length).fill(0));
  numbers.push(new Array(numbers[0].length).fill(0));
  const newNnumbers = numbers.map((array) => [0, ...array, 0]);

  for (let i = 1; i < newNnumbers.length - 1; i++) {
    for (let j = 1; j < newNnumbers[0].length - 1; j++) {
      const top = newNnumbers[i - 1][j];
      const bottom = newNnumbers[i + 1][j];
      const left = newNnumbers[i][j - 1];
      const right = newNnumbers[i][j + 1];
      const surround = [top, bottom, left, right];

      if (newNnumbers[i][j] > Math.max(...surround)) {
        answer += 1;
      }
    }
  }
  return answer;
}

// 첫번째 풀이
// const q2 = (numbers) => {
//   let answer = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers[0].length; j++) {
//       const top = i ? numbers[i - 1][j] : 0;
//       const bottom = numbers[i + 1] ? numbers[i + 1][j] : 0;
//       const left = j ? numbers[i][j - 1] : 0;
//       const right = numbers[i][j + 1] || 0;
//       const surround = [top, bottom, left, right];

//       if (numbers[i][j] > Math.max(...surround)) {
//         answer += 1;
//       }
//     }
//   }
//   return answer;
// }

test('test', () => {
  expect(q2([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])).toEqual(10);
});
