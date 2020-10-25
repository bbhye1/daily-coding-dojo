// 입력정보 
// const names = prompt('').split(' ');
  const array = ["원범", "원범", "혜원","혜원","혜원","혜원","유진","유진"]

  // for문 대신 reduce 사용하기
  const result = array.reduce((result, name) => {
    result[name] = result[name] === undefined ? 1 : result[name] + 1;
    return  result;
  },{});

  // key 배열로 sort하기  
  const winner = Object.keys(result).sort((a,b) => 
    result[b] - result[a]
)[0];

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);

