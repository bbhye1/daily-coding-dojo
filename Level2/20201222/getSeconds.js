// 처음 풀이 : 정답이나 시간초과로 실패 
// class Queue {
//   constructor(num, weight, waiting) {
//     this._bridgeWeight = weight;
//     this._bridge = new Array(num).fill(0);
//     this._waiting = waiting;
//     this._count = 0;
//   }

//   enqueue() {
//     const next = [...this._bridge.slice(1), this._waiting[0]].reduce((acc, cur) => acc + cur);

//     this.dequeue();

//     if (next <= this._bridgeWeight) {
//       this._bridge.push(this._waiting.shift());
//     } else {
//       this._bridge.push(0);

//     }
//   }

//   dequeue() {
//     const passed = this._bridge.shift();
//     this._count += 1;
//   }

//   isFinished() {
//     return this._waiting.length === 0 && !this._bridge.find((a) => a > 0);
//   }

//   seconds() {
//     while (!this.isFinished()) {
//       this.enqueue();
//     }

//     return this._count;
//   }

// }

// const getSeconds = (bridge_length, weight, truck_weights) => {
//   const bridge = new Queue(bridge_length, weight, truck_weights);
//   const answer = bridge.seconds();

//   return answer;
// };

class Queue {
  constructor(num, weight, waiting) {
    this._bridgeWeight = weight;
    this._bridge = new Array(num).fill(0);
    this._waiting = waiting;
    this._nowWeight = 0;
    this._count = 0;
  }

  enqueue() {
    this.dequeue();

    if (this._nowWeight + this._waiting[0] <= this._bridgeWeight) {
      const upNextTruck = this._waiting.shift();
      this._bridge.push(upNextTruck);
      this._nowWeight += upNextTruck;
    } else {
      this._bridge.push(0);
    }
  }

  dequeue() {
    const passed = this._bridge.shift();
    this._count += 1;
    this._nowWeight -= passed;
  }

  isFinished() {
    return this._waiting.length === 0 && !this._bridge.find((a) => a > 0);
  }

  seconds() {
    while (!this.isFinished()) {
      this.enqueue();
    }

    return this._count;
  }

}

const getSeconds = (bridge_length, weight, truck_weights) => {
  const bridge = new Queue(bridge_length, weight, truck_weights);
  const answer = bridge.seconds();
  return answer;
};

test('test', () => {
  expect(getSeconds(2, 10, [7, 4, 5, 6])).toEqual(8);
  expect(getSeconds(100, 100, [10])).toEqual(101);
  expect(getSeconds(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toEqual(110);
});

