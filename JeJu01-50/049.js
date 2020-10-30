const input = '10 9 8 7 6 5 4 3 2 1';

const arr = input.split(' ')
  .sort((a,b) => b-a);

  console.log(arr[0]);


  // 원래 답안

  let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  numbers.sort((a, b) => {
    return b-a;
  });
  
  console.log(numbers[0]);