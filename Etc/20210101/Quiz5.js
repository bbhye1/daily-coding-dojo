// 내가 푼 풀이
// const q5 = (m, a) => {
//   let answer = 0;

//   for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j <= a.length; j++) {
//       if (a.slice(i, j).reduce((acc, cur) => acc + cur) === m) {
//         console.log(a.slice(i, j));
//         answer += 1;
//       }
//     }
//   }

//   return answer;
// };

// 앞뒤 칸을 이동해서 푸는 풀이 
const q5 = (m, a) => {
  let answer = 0;
  let i = 0;
  let j = i + 1;
  let sum = a[0]

  while (i < a.length) {
    if (sum < m) {
      if (m < a.length) {
        sum += a[j];
        j += 1;
        console.log(sum);
      } else {
        break;
      }
    } else if (sum === m) {
      answer += 1;
      sum -= a[i];
      i += 1;
    }
    else {
      sum -= a[i];
      i += 1;
    }
  }

  return answer;
};

test('test', () => {
  expect(q5(3, [1, 2, 1, 3, 1, 1, 1, 2])).toEqual(5);
});
