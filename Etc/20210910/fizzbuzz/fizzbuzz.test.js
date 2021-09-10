// 1 ~ 100 까지 출력
// 3의 배수일때는 piz
// 5의 배수일때는 buz
// 3, 5 모두의 배수일때는 pizbuz

function solution() {
  return [...new Array(100)]
    .map((_, i) => {
      const number = i + 1;
      let message = '';

      if (number % 3 === 0) {
        message += 'fizz';
      }

      if (number % 5 === 0) {
        message += 'buzz';
      }

      return message || number;
    });
}

function solution1() {
  return [...new Array(100)]
    .map((_, i) => {
      const number = i + 1;
      const fizzMessage = number % 3 ? '' : 'fizz';
      const buzzMessage = number % 5 ? '' : 'buzz';

      return fizzMessage + buzzMessage || number;
    });
}

test('solution', () => {
  expect(solution1()).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 29, 'fizzbuzz', 31, 32, 'fizz', 34, 'buzz', 'fizz', 37, 38, 'fizz', 'buzz', 41, 'fizz', 43, 44, 'fizzbuzz', 46, 47, 'fizz', 49, 'buzz', 'fizz', 52, 53, 'fizz', 'buzz', 56, 'fizz', 58, 59, 'fizzbuzz', 61, 62, 'fizz', 64, 'buzz', 'fizz', 67, 68, 'fizz', 'buzz', 71, 'fizz', 73, 74, 'fizzbuzz', 76, 77, 'fizz', 79, 'buzz', 'fizz', 82, 83, 'fizz', 'buzz', 86, 'fizz', 88, 89, 'fizzbuzz', 91, 92, 'fizz', 94, 'buzz', 'fizz', 97, 98, 'fizz', 'buzz']);
});
