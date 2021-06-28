// while문 2.74초
function solution1(A, B, C) {
  let count = 1;
  while (A + (B * count) >= C * count) {
    if (C <= B) {
      count = -1;
      break;
    }

    count++;
  }

  return count;
}

// for문 2.396초
function solution2(A, B, C) {
  if (B >= C) {
    return -1;
  }

  for (let i = 1; ; i++) {
    if (A + (i * B) < i * C) {
      return i;
    }
  }
}

// reduce - A가 큰 수이면 스택 터짐
function solution3(A, B, C) {
  if (B >= C) {
    return -1;
  }

  const result = [...new Array(A)].reduce((acc) => {
    if (A + (acc * B) >= acc * C) {
      return acc + 1;
    }
    return acc;
  }, 1);

  return result;
}

// 재귀 - A가 큰 수이면 스택 터짐
function solution4(A, B, C, count = 1) {
  if (B >= C) {
    return -1;
  }

  if (A + (count * B) < count * C) {
    return count;
  }

  return solution4(A, B, C, count + 1);
}

test('solution', () => {
  [solution1, solution2, solution3, solution4].forEach((solution) => {
    expect(solution(1000, 70, 170)).toEqual(11);
    expect(solution(3, 2, 1)).toEqual(-1);
    expect(solution(2100000000, 9, 10)).toEqual(2100000001);
  });
});
