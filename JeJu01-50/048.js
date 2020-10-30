const input = 'AAABBBcccddd';

const result = input
    .split('')
    .map((item) => { 
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
    })
    .join('');

console.log(result);