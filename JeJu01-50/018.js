const scores = prompt().split(' ');
const result = scores.reduce((item, result) => {return Number(item) + Number(result) });
console.log(result / scores.length );