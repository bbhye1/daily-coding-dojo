// const q2 = (numbers) => {
//   const increseNumber = [];
//   const direction = [];

//   while (true) {
//     const inscreseLastNumber = increseNumber[increseNumber.length - 1] || 0;

//     if (inscreseLastNumber > numbers[0] && inscreseLastNumber > numbers[numbers.length - 1]) {
//       break;
//     } else if (inscreseLastNumber < numbers[0] && inscreseLastNumber < numbers[numbers.length - 1]) {
//       if (numbers[0] < numbers[numbers.length - 1]) {
//         increseNumber.push(numbers.shift());
//         direction.push('L');
//       } else {
//         increseNumber.push(numbers.pop());
//         direction.push('R');
//       }
//     } else {
//       if (numbers[0] > numbers[numbers.length - 1]) {
//         increseNumber.push(numbers.shift());
//         direction.push('L');
//       } else {
//         increseNumber.push(numbers.pop());
//         direction.push('R');
//       }
//     }
//   }

//   const answer = [increseNumber.length, direction.join('')];

//   return answer;
// };

const q2 = (numbers) => {
  let direction = '';
  let lt = 0;
  let rt = numbers.length - 1;
  let last = 0;
  let tmp = [];

  while (lt <= rt) {
    if (numbers[lt] > last) {
      tmp.push([numbers[lt], 'L']);
    }
    if (numbers[rt] > last) {
      tmp.push([numbers[rt], 'R']);
    }
    tmp.sort((a, b) => a[0] - b[0]);

    if (tmp.length === 0) {
      break;
    } else {
      direction += tmp[0][1];
      last = tmp[0][0]
      if (tmp[0][1] === 'L') {
        lt += 1;
      } else {
        rt -= 1;
      }
    }
    tmp = [];
  }

  const answer = [direction.length, direction];
  return answer;
};

test('test', () => {
  expect(q2([2, 4, 5, 1, 3])).toEqual([4, 'LRLL']);
  expect(q2([3, 2, 10, 1, 5, 4, 7, 8, 9, 6])).toEqual([3, 'LRR']);
  expect(q2([29, 3, 63, 95, 47, 100, 28, 98, 42, 72, 37, 77, 27, 57, 61, 90, 55, 78, 94, 20, 40, 21, 82, 17, 33, 65, 38, 96, 44, 9, 19, 50, 75, 97, 85, 87, 10, 39, 14, 26, 83, 74, 30, 13, 91, 18, 76, 34, 58, 36, 53, 45, 66, 7, 41, 4, 1, 23, 16, 43, 64, 46, 68, 84, 48, 8, 25, 80, 81, 35, 32, 89, 99, 54, 22, 73, 93, 51, 86, 5, 60, 69, 71, 31, 70, 92, 56, 11, 88, 12, 67, 62, 52, 79, 6, 59, 15, 49, 2, 24])).toEqual([2, 'RL']);
});
