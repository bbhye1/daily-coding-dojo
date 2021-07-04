function solution1(numbers, target) {
  let answer = 0;

  function plus(count, sum = 0) {
    if (count === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    plus(count + 1, sum + numbers[count]);
    plus(count + 1, sum - numbers[count]);
  }

  plus(0, 0);
  return answer;
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
  });
});
