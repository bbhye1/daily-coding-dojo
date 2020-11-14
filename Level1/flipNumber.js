// 내가 원하는 것

// 내가 아는 것
// 자연수 n

// 조건
// 10진법수 n을 3진법으로 만들고 압 뒤 반전 후 10진법으로 만들기.

// 계획
// 조건과 동일


const getReverse = (n) => {
  const three = n.toString(3).split('').reverse().join('');
  const ten = parseInt(three, 3);
  return ten;
}

test('run', () => {
  expect(getReverse(45)).toEqual(7);
  expect(getReverse(125)).toEqual(229);
});
