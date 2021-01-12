// const q3 = (n) => {
//   const answer = [];
//   const DFS = (v, array) => {
//     if (v === n.length) {
//       const reduced = array.length ? array.reduce((acc, cur) => acc + cur) : 0;
//       const rest = n.filter((a) => !array.includes(a));
//       const reseReduced = rest.length ? rest.reduce((acc, cur) => acc + cur) : 0;
//       if (reduced === reseReduced) {
//         answer.push([array, rest]);
//       }
//       return;
//     } else {
//       DFS(v + 1, [...array, n[v]]);
//       DFS(v + 1, array);
//     }
//   };
//   DFS(0, []);

//   const result = answer.filter(([array, rest]) => {
//     let isTrue = true;
//     const divineNumber1 = [];
//     const divineNumber2 = [];

//     array.forEach((a) => {
//       for (let i = 2; i <= a; i++) {
//         if (a % i === 0) {
//           divineNumber1.push(a);
//         }
//       }
//     });

//     rest.forEach((a) => {
//       for (let i = 2; i <= a; i++) {
//         if (a % i === 0) {
//           divineNumber2.push(a);
//         }
//       }
//     });

//     divineNumber1.forEach((a) => {
//       if (divineNumber2.includes(a)) {
//         isTrue = false;
//       }
//     });

//     return isTrue;
//   })
//   return result.length ? 'YES' : 'NO';
// };

const q3 = (n) => {
  let answer = 'NO';

  const DFS = (v, sum) => {
    if (v === n.length) {
      const nSum = n.reduce((acc, cur) => acc + cur);
      if (sum === nSum - sum) {
        answer = 'YES';
      }
      return;
    } else {
      DFS(v + 1, sum + n[v]);
      DFS(v + 1, sum);
    }
  };
  DFS(0, 0);

  return answer;
};

test('test', () => {
  expect(q3([1, 3, 5, 6, 7, 10])).toEqual('YES');
  expect(q3([2, 4, 5, 10, 12, 13])).toEqual('YES');
  expect(q3([1, 2, 3, 4, 5, 6, 7])).toEqual('YES');
  expect(q3([3, 6, 1, 4, 7, 16, 34, 23, 12])).toEqual('YES');
  expect(q3([3, 6, 13, 11, 7, 16, 34, 23, 12])).toEqual('NO');
});
