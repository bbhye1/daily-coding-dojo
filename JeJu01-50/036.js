const number = parseInt(prompt());

const result = [];
for (let i = 1; i <= 9; i++) {
    result.push(number * i)
}
console.log(result.join(' '));