function solution1(people, limit) {
  people.sort((a, b) => a - b);
  let result = 0;

  while (people.length) {
    if (people[0] + people[people.length - 1] > limit) {
      people.pop();
    } else {
      people.shift();
      people.pop();
    }

    result++;
  }

  return result;
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution([70, 50, 80, 50], 100)).toBe(3);
    expect(solution([70, 80, 50], 100)).toBe(3);
  });
});
