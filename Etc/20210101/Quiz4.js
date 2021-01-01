const q4 = (array1, array2) => {
  return array1.concat(array2).sort((a, b) => a - b);
};

const q4 = (array1, array2) => {
  const answer = [];
  let i = 0;
  let j = 0;

  while (true) {
    if (!array1[i] || !array2[j]) {
      answer.push(...array1.slice(i));
      answer.push(...array2.slice(2));
      break;
    }

    if (array1[i] <= array2[j]) {
      answer.push(array1[i]);
      i++;
    } else {
      answer.push(array2[j]);
      j++;
    }
  }

  return answer;
};


test('test', () => {
  expect(q4([1, 3, 5], [2, 3, 6, 7, 9])).toEqual([1, 2, 3, 3, 5, 6, 7, 9]);
});
