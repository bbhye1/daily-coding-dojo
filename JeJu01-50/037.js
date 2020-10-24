// 입력정보 
// const names = prompt('').split(' ');
  const array = ["원범", "원범", "혜원","혜원","혜원","혜원","유진","유진"]

  const result = array.reduce((result, name) => {
    result[name] = result[name] === undefined ? 1 : result[name] + 1;
    return  result;
  },{});

  const winner = Object.keys(result).sort((a,b) => 
    result[a] - result[b]
)[0];

