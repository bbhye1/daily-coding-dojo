const q1 = (numbers, orders) => {
  let answer = 0;
  orders.forEach(([column, direction, count]) => {
    console.log(column, direction, count);
    for (let i = 0; i < count; i++) {
      if (direction) {
        const num = numbers[column - 1].pop();
        numbers[column - 1].unshift(num);
      } else {
        const num = numbers[column - 1].shift();
        numbers[column - 1].push(num);
      }
    }
  });

  const middleNumber = Math.floor(numbers.length / 2);

  let start = 0;
  let end = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = start; j <= end; j++) {
      answer += numbers[i][j];
    }

    if (i < middleNumber) {
      start += 1;
      end -= 1;
    } else {
      start -= 1;
      end += 1;
    }
  }

  return answer;
};

const q1 = (numbers, orders) => {
  let answer = 0;

  orders.forEach(([column, direction, count]) => {
    console.log(column, direction, count);
    for (let i = 0; i < count; i++) {
      if (direction) {
        const num = numbers[column - 1].pop();
        numbers[column - 1].unshift(num);
      } else {
        const num = numbers[column - 1].shift();
        numbers[column - 1].push(num);
      }
    }
  });

  const middleNumber = Math.floor(numbers.length / 2);

  let start = 0;
  let end = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = start; j <= end; j++) {
      answer += numbers[i][j];
    }

    if (i < middleNumber) {
      start += 1;
      end -= 1;
    } else {
      start -= 1;
      end += 1;
    }
  }

  return answer;
};

test('test', () => {
  expect(q1([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ], [
    [2, 0, 3],
    [5, 1, 2],
    [3, 1, 4]])).toEqual(362);
});
