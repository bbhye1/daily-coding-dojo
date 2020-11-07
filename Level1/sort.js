// 정수 n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 반환하기

function solution(n) {
  const answer = n.toString().split('').sort((a,b) => (b - a)).join('');
  return Number(answer);
}

// 더 나은 풀이
function solution(n) {
  const number = n+'';
  const answer = number.split('').sort((a,b) => (b - a)).join('');
  return +answer;
}