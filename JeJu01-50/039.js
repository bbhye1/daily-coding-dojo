const text = 'hqllo my namq is hyqwon'; 

// map으로 순환해서 변경하기 
const insert = text.split(''); 
const result = insert.map((letter) => {
 return letter === 'q' ? 'e' : letter
}).join('');

console.log(result);

// split으로 자르고 e로 붙여서 만들기

const word = prompt('입력하세요.');

function replaceAll(str, searchStr, replaceStr) {
   return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word,"q","e"));