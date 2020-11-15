// 내가 원하는 것
// 완주하지 못한 선수의 이름

// 내가 아는 것
// 마라톤에 참여한 선수들의 이름이 담긴 배열 :participant
// 완주한 선수들의 이름이 담긴 배열: completion

// 조건
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

// 계획
// 참여한 선수들의 이름을 정렬한다. 
// 완주한 선수들의 이름을 정렬한다. 
// 동일한 인덱스의 선수들의 이름을 비교해서 일치하지 않는 참여한 선수를 찾는다. 

const getFinish = (participant, completion) => {
  completion.forEach((a) => {
    participant.splice(participant.indexOf(a), 1);
  });
  return participant[0];
}



test('run', () => {
  expect(getFinish(['leo', 'kiki', 'eden'], ['eden', 'kiki'])).toEqual('leo');
  expect(getFinish(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])).toEqual('vinko');
  expect(getFinish(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])).toEqual('mislav');
});


// 효율성 제로