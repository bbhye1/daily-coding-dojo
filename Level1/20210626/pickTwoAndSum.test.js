// for문
function selectAndSumTwo1(numbers) {
  const selectedNumbers = new Set();

  for (let i = 0; i < numbers.length; i++) {
    const rest = [...numbers.slice(0, i), ...numbers.slice(i + 1)];

    for (let j = 0; j < rest.length; j++) {
      selectedNumbers.add(numbers[i] + rest[j]);
    }
  }

  return [...selectedNumbers];
}

// reduce & forEach
function selectAndSumTwo2(numbers) {
  const result = numbers.reduce((acc, number, i) => {
    const rest = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
    rest.forEach((restNumber) => {
      acc.add(number + restNumber);
    });
    return acc;
  }, new Set());

  return [...result];
}

// 재귀
function selectAndSumTwo3(numbers, count = 0, sum = []) {
  if (count === numbers.length) {
    return sum;
  }

  const number = numbers[count];
  const rest = [...numbers.slice(0, count), ...numbers.slice(count + 1)];

  rest.forEach((restNumber) => {
    sum.push(number + restNumber);
  });

  return selectAndSumTwo3(numbers, count + 1, [...new Set(sum)]);
}

function solution1(numbers) {
  const sums = selectAndSumTwo1(numbers);

  return sums.sort((a, b) => a - b);
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
  });
});

test('selectAndSumTwo', () => {
  [selectAndSumTwo1, selectAndSumTwo2, selectAndSumTwo3].forEach((selectAndSumTwo) => {
    expect(selectAndSumTwo([2, 1, 3])).toEqual([3, 5, 4]);
    expect(selectAndSumTwo([2, 1, 3, 4])).toEqual([3, 5, 6, 4, 7]);
  });
});
