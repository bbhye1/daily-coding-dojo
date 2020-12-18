// 첫번째 풀이
// const getArray = (numbers, selectedNumber) => {
//   const result = [];
//   if (selectedNumber === 1) {
//     return numbers.map((a) => [a]);
//   }

//   numbers.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const combination = getArray(rest, selectedNumber - 1);
//     const sum = combination
//       .map((com) => [fixed, ...com]);

//     result.push(...sum);
//   })

//   return result;
// }

// const findDwarfs = (heights) => {
//   const dwarfs = getArray(heights, 7);
//   let answer;

//   dwarfs.forEach((a) => {
//     const reduce = a.reduce((acc, cur) => acc + cur);
//     if (reduce === 100) {
//       answer = a.sort((a, b) => a - b);
//       return;  
//     }
//   });

//   return answer;
// };

const getArray = (numbers, selectedNumber) => {
  const result = [];
  if (selectedNumber === 1) {
    return numbers.map((a) => [a]);
  }

  numbers.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const combination = getArray(rest, selectedNumber - 1);
    const sum = combination
      .map((com) => [fixed, ...com]);

    result.push(...sum);
  })

  return result;
}

const getRightDwarf = (array) => {
  const sum = array[0].reduce((acc, cur) => acc + cur);

  if (sum === 100) {
    return array[0];
  }

  return getRightDwarf(array.slice(1));
};

const findDwarfs = (heights) => {
  const dwarfs = getArray(heights, 7);

  const result = getRightDwarf(dwarfs);

  return result.sort((a, b) => a - b);
};

test('run', () => {
  expect(findDwarfs([20, 7, 23, 19, 10, 15, 25, 8, 13])).toEqual([7, 8, 10, 13, 19, 20, 23]);
});