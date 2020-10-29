const input = '18234';

let result = 0;

const number = input.split('').forEach((item) => {
  result += Number(item);
})

console.log(result);