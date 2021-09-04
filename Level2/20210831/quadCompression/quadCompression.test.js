function split(arr) {
  if (arr.length === 1) {
    return [arr[0][0]];
  }

  const flat = arr.flat();
  const set = new Set(flat);

  if (set.size === 1) {
    return [arr[0][0]];
  }

  const half = arr.length / 2;

  return [...split([...arr].slice(0, half).map((a) => [...a].slice(0, half))),
    ...split([...arr].slice(0, half).map((a) => [...a].slice(half))),
    ...split([...arr].slice(half).map((a) => [...a].slice(0, half))),
    ...split([...arr].slice(half).map((a) => [...a].slice(half)))];
}

function solution(arr) {
  return split(arr)
    .reduce((a, c) => {
      a[c] += 1;
      return a;
    }, [0, 0]);
}

test('solution', () => {
  expect(solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])).toEqual([4, 9]);
  expect(solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])).toEqual([10, 15]);
});
