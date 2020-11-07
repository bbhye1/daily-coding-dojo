// 정수가 어떤 양의 정수의 제곱근인지 아닌지 판별

function solution(n) {
  let answer = -1;
  
for (let i = 1; i <= n; i++) {
  if(i**2 === n) {
    answer = (i+1)**2;
      break;
  }
}
  return answer
}