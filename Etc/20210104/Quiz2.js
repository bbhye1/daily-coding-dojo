const q2 = (n, numbers) => {
  let answer = 0;
  let max = Math.max(...numbers);

  let lt = 1;
  let rt = max;

  while (lt <= rt) {
    let standard = Math.floor((lt + rt) / 2);

    let nums = numbers
      .map((a) => Math.floor(a / standard))
      .reduce((acc, cur) => acc + cur);
    if (nums >= n) {
      answer = standard;
      lt = standard + 1;
    } else {
      rt = standard - 1;
    }

    console.log(standard, answer);
  }

  return answer;
};

test('test', () => {
  expect(q2(11, [802, 743, 457, 539])).toEqual(200);
});