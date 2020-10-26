// 주어진 값 
//  숫자
const number = 4;

// 상수 구하기 내 풀이 
function numberTest(number) {
  const array = [];

  for(let i = 1; i < number; i++) {
    if(number % i === 0) {
      array.push(i);
    } 
  }

return array.length === 1 ? 'YES' : 'NO';
}

console.log(numberTest(number));


// 다른 풀이

const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
  for (let i=2; i<num; i++) {
    const result = num % i;
    if (result === 0) {
      console.log('NO');
      return false;
    }
  }
  if (num === 1) {
    console.log('NO');
    return;
  }
  console.log('YES');
}

check_prime(num);