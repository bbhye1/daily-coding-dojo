// const q3 = (n, m) => {
//   const nArray = n.split('');

//   const answer = m.map(order => {
//     const newOrder = [];
//     const array = order
//       .split('')
//       .forEach((a) => {
//         if (nArray.includes(a) && !newOrder.includes(a)) {
//           newOrder.push(a);
//         }
//       });

//     return newOrder.join('').includes(n) ? 'yes' : 'no';
//   });

//   return answer;
// };

const q3 = (n, m) => {
  const answer = m.map(order => {
    const nArray = n.split('');
    let result = 'yes';

    order
      .split('')
      .forEach((a) => {
        if (nArray.includes(a)) {
          if (nArray.shift() !== a) {
            result = 'no';
          }
        }
      });

    if (nArray.length) {
      result = 'no';
    }

    return result;
  });

  return answer;
};

test('test', () => {
  expect(q3('CBA', ['CBDAGE', 'FGCDAB', 'CTSBDEA'])).toEqual(['yes', 'no', 'yes']);
  expect(q3('AFC', ['AFFDCCFF'])).toEqual(['yes']);
  expect(q3('POIUYTREW', [
    'ASDPFOGIHJUKYZTXRCEVWBNM',
    'QASWDFEGRHTCJVYK',
    'PBOVICXZSDUAYFTGRHEJWKL',
    'KJHDGAFQZWXECRVTBY',
    'WOPASFKGHDEF',
    'MPNBVCXZSAOFIGUHYJTKREW',
    'MZCTSBDEA',
    'NKJHDGAFQZWXECRVTBY',
    'OQASWDFEGRHTCJVYK'])).toEqual(['yes', 'no', 'yes', 'no', 'no', 'yes', 'no', 'no', 'no']);
});
