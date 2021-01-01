const q3 = (orders) => {
  const array = new Array(20).fill(0).map((a, i) => i + 1);

  orders.forEach((order) => {
    const changed = order[1] - order[0];
    const reverse = array.splice(order[0] - 1, changed).reverse();
    array.splice(order[0], 0, ...reverse);
  });

  return array;
};

// const q3 = (orders) => {
//   const array = new Array(20).fill(0).map((a, i) => i + 1);

//   orders.forEach((order) => {
//     const changed = order[1] - order[0] + 1;
//     const reverse = array.slice(order[0] - 1, order[1]).reverse();
//     array.splice(order[0] - 1, changed, ...reverse);
//   });

//   return array;
// };

test('test', () => {
  expect(q3([
    [5, 10],
    [9, 13],
    [1, 2],
    [3, 4],
    [5, 6],
    [1, 2],
    [3, 4],
    [5, 6],
    [1, 20],
    [1, 20],
  ])).toEqual([1, 2, 3, 4, 10, 9, 8, 7, 13, 12, 11, 5, 6, 14, 15, 16, 17, 18, 19, 20]);
});
