// 입력받은 정수의 약수의 합을 구해라 

// 내 풀이 : while문을 이용한 풀이 
function solution(n) {
    var answer = 0;
    var i = 1;
    while(i <= n ){
        if (n%i === 0){
            answer += i;
        }
        i++;
    }
    return answer;
}

// 많은 추천을 받은 풀이 : 재귀를 통한 결과도출 
// , 약수는 최대 그 수의 1/2를 넘지 않는 다는 점을 활용해 거기까지만 반복하고  
// 다음은 재귀를 통해 결과값인 b를 계산한다. 

function solution(n, a=0, b=0) {
    return n <= a/2 ?b :solution(n,a+1,b += (n%a ?0 :a));
}