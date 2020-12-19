//  런타임 에러 첫번째 풀이
// const getAllCase = (array, selectedNumber) => {
//   let result = 0;
//   if (selectedNumber === 1) {
//     return array.map((a) => [a]);
//   }

//   array.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const combination = getAllCase(rest, selectedNumber - 1);
//     const joinedNumber = combination.map((a) => [fixed, ...a].join(''));

//     if (result > joinedNumber[0]) {
//       result = joinedNumber[0];
//     }
//   });

//   return result;
// }

// const getMax = (numbers) => {
//   const strings = numbers.map((a) => a + '');

//   const allCase = getAllCase(strings, strings.length);

//   const answer = allCase.sort((a, b) => b - a)[0];

//   return answer;
// };

const getMax = (numbers) => {
  const strings = numbers
    .map((a) => a + '' + a + a)
    .sort()
    .reverse()
    .map((a) => a.slice(0, a.length / 3));

  const answer = parseInt(strings.join(''), 10);
  return answer + '';
};

test('run', () => {
  expect(getMax([6, 10, 2])).toEqual("6210");
  expect(getMax([6, 10, 2, 0])).toEqual("62100");
  expect(getMax([3, 30, 34, 5, 9, 0])).toEqual("95343300");
  expect(getMax([3, 30, 50, 34, 5, 9, 1000])).toEqual("9550343301000");
  expect(getMax([0, 0, 0, 0])).toEqual("0");
});
