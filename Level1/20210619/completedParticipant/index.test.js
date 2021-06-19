// 첫번째 풀이 시간초과

function solution(participant, completion) {
  completion.forEach((name) => {
    const finishedIndex = participant
      .findIndex((participantName) => participantName === name);

    if (finishedIndex >= 0) {
      participant.splice(finishedIndex, 1);
    }
  });

  return participant[0];
}

test('solution', () => {
  expect(solution(
    ['leo', 'kiki', 'eden'],
    ['eden', 'kiki'],
  )).toBe('leo');
  expect(solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola'],
  )).toBe('vinko');
  expect(solution(
    ['mislav', 'stanko', 'mislav', 'ana'],
    ['stanko', 'ana', 'mislav'],
  )).toBe('mislav');
});

// 두번째 풀이 통과
function getCount(people) {
  return people.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
      return acc;
    }

    acc[cur] = 1;
    return acc;
  }, {});
}

function solution2(participant, completion) {
  const participantCount = getCount(participant);
  const completionCount = getCount(completion);
  const participantKeys = Object.keys(participantCount);

  return participantKeys
    .find((name) => participantCount[name] !== completionCount[name]);
}

test('getCount', () => {
  expect(getCount(['mislav', 'stanko', 'mislav', 'ana'])).toEqual({
    mislav: 2,
    stanko: 1,
    ana: 1,
  });
});

test('solution2', () => {
  expect(solution2(
    ['leo', 'kiki', 'eden'],
    ['eden', 'kiki'],
  )).toBe('leo');
  expect(solution2(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola'],
  )).toBe('vinko');
  expect(solution2(
    ['mislav', 'stanko', 'mislav', 'ana'],
    ['stanko', 'ana', 'mislav'],
  )).toBe('mislav');
});
