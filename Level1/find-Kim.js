function solution(seoul) {
  const index = seoul.findIndex(item => item === "Kim");

  const answer = `김서방은 ${index}에 있다`;
  return answer;
}

function solution2(seoul) {
  const index = seoul.indexOf("Kim");

  const answer = `김서방은 ${index}에 있다`;
  return answer;
}