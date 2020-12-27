// 첫번째 풀이
// const binary = (num) => {
//   let i = num;

//   const binaryArray = [];

//   while (true) {
//     if (Math.floor(i / 2) === 1) {
//       binaryArray.push(i % 2);
//       binaryArray.push(1);
//       break;
//     }

//     let a = i % 2;
//     i = Math.floor(i / 2);
//     binaryArray.push(a);
//   }

//   const oneLength = binaryArray.filter((a) => a === 1).length;

//   return oneLength;
// };


// const getNextNumber = (n) => {
//   let answer = n + 1;

//   const binaryN = binary(n);
//   console.log(n.toString(2));

//   while (true) {
//     if (binaryN === binary(answer)) break;
//     answer++;
//   }

//   return answer;
// }

// 같은 풀이인데 메서드 단축
const getNextNumber = (n) => {
  let answer = n + 1;

  const nOneLength = n.toString(2).split('').filter((a) => a == 1).length;

  while (true) {
    const oneLength = answer.toString(2).split('').filter((a) => a == 1).length;
    if (nOneLength === oneLength) break;
    answer++;
  }

  return answer;
}

test('test', () => {
  expect(getNextNumber(78)).toEqual(83);
  expect(getNextNumber(15)).toEqual(23);
});
