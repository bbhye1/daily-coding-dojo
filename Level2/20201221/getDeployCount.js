// class Stack {
//   constructor() {
//     this._arr = [];
//   }

//   push(item) {
//     this._arr.push(item);
//   }

//   pop() {
//     return this._arr.pop();
//   }

//   isEmpty() {
//     return this._arr.length === 0;
//   }

//   progress() {
//     this._arr = this._arr.map(([a, b]) => [a + b, b]);
//   }

//   peek() {
//     return this._arr[this._arr.length - 1];
//   }

//   runProcess() {
//     while (this.peek()[0] < 100) {
//       this.progress();
//     }
//   }
// }


// const getDeployCount = (progresses, speeds) => {
//   const progressesArray = progresses.map((a, i) => [a, speeds[i]]).reverse();
//   const stack = new Stack();

//   progressesArray.forEach((a) => {
//     stack.push(a);
//   });

//   const answer = [];

//   while (!stack.isEmpty()) {
//     stack.runProcess();

//     let count = 0;
//     while (!stack.isEmpty() && stack.peek()[0] >= 100) {
//       stack.pop();
//       count++;
//     }

//     answer.push(count);
//   }

//   return answer;
// };

const getDeployCount = (progresses, speeds) => {
  const answer = [0];
  let days = progresses.map((a, i) => Math.ceil((100 - a) / speeds[i]));
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
};

test('run', () => {
  expect(getDeployCount([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
  expect(getDeployCount([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([1, 3, 2]);
});