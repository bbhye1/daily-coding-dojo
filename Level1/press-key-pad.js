// 내가 원하는 것
// 두 수의 [최대공약수, 최소공배수]

// 내가 아는 것
// 두 수는 1이상의 자연수
// 최대 공약수 : 공통된 수로 나누었을 때 나누어 떨어지는 가장 작은수 
// 최소 공배수 : 두 수 혹은 그 이상 수들의 공통인 배수 x**n === y***m

// 조건

// 계획
// 두 수의 약수를 모두 구한다. 
// 공약수 (1부터 시작해서 나누어 떨어져서 몫이 1일 때까지 구함.)
// 두 수의 공약수를 구한다. 
// 곱해서 최대 공약수를 구한다. 
// 최소 공배수 : 두수의 약수를 합쳐서 곱을 해준 뒤 최대 공약수로 나눠준다. 
// 

const getNumbers = (num1, num2) => {
  const num1Multi = getMulti(num1);
  const num2Multi = getMulti(num2);

  const num1Multi = getMulti(num1);
  const num2Multi = getMulti(num2);

  // 겹치는 부분을 구한다. 
  const minArray = num1Multi.filter((a) => { num2Multi.includes(a) });
  const maxArray = num1Multi.concat(num2Multi) - minArray;

  const min = minArray.reduce((acc, cur) => {
    return acc * cur
  }, 0);

  const max = maxArray.reduce((acc, cur) => {
    return acc * cur
  }, 0) / min;
};

test('run', () => {
  expect(getNumbers(3, 12)).toEqual([3, 12]);
});
