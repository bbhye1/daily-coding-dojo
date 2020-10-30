const today = new Date();

console.log(today.getFullYear());


// 원래답안 

const d = new Date();

let year = d.getTime();
year = Math.floor(year/(3600*24*365*1000))+1970

console.log(year);