// const q3 = (people) => {
//   let answer = people.length;

//   people.forEach(([height, weight]) => {
//     const heightfiterd = people.filter((a) => a[0] > height && a[1] > weight);

//     if (heightfiterd.length) {
//       answer -= 1;
//     }
//   });

//   return answer;
// };

const q3 = (people) => {
  people.sort((a, b) => b[0] - a[0]);
  let answer = 0;
  let max = 0;

  people.forEach(([height, weight], index) => {
    if (index === 0) {
      answer += 1;
      max = weight;
    }

    if (weight > max) {
      answer += 1;
      max = weight;
    }
  });

  return answer;
};

test('test', () => {
  expect(q3([[172, 67], [183, 65], [180, 70], [170, 72], [181, 60]])).toEqual(3);
  expect(q3([[177, 107], [205, 88], [179, 65], [165, 104], [180, 50], [166, 116], [199, 119], [171, 70], [176, 51], [207, 101]])).toEqual(2);
});
