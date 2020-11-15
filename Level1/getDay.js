// 내가 원하는 것
// 

// 내가 아는 것

// 조건

// 계획
const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const getDay = (a, b) => {
  const date = new Date(2016, a - 1, b).getDay();
  return day[date];
}



test('run', () => {
  expect(getDay(5, 24)).toEqual('TUE');
});