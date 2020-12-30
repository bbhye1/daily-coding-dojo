const getAverage = (scores) => {
  const average = Math.round(scores.reduce((acc, cur) => acc + cur) / scores.length);
  let averageStudent = Math.abs(average - scores[0]);
  const result = []

  scores.forEach((a, i) => {
    if (Math.abs(average - a) <= averageStudent) {

      averageStudent = Math.abs(average - a);
      result.push([a, i]);
    }
  });

  const answer = result.sort((a, b) => b[0] - a[0])[0][1] + 1;
  return [average, answer];
};

test('test', () => {
  expect(getAverage([45, 73, 66, 87, 92, 67, 75, 79, 75, 80])).toEqual([74, 7]);
});
