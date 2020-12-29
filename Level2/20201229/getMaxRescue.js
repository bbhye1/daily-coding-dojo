// 시간초과 
// const getMaxRescue = (people, limit) => {
//   const sortedPeople = [...people].sort((a, b) => a - b);
//   let answer = 0;

//   while (true) {
//     if (!sortedPeople.length) {
//       break;
//     }

//     if (sortedPeople[sortedPeople.length - 1] + sortedPeople[sortedPeople.length - 2] <= limit) {
//       sortedPeople.pop();
//       sortedPeople.pop();
//       console.log(1);
//       answer++;
//     } else if (sortedPeople[sortedPeople.length - 1] + sortedPeople[0] <= limit) {
//       console.log(2);
//       sortedPeople.pop();
//       sortedPeople.shift();
//       answer++;
//     } else {
//       console.log(3);
//       sortedPeople.pop();
//       answer++;
//     }
//   }

//   return answer;
// }

const getMaxRescue = (people, limit) => {
  people.sort((a, b) => a - b);
  let answer = 0;

  while (true) {
    if (!people.length) {
      break;
    }

    if (people[0] + people[people.length - 1] <= limit) {
      people.splice(0, 1);
      people.pop();
    } else {
      people.pop();
    }

    answer++;
  }

  return answer;
}


test('test', () => {
  expect(getMaxRescue([70, 50, 80, 50], 100)).toEqual(3);
  expect(getMaxRescue([70, 80, 50], 100)).toEqual(3);
  expect(getMaxRescue([100], 100)).toEqual(1);
  expect(getMaxRescue([100, 20, 50], 100)).toEqual(2);
  expect(getMaxRescue([50, 50, 50], 100)).toEqual(2);
  expect(getMaxRescue([70, 80, 90], 100)).toEqual(3);
  expect(getMaxRescue([10, 20, 30, 40, 50, 60, 70, 80, 90], 100)).toEqual(5);
  expect(getMaxRescue([40, 50, 60, 70, 80, 190, 200], 240)).toEqual(4);
});