// 통과한 풀이
// const getJadenCase = (s) => {
//   const wordArray = s.split(' ');

//   const result = wordArray.map((word) => {
//     if (!word) return word;

//     let newWord = word.toLowerCase().split('');
//     newWord.splice(0, 1, newWord[0].toUpperCase());

//     return newWord.join('');
//   }).join(' ');

//   return result;
// }

// 위의 풀이를 더 다듬은 것
const getJadenCase = (s) => {
  const wordArray = s.split(' ');

  const result = wordArray.map((word) => {
    if (!word) return word;

    let first = word[0].toUpperCase();
    let rest = word.substring(1).toLowerCase();

    return first + rest;
  }).join(' ');

  return result;
}

test('test', () => {
  expect(getJadenCase('3people unFollowed me')).toEqual('3people Unfollowed Me');
  expect(getJadenCase('for the last week')).toEqual('For The Last Week');
  expect(getJadenCase('hello    world')).toEqual('Hello    World');
});