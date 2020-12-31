// 내 풀이
// const q3 = (number) => {
//   const answer = [2];
//   for (let i = 3; i <= number; i++) {
//     let isPrime = true;

//     for (let j = 2; j >= 2; j--) {
//       if (i % j === 0) {
//         isPrime = false;
//       }
//     }

//     if (isPrime) {
//       answer.push(i);
//     }
//   }

//   return answer.length;
// };

// 에라토스테네스 체
const q3 = (number) => {
  const answer = [];
  const array = new Array(number).fill(0);
  for (let i = 2; i <= number; i++) {
    if (array[i] === 0) {
      array[i] = 1;
      answer.push(i);

      for (let j = i + 1; j <= number; j++) {
        if (j % i === 0) {
          array[j] = 1;
        }
      }
    }
  }
  return answer.length;
};

test('test', () => {
  expect(q3(200000)).toEqual(8);
});