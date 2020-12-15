// 내 풀이
// 이상한 문자 출력
// 단어의 각 글자 인덱스가 짝수면 대문자 홀수면 소문자로 변환하여 출력 

function solution(s) {
  const array = s
  .split(' ')
  .map(item => item.split('')).map((item) => {
    return item.reduce((acc, cur, ind) => {
      return ind % 2 === 0 
        ? acc + cur.toUpperCase()
        : acc + cur.toLowerCase()
    },'');
  }).join(' ');
  return array;
}

solution('try hello world');


// 다른 신박한 풀이 (아직 이해못함)

function toWeirdCase(s){
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

}