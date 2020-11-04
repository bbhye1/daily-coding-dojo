//  내풀이  : 단순하게 반복문으로 풀었는데 아래의 2를 나눈 몫만큼 곱하고 나머지를 더하는게 더 효율적. 
//  repeat()

function solution(n) {
    var answer = '';

    for( var i = 0; i < n; i++ ) {
        answer += i % 2 === 0 ? '수' : '박';
    }

    return answer;
}

// 다른사람 풀이 

function waterMelon(n){
  // n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
  return ("수박").repeat(n/2) + ((n%2) ? '수' : '');
}