// 런타임에러
// const getFibo = (n) => {
//   if (n == 1 || n == 2) {
//     return 1;
//   }

//   return getFibo(n - 2) % 123457 + getFibo(n - 1) % 123457;
// };

const getFibo = (n) => {
  let cur = 1;
  let next = 1;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    cur = next;
    next = answer;
    answer = (next + cur) % 1234567;
  }

  return answer;
}

test('test', () => {
  expect(getFibo(3)).toEqual(2);
  expect(getFibo(5)).toEqual(5);
});
