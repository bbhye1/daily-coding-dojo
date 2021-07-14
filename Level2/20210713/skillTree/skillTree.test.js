function solution1(skill, skillTrees) {
  const trees = skillTrees
    .map((tree) => [...tree]
      .filter((a) => skill.includes(a))
      .join(''));

  const result = trees
    .filter((a) => skill.startsWith(a));

  return result.length;
}

// 정규표현식
function solution2(skill, skillTrees) {
  return skillTrees
    .map((tree) => tree
      .replace(new RegExp(`[^${skill}]`, 'g'), ''))
    .filter((a) => skill.startsWith(a))
    .length;
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])).toBe(2);
  });
});
