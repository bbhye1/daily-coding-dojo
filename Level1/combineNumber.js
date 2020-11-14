// 내가 원하는 것
// 두 수의 [최대공약수, 최소공배수]

const { getConsoleOutput } = require("@jest/console");

// 내가 아는 것
// 두 수는 1이상의 자연수
// 최대 공약수 : 공통된 수로 나누었을 때 나누어 떨어지는 가장 작은수 
// 최소 공배수 : 두 수 혹은 그 이상 수들의 공통인 배수 x**n === y***m

// 조건

// 계획
// 두 수의 최대 공약수를 구한다. 
// 두 수의 서로수를 구한다. 
// 최대 공약수와 서로수를 곱해서 최소공배수를 구한다. 

const getMulti = (num1, num2) => {
  let arr = [1];
  let i = 2;

  while (i <= num1, i <= num2) {
    if (num1 % i === 0 && num2 % i === 0) {
      arr.push(i);
      num1 = num1 / i;
      num2 = num2 / i;
    } else {
      i++;
    }
  }

  const min = arr.reduce((acc, cur) => {
    return acc * cur
  }, 1);

  return min;
};

const getMultiLast = (num1, num2) => {
  let arr = [1];
  let i = 2;

  while (i <= num1, i <= num2) {
    if (num1 % i === 0 && num2 % i === 0) {
      arr.push(i);
      num1 = num1 / i;
      num2 = num2 / i;
    } else {
      i++;
    }
  }

  return num1 * num2;
};

const getNumbers = (num1, num2) => {
  const min = getMulti(num1, num2);
  const LastNumber = getMultiLast(num1, num2);

  const max = min * LastNumber;

  return [min, max];
};

test('run', () => {
  expect(getNumbers(3, 12)).toEqual([3, 12]);
  expect(getNumbers(2, 5)).toEqual([1, 10]);
});
