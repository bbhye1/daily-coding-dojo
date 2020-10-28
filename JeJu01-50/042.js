// 입력받는 숫자
const month = 5;
const day = 24;

// 조건: 요일구하기 

const getDate = new Date(`2020.${month >= 10 ? month : '0'+ month}.${day >= 10 ? day : '0' + day}`);
console.log(getDate.getTime()/10000/60/24);
console.log(new Date(20200101));