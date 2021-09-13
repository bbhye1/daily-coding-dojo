function isPossible(min, n, times) {
  const people = times
    .reduce((count, time) => count + Math.floor(min / time), 0);

  return people >= n;
}

function search(condition, high, low = 0) {
  if (low > high) {
    return low;
  }

  const mid = Math.floor((low + high) / 2);

  if (condition(mid)) {
    return search(condition, mid - 1, low);
  }

  return search(condition, high, mid + 1);
}

function solution(n, times) {
  const MAX = 1000000000 * n;

  const result = search((x) => isPossible(x, n, times), MAX);
  return result;
}

function search2(arr, condition) {
  let low = 0;
  let high = arr.length - 1;
  let result = 0;

  while (true) {
    if (high < low) {
      break;
    }

    const mid = Math.floor((low + high) / 2);

    if (condition(arr[mid])) {
      high = mid - 1;
      result = mid;
    } else {
      low = mid + 1;
    }
  }

  return result;
}

test('solution', () => {
  expect(solution(6, [7, 10])).toBe(28);
});

test('condition', () => {
  expect(isPossible(30, 6, [7, 10])).toBeTruthy();
  expect(isPossible(17, 6, [7, 10])).toBeFalsy();
});

test('search', () => {
  expect(search(
    (x) => x > 4,
    10,
  )).toBe(5);
});
