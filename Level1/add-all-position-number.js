// 주어진 값 : 자연수 n
// 각 자릿수의 합 구하기 

// 나의 풀이 
function solution(n)
{
    let sum = 0;
    String(n).split('').forEach(v=>sum+=Number(v));
    return sum;
}

// 더 짧은 풀이 

function solution(n){
  // 쉬운방법
  return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

// 새로 배운점 
    (n+'')   // 숫자열은 이렇게 간단히 문자열로 만들 수 있다.  
