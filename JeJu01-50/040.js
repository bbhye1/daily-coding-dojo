const inset_1 = prompt('maxWeight');
const inset_2 = prompt('people');
const weight = [];

for(let i = 0; i < parseInt(inset_2); i++) {
  const eachWeight = prompt(`weight num${i+1}`);
  weight.push(parseInt(eachWeight));
}
  let count = 0; 
  let totalweight = 0;

  while (totalweight + weight[count] < parseInt(inset_1)) {
    totalweight += weight[count];
    count++;
  }

console.log(count);

// 같은데 더 간단한 풀이 

let total = 0;
let count = 0;
const limit = prompt('제한 무게를 입력하세요.');
const n = prompt('인원수를 입력하세요.');

for (let i=1; i<=n; i++){
  total += parseInt(prompt('무게를 입력해주세요.'), 10);
  if (total <= limit){
		count = i;
  }
}

console.log(count);