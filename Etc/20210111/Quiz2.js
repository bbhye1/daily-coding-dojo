// class Heap2 {
//   constructor() {
//     this._heap = [0];
//   }

//   getHeap() {
//     return this._heap;
//   }

//   getRoot() {
//     const root = this._heap.splice(1, 1);
//     return root;
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

//     while (parent < child) {
//       newChildIndex = parentIndex;
//       this._heap[newChildIndex] = child;
//       this._heap[childIndex] = parent;

//       parentIndex = Math.floor(newChildIndex / 2) || 1;
//       parent = this._heap[parentIndex];
//       childIndex = newChildIndex;
//     }
//   }
// }

// const q2 = (numbers) => {
//   const answer = [];
//   let binary = new Heap2();

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

// 삽입 정렬
const q2 = (numbers) => {
  const answer = [];
  const order = [];

  numbers.forEach((a) => {
    if (a === 0) {
      answer.push(order.pop());
    } else if (a === -1) {
      return;
    } else {
      let index = order.length;
      order.forEach((b, i) => {
        if (a < b) {
          index = i;
        }
      });

      order.splice(index, 0, a);
    }
  })
  return answer;
};

test('test', () => {
  expect(q2([5, 3, 6, 0, 5, 0, 2, 4, 0, -1])).toEqual([6, 5, 5]);
});
