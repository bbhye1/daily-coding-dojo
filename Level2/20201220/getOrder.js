// 첫번 째 풀이 
// const getOrderedArray = (priorities) => {
//   const rest = [...priorities].slice(1);
//   const isBig = rest.find((a) => a[0] > priorities[0][0]);

//   if (isBig) {
//     rest.push(priorities[0]);
//     return getOrderedArray(rest);
//   }

//   return priorities;
// }

// const getOrder = (priorities, location) => {
//   const indexArray = priorities.map((a, i) => [a, i]);
//   const orderedArray = getOrderedArray(indexArray);
//   const result = orderedArray.findIndex((a) => a[1] === location) + 1

//   return result;
// };

// 두번째 풀이 
// const getOrder = (priorities, location) => {
//   const indexArray = priorities.map((a, i) => [a, i]);

//   for (let i = 0; i < priorities.length; i++) {
//     const first = indexArray.shift();
//     const isBig = indexArray.find((a) => a[0] > first[0]);

//     if (!isBig) {
//       indexArray.unshift(first);
//     } else {
//       indexArray.push(first);

//     }
//   }

//   const result = indexArray.findIndex((a) => a[1] === location) + 1

//   return result;
// };

class Queue {
  constructor() {
    this._arr = [];
  }

  enqueue(item) {
    this._arr.push(item);
  }

  dequeue() {
    return this._arr.shift();
  }

  find(item) {
    return this._arr.find((a) => a[0] > item[0]);
  }

  length() {
    return this._arr.length;
  }
}

const getOrder = (priorities, location) => {
  const array = new Queue();

  const indexArray = priorities
    .map((a, i) => [a, i])
    .forEach((a) => {
      array.enqueue(a);
    });

  const order = [];

  while (array.length()) {
    const a = array.dequeue();
    const isBig = array.find(a);
    if (isBig) {
      array.enqueue(a);
    } else {
      order.push(a);
    }
  }

  const answer = order.findIndex((a) => a[1] === location) + 1;
  return answer;
};

test('run', () => {
  expect(getOrder([2, 1, 3, 2], 2)).toEqual(1);
  expect(getOrder([1, 1, 9, 1, 1, 1], 0)).toEqual(5);
  expect(getOrder([1, 1, 9, 1, 9, 1], 2)).toEqual(1);
});
