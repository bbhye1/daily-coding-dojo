// const q1 = (words, poemWords) => {
//   let answer = '';

//   words.forEach((word) => {
//     if (!poemWords.includes(word)) {
//       answer = word;
//     }
//   });

//   return answer;
// };

// 딕셔너리 해쉬 
const q1 = (words, poemWords) => {
  const result = {};
  let answer = '';

  words.forEach((word) => {
    result[word] = 1;
  });

  poemWords.forEach((word) => {
    result[word] = 0;
  });

  for (let i in result) {
    if (result[i] === 1) {
      answer = i;
    }
  }

  return answer;
};

test('test', () => {
  expect(q1(
    ['big', 'good', 'sky', 'blue', 'mouse'],
    ['sky', 'good', 'mouse', 'big']
  )).toEqual('blue');
});
