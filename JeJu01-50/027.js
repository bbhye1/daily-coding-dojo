const names = prompt('이름을 입력해 주세요').split(' ');
const scores = prompt('이름을 입력해 주세요').split(' ');

const result = {};

names.forEach((name, index) => {
  result[name] = scores[index];
});

console.log(result);