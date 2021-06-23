function solution1(phoneNumber) {
  return phoneNumber.split('')
    .map((number, i) => {
      if (i < phoneNumber.length - 4) {
        return '*';
      }
      return number;
    }).join('');
}

function solution2(phoneNumber) {
  return '*'.repeat(phoneNumber.length - 4) + phoneNumber.slice(phoneNumber.length - 4);
}

function solution3(phoneNumber) {
  return phoneNumber.replace(/\d(?=\d{4})/g, '*');
}

test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution('01033334444')).toBe('*******4444');
    expect(solution('027778888')).toBe('*****8888');
  });
});
