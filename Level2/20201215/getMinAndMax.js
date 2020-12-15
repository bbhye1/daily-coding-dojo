const getMinAndMax = (string) => {
  const array = string.split(' ').sort((a, b) => a - b);

  return array[0] + ' ' + array[array.length - 1];
}

test('run', () => {
  expect(getMinAndMax("1 2 3 4")).toEqual("1 4");
  expect(getMinAndMax("-1 -2 -3 -4")).toEqual("-4 -1");
  expect(getMinAndMax("-1 -1")).toEqual("-1 -1");
});