function solution(msg) {
  const dictionary = [...new Array(26)].map((_, i) => String.fromCharCode(i + 65));

  let index = 0;
  let count = 1;
  const result = [];

  while (index < msg.length && count <= msg.length) {
    const number = dictionary
      .findIndex((a) => a === msg.slice(index, count));
    if (number > -1) {
      if (count === msg.length) {
        result.push(dictionary
          .findIndex((a) => a === msg.slice(index, count)) + 1);
      }
      count++;
    } else {
      dictionary.push(msg.slice(index, count));
      result.push(dictionary
        .findIndex((a) => a === msg.slice(index, count - 1)) + 1);
      index = count - 1;
    }
  }
  return result;
}

test('solution', () => {
  expect(solution('KAKAO')).toEqual([11, 1, 27, 15]);
  expect(solution('ABABABABABABABAB')).toEqual([1, 2, 27, 29, 28, 31, 30]);
  expect(solution('TOBEORNOTTOBEORTOBEORNOT')).toEqual(
    [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34],
  );
});
