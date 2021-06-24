// 배열로 만들어서 더하기
function sumNumbers1(arr) {
  return `${arr}`
    .split('')
    .reduce((acc, number) => acc + parseInt(number, 10), 0);
}

// while문
function sumNumbers2(arr) {
  let sum = 0;

  while (arr >= 1) {
    sum += arr % 10;
    arr = Math.floor(arr / 10);
  }

  return sum;
}

// while문을 꼬리 재귀로
function sumNumbers3(arr, count) {
  if (arr < 1) {
    return count;
  }

  const sum = count + (arr % 10);
  const dividedArr = Math.floor(arr / 10);

  return sumNumbers3(dividedArr, sum);
}

// 그냥 재귀로
function sumNumbers4(arr) {
  if (arr < 10) {
    return arr;
  }

  const number = arr % 10;
  const dividedArr = Math.floor(arr / 10);

  return number + sumNumbers4(dividedArr);
}

function solution(arr) {
  return !(arr % sumNumbers1(arr));
}

test('solution', () => {
  expect(solution(10)).toBe(true);
  expect(solution(12)).toBe(true);
  expect(solution(11)).toBe(false);
  expect(solution(13)).toBe(false);
});

test('sumNumbers', () => {
  [sumNumbers1, sumNumbers2, sumNumbers4].forEach((sumNumbers) => {
    expect(sumNumbers(10)).toBe(1);
    expect(sumNumbers(70)).toBe(7);
    expect(sumNumbers(134)).toBe(8);
  });
});

test('sumNumbers3', () => {
  expect(sumNumbers3(10, 0)).toBe(1);
  expect(sumNumbers3(70, 0)).toBe(7);
  expect(sumNumbers3(134, 0)).toBe(8);
});
