const q1 = (word) => {
  const origin = word.toUpperCase();
  const reversedWord = origin.split('').reverse().join('');

  return origin === reversedWord ? 'yes' : 'no';
};

test('test', () => {
  expect(q1('level')).toEqual('yes');
  expect(q1('abcba')).toEqual('yes');
  expect(q1('gooG')).toEqual('yes');
  expect(q1('moon')).toEqual('no');
  expect(q1('soon')).toEqual('no');
});
