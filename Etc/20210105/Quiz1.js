const q1 = (c, numbers) => {
  let answer = 0;
  numbers.sort((a, b) => a - b);

  let lt = 1;
  let rt = numbers[numbers.length - 1];


  while (lt <= rt) {
    let count = 1;
    let endpoint = 0;

    const mid = Math.floor((lt + rt) / 2);

    for (let i = endpoint + 1; i < numbers.length - 1; i++) {
      if (numbers[i] - numbers[endpoint] >= mid) {
        count += 1;
        endpoint = i;
      }
    }

    console.log(lt, rt, mid, count);
    if (count >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }

  }

  return answer;
};

test('test', () => {
  expect(q1(3, [1, 2, 8, 4, 9])).toEqual(3);
});
