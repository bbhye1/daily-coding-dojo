// const getUseList = (basic, rest) => {
//   if (!rest.length) {
//     return basic;
//   }

//   const lastTime = basic[basic.length - 1][1];

//   if (rest[0][0] >= lastTime) {
//     return getUseList([...basic, rest[0]], rest.slice(1))
//   } else {
//     return getUseList(basic, rest.slice(1))
//   }

// }

// const q2 = (meetings) => {
//   let answer = 0;

//   meetings.sort((a, b) => a[1] - b[1]);
//   console.log(meetings);
//   meetings.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1);
//     const useList = getUseList([fixed], rest);
//     if (useList.length > answer) {
//       answer = useList.length;
//     }
//   });

//   return answer;
// };


const q2 = (meetings) => {
  let answer = 0;
  let endTime = 0;

  meetings.sort((a, b) => a[1] - b[1]);

  meetings.forEach(([start, end]) => {
    if (start >= endTime) {
      endTime = end;
      answer += 1;
    }
  });

  return answer;
};

test('test', () => {
  expect(q2([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]])).toEqual(3);
  expect(q2([[18, 19], [2, 20], [4, 21], [2, 22], [12, 15], [12, 23], [2, 8], [5, 20], [22, 23], [1, 5], [13, 21], [16, 20], [9, 19], [5, 9], [14, 20], [16, 22], [11, 12], [4, 16], [21, 23], [11, 13]])).toEqual(6);
});
