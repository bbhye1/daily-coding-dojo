// class Heap {
//   constructor() {
//     this._heap = [0];
//   }

//   getHeap() {
//     return this._heap;
//   }

//   getRoot() {
//     const root = this._heap.splice(1, 1);
//     return root[0];
//   }

//   insert(number) {
//     this._heap.push(number);
//     this.swap();
//   }

//   reset() {
//     this._heap = [0];
//   }

//   swap() {
//     let childIndex = this._heap.length - 1;
//     let child = this._heap[childIndex];

//     let parentIndex = Math.floor(childIndex / 2) || 1;
//     let parent = this._heap[parentIndex];

//     let newChildIndex;

//     while (parent > child) {
//       newChildIndex = parentIndex;
//       this._heap[newChildIndex] = child;
//       this._heap[childIndex] = parent;

//       parentIndex = Math.floor(newChildIndex / 2) || 1;
//       parent = this._heap[parentIndex];
//       childIndex = newChildIndex;
//     }
//   }
// }

// const q1 = (numbers) => {
//   const answer = [];
//   let binary = new Heap();

//   numbers.forEach((b) => {
//     if (b === 0) {
//       answer.push(binary.getRoot());
//     } else if (b === -1) {
//       return answer;
//     } else {
//       binary.insert(b);
//     }
//   })

//   return answer;
// };

// 삽입정렬
const q1 = (numbers) => {
  const answer = [];
  const order = [];

  numbers.forEach((a) => {
    console.log(answer, order);
    if (a === 0) {
      answer.push(order.shift());
    } else if (a === -1) {
      return;
    } else {
      let index = getIndex(a, order);
      order.splice(index, 0, a);
    }
  })
  return answer;
};

const getIndex = (a, order) => {
  for (let i = 0; i < order.length; i++) {
    if (a < order[i]) {
      return i;
    }
  }
  return order.length;
};

test('test', () => {
  expect(q1([5, 3, 6, 0, 5, 0, 2, 4, 0, -1])).toEqual([3, 5, 2]);
  expect(q1([95, 0, 41, 71, 96, 79, 5, 0, 8, 98, 86, 32, 23, 6, 75, 0, 92, 37, 13, 66, 77, 44, 89, -1])).toEqual([95, 5, 6]);
});
