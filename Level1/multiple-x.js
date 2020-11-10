// 입력받는 수 : 정수 x, 자연수 n
// x부터 시작해 x씩 증가하는 숫가를 n개 가진 배열 반환하기 

// 내 풀이 
function solution(x, n) {
  var answer = [];
for(let i = 1; i <= n; i++ ) {
    answer.push(i*x);
}
 return answer;
}

// 간단히 해보기  : fill 로 채울 수 있는것 명심하기 
function solution(x, n) {
const answer = Array(n).fill(x).map((i, index) => (index+1) * i);
 return answer;
}