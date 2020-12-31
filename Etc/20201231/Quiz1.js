// 첫번째 풀이 - 객체
// const q1 = (n, m) => {
//   const result = {};

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//       if (!result[i + j]) {
//         result[i + j] = 1;
//       } else {
//         result[i + j] += 1;
//       }
//     }
//   }

//   const array = Object.entries(result).sort((a, b) => b[1] - a[1]);

//   const answer = array.filter((a) => a[1] === array[0][1]);

//   return answer.map((a) => Number(a[0]));
// };

// 두번째 풀이 - 배열 
const q1 = (n, m) => {
  const result = new Array(n + m).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (!result[i + j]) {
        result[i + j] = 1;
      } else {
        result[i + j] += 1;
      }
    }
  }

  let max = Math.max(...result);
  const answer = [];

  result.forEach((a, i) => {
    if (a === max) {
      answer.push(i);
    }
  });

  return answer;
};

test('test', () => {
  expect(q1(4, 6)).toEqual([5, 6, 7]);
});
