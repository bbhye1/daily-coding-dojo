function solution1(arr) {
  const result = arr.reduce((acc, number) => {
    let min = Math.min(acc, number);

    while (min > 0) {
      if (acc % min === 0 && number % min === 0) {
        acc = (acc * number) / min;
        break;
      }
      min--;
    }

    return acc;
  }, 1);

  return result;
}

function solution2(arr) {
  return arr.reduce((a, b) => a * b / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution([1, 2, 3])).toBe(6);
    expect(solution([2, 6, 8, 14])).toBe(168);
    expect(solution([3, 4, 9, 16])).toBe(144);
  });
});
