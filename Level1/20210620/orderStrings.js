function solution(strings, n) {
  const sortedByDictionary = strings.sort();
  return sortedByDictionary.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    }

    if (a[n] === b[n]) {
      return 0;
    }

    return -1;
  });
}

test('solution', () => {
  expect(solution(['sun', 'bed', 'car'], 1)).toEqual(['car', 'bed', 'sun']);
  expect(solution(['abce', 'abcd', 'cdx'], 2)).toEqual(['abcd', 'abce', 'cdx']);
});
