function changeBinaryBlock(n, arr) {
  const binary = [...new Array(n)].map((_, i) => {
    const binaryNumber = arr % 2;
    arr = Math.floor(arr / 2);
    return binaryNumber ? '#' : ' ';
  }).reverse();

  return binary;
}

function solution1(n, arr1, arr2) {
  const vinaryArr1 = arr1.map((number) => changeBinaryBlock(n, number));
  const vinaryArr2 = arr2.map((number) => changeBinaryBlock(n, number));

  const secret = vinaryArr1.map((line, i) => line.map((block, j) => {
    if (block === '#' || vinaryArr2[i][j] === '#') {
      return '#';
    }
    return ' ';
  }).join(''));

  return secret;
}

function solution2(n, arr1, arr2) {
  const result = arr1.map((a, i) => (a | arr2[i])
    .toString(2)
    .padStart(n, 0)
    .replace(/0/g, ' ')
    .replace(/1/g, '#'));
  return result;
}

test('solution', () => {
  [solution1,solution2].forEach((solution) => {
    expect(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(['#####', '# # #', '### #', '#  ##', '#####']);
  })
});

test('changeBinaryBlock', () => {
  expect(changeBinaryBlock(5, 9)).toEqual([' ', '#', ' ', ' ', '#']);
  expect(changeBinaryBlock(5, 20)).toBe(['#', ' ', '#', ' ', ' ']);
});
