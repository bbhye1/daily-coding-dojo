// while문
function solution1(n) {
  let count = 1;

  while (count <= n) {
    if (count ** 2 === n) {
      return (count + 1) ** 2;
    }

    count++;
  }

  return -1;
}

// Math.sqrt() 사용
function solution2(n) {
  const sqrt = Math.sqrt(n);
  return sqrt - Math.floor(sqrt) === 0 ? (sqrt + 1) ** 2 : -1;
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(121)).toEqual(144);
    expect(solution(44)).toEqual(-1);
    expect(solution(3)).toEqual(-1);
  });
});
