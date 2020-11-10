// 각 자릿수를 합해서 본래 숫자를 합으로 나누어 떨어지면 하샤드 수이다. 
// 하샤드 수인지 아닌지 구분하여 반환하기 

// 내 풀이  리듀스를 통해 더해줌
function solution(x) {
    const arr = x + " ";
    const sum = arr.split('').reduce((acc,cur) => {return( acc+= +cur)}, 0);
    var answer = x % sum ? false :true;
    return answer;
}

// 짧은 코드 답변 : 재귀함수 사용하기
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

