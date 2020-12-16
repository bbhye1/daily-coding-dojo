const getCarpetSize = (brown, yellow) => {
  let yellowWidth;
  let yellowHeight;

  for (let i = 1; i <= yellow; i++) {
    if (i + (yellow / i) === (brown - 4) / 2) {
      yellowWidth = i;
      yellowHeight = yellow / i;
    }
  }

  return [yellowWidth + 2, yellowHeight + 2];

  // 처음 풀이 
  // if (yellow === 1) {
  //   return [yellow + 2, yellow + 2];
  // }

  // const yellowWidthAndHeight = (brown - 4) / 2;
  // const yellowFactor = [];
  // for (let i = 1; i <= yellow; i++) {
  //   if (yellow % i === 0) {
  //     yellowFactor.push(i);
  //   }
  // }

  // const yellowFactorLength = yellowFactor.length;
  // let small;
  // let big;

  // for (let i = 0; i < yellowFactorLength; i++) {
  //   const first = yellowFactor.shift();
  //   const last = yellowFactor.length ? yellowFactor.pop() : first;
  //   if (first + last === yellowWidthAndHeight) {
  //     small = first;
  //     big = last;
  //   }
  // }

  // return [big + 2, small + 2];
}

test('run', () => {
  expect(getCarpetSize(10, 2)).toEqual([4, 3]);
  expect(getCarpetSize(12, 4)).toEqual([4, 4]);
  expect(getCarpetSize(8, 1)).toEqual([3, 3]);
  expect(getCarpetSize(24, 24)).toEqual([8, 6]);
});