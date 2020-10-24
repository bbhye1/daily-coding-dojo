// 입력
const scores = "97 86 75 66 55 97 85 97 97 95"; 

const array = scores.split(' ');

// 정보
//  1위부터 3위까지의 숫자의 개수 구하기. 
const sortArray = array
.sort((a,b) => a-b);

const resultArray = [];
let count = 0;

while (resultArray.length < 3) {
  const n = sortArray.pop();

  if(!resultArray.includes(n)) {
     resultArray.push(n);
  }

  count += 1;
} 

console.log(count);