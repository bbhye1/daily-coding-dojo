function solution1(n, lost, reserve) {
  const clothes = new Array(n).fill(1);
  reserve.forEach((i) => { clothes[i - 1] += 1; });
  lost.forEach((i) => { clothes[i - 1] -= 1; });

  const student = clothes
    .reduce((acc, cloth, i) => {
      if (cloth) {
        return [...acc, cloth];
      }

      if (acc[acc.length - 1] > 1) {
        acc[acc.length - 1] -= 1;
        return [...acc, 1];
      }

      if (clothes[i + 1] > 1) {
        clothes[i + 1] -= 1;
        return [...acc, 1];
      }

      return [...acc, 0];
    }, [])
    .filter((a) => a).length;

  return student;
}

function solution2(n, lost, reserve) {
  const noGymSuit = lost.reduce((acc, cur) => {
    const borrow = reserve.find((a) => Math.abs(a - cur) <= 1);

    if (!borrow) return [...acc, borrow];

    reserve = reserve.filter((a) => a !== borrow);
    return acc;
  }, []);

  return n - noGymSuit.length;
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);
    expect(solution(5, [2, 4], [3])).toBe(4);
    expect(solution(3, [3], [1])).toBe(2);
  });
});
