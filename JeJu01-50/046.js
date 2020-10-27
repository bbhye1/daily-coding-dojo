//  주어진 숫자
const num1 = 1;
const num2 = 20;
let total = 0;          
for(let i = num1; i <= num2; i++) {
    if(i <10) {
      total += i;          
      ;
    }                
    total += Math.floor(i/10);
    total += (i % 10);
}
 console.log(total);

 // 다른 풀이
let arr = [];
let sum = 0;

for (let i=0; i<20; i++){
  arr[i] = i+1;
}

arr.forEach((n) => {
  while(n !== 0){
    sum += (n % 10);
    n = Math.floor(n/10);
  }
})

console.log(sum);