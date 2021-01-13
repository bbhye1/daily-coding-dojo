// const q1 = (c, weights) => {
//   let answer = -217000000;

//   const DFS = (v, sum) => {
//     if (sum > c) {
//       return;
//     }

//     if (v === weights.length) {
//       if (sum > answer) {
//         answer = sum;
//       }
//       return;
//     } else {
//       DFS(v + 1, sum + weights[v]);
//       DFS(v + 1, sum);
//     }
//   }

//   DFS(0, 0)

//   return answer;
// };

const q1 = (c, weights) => {
  let answer = -217000000;
  const total = weights.reduce((acc, cur) => acc + cur);

  const DFS = (v, sum, tsum) => {
    if (sum > c || sum + (total - tsum) < answer) {
      return;
    }

    if (v === weights.length) {
      if (sum > answer) {
        answer = sum;
      }
      return;
    } else {
      DFS(v + 1, sum + weights[v], tsum + weights[v]);
      DFS(v + 1, sum, tsum + weights[v]);
    }
  }

  DFS(0, 0, 0)

  return answer;
};

test('test', () => {
  expect(q1(259, [81, 58, 42, 33, 61])).toEqual(242);
  expect(q1(4000, [27, 303, 251, 121, 50, 55, 123, 93, 360, 84, 353, 429, 765, 391, 562, 77])).toEqual(3994);
  expect(q1(100000000, [27, 567, 999, 234, 50, 567, 123, 4734, 754, 84, 35, 1353, 76, 464, 4634, 65, 89, 3553, 59, 38, 4135])).toEqual(22640);
});
