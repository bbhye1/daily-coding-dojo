// 내가 원하는 것
// 체육 수업을 들을 수 있는 학생의 최댓값 (체육복을 입은 학생의 최댓값)

// 내가 아는 것
// 전체 학생 수 n
// 체육복을 도난당한 학생 번호 배열 lost
// 여벌의 체육복을 가져온 학생 배열 reserve

// 조건
// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

// 계획
// 전체 학생 수를 배열로 만들기
// 여벌의 체육복을 가져온 학생 배열에는 2, 그냥 학생은 1로 체육복 수를 전체 배열에 부여하기
// 체육복을 도난당한 학생의 수에 -1을 하고
// 0인 학생의 앞뒤를 탐색하여 1을 가져와 도난 학생은 1로 준 학생은 1로 변경하기
// 0이 아닌 요소가 몇개인지 확인하기. 

const getAttendant = (n, lost, reserve) => {
  const students = new Array(n).fill(1);
  reserve.forEach(i => {
    students[i - 1] += 1;
  });

  lost.forEach(i => {
    students[i - 1] -= 1;
  });

  students.forEach((a, i) => {
    if (a === 0) {
      if (students[i - 1] === 2) {
        students[i - 1] -= 1;
        students[i] = 1;
      } else if (students[i + 1] === 2) {
        students[i + 1] -= 1;
        students[i] = 1;
      }
    }
  });

  const answer = students.filter(i => i).length;

  return answer;
};

test('run', () => {
  expect(getAttendant(5, [2, 4], [1, 3, 5])).toEqual(5);
  expect(getAttendant(5, [2, 4], [3])).toEqual(4);
  expect(getAttendant(3, [3], [1])).toEqual(2);
});
