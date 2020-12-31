// const q5 = (diceRecords) => {
//   const answer = [];

//   diceRecords.forEach((record) => {
//     const recordMap = new Map();

//     record.forEach((a) => {
//       if (recordMap.has(a)) {
//         recordMap.set(a, recordMap.get(a) + 1);
//       } else {
//         recordMap.set(a, 1);
//       }
//     });

//     if (recordMap.size === 1) {
//       answer.push(10000 + (record[0] * 1000));
//     }

//     if (recordMap.size === 2) {
//       let max = 0;

//       for (let recordNumber of recordMap.keys()) {
//         if (recordMap.get(recordNumber) === 2) {
//           max = recordNumber;
//         }
//       }

//       answer.push(1000 + (max * 1000));
//     }

//     if (recordMap.size === 2) {
//       answer.push((Math.max(...record)) * 100);
//     }
//   });

//   return Math.max(...answer);
// };

const q5 = (diceRecords) => {
  const answer = diceRecords.map((record) => {
    record.sort((a, b) => b - a);
    if (record[0] === record[1] && record[1] === record[2]) {
      return 10000 + (record[0] * 1000);
    } else if (record[0] === record[1] || record[1] === record[2]) {
      return (1000 + (record[1] * 100));
    } else {
      return (record[0] * 100);
    }
  })

  return Math.max(...answer);
};

test('test', () => {
  expect(q5([[3, 3, 6], [2, 2, 2], [6, 2, 5]])).toEqual(12000);
});
