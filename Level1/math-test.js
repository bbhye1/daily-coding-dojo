// 내가 원하는 것
// 가장 많이 문제를 맞춘 사람 배열.

// 내가 아는 것
// 1번 수포자 [1,2,3,4,5] 반복
// 2번 수포자 [2,1,2,3,2,4,2,5] 반복
// 3번 수포자 [3,3,1,1,2,2,4,4,5,5,] 반복

// 조건
// 문제의 정답은 1,2,3,4,5중 하나 
// 가장 많이 맞춘 사람이 여럿이면 오름차순 정렬

// 계획
// answer의 길이 만큼 찍는 패턴길이를 늘려준다. 
// 각 수포자들의 답과 정답의 인덱스를 비교해서 정답을 걸러낸다.
// 개수가 가장 많은 수포자를 찾는다. 
const person1 = [1, 2, 3, 4, 5];
const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const getMaxAnswer = (answers) => {
  const answer = [];

  const one = answers.filter((a, i) => a === person1[i % person1.length]).length;
  const two = answers.filter((a, i) => a === person2[i % person2.length]).length;
  const three = answers.filter((a, i) => a === person3[i % person3.length]).length;
  const max = Math.max(one, two, three);

  if (one === max) { answer.push(1) };
  if (two === max) { answer.push(2) };
  if (three === max) { answer.push(3) };

  // const students = [person1, person2, person3];

  // const studentsAnswer = students.map((student) => answers
  //   .map((answer, index) => student[(index % student.length)]));

  // const studentscorrect = studentsAnswer
  //   .map((studentanswer) => studentanswer.filter((answer, i) => answer === answers[i]))
  //   .map((answers, i) => [answers.length, i + 1]);

  // const max = Math.max.apply(null, [studentscorrect[0][0], studentscorrect[1][0], studentscorrect[2][0],]);

  // const answer = studentscorrect
  //   .filter((a) => a[0] === max)
  //   .map(a => a[1]);
  return answer;
};


test('run', () => {
  expect(getMaxAnswer([1, 2, 3, 4, 5])).toEqual([1]);
  expect(getMaxAnswer([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
  expect(getMaxAnswer([1, 1, 1])).toEqual([1, 2, 3]);
  expect(getMaxAnswer([3, 1])).toEqual([2, 3]);
  expect(getMaxAnswer([2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, 2, 1,])).toEqual([2]);
});