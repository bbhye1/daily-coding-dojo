// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 길이 4 이상, 20이하인 문자열입니다.

// 내 풀이 : 맵으로 순환 

function solution(phone_number) {
    var answer = phone_number.split('').map((i, idx) => idx > phone_number.length - 5 ? i : '*' ).join('');
    return answer;
}

// 좋은 풀이 : 순환할 필요가 없음 잘라서 붙이면 됌
function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}