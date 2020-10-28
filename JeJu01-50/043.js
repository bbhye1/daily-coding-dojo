let number = 8; 
let array =[];

while(number > 0) {
array.push(String(number % 2));
number = Math.floor(number / 2);
}

const binary = array.reverse().join('');

console.log(binary);