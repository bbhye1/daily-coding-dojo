// 큰 수 만들기
function solution1(numbers) {
  const result = '';
  const sorted = numbers
    .sort((a, b) => {
      const case1 = a.toString();
      const case2 = b.toString();
      return (result + case2 + case1) - (result + case1 + case2);
    });
  return sorted.every((a) => a === 0) ? '0' : sorted.join('');
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution([6, 10, 2])).toBe('6210');
    expect(solution([3, 30, 34])).toBe('34330');
    expect(solution([0, 30, 34])).toBe('34300');
    expect(solution([0, 70, 71, 11, 100, 34])).toBe('717034111000');
    expect(solution([0, 0, 0, 1])).toBe('1000');
    expect(solution([3, 100, 1])).toBe('31100');
    expect(solution([0, 0, 0, 0])).toBe('0');
  });
});
