const names = prompt('이름을 입력해 주세요').split(' ');
const scores = prompt('이름을 입력해 주세요').split(' ');


const result = names.reduce((name, index, result) => {
return { ...result, scores[index] : name };
}, {})


console.log(result);