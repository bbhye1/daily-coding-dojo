// for문
function getTotalDate1(month, date) {
  const dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 1; i < month; i++) {
    date += dates[i - 1];
  }

  return date - 1;
}

// while문
function getTotalDate2(month, date) {
  const dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let count = 1;
  let totalDate = date - 1;

  while (count < month) {
    totalDate += dates[count - 1];
    count++;
  }

  return totalDate;
}

// reduce
function getTotalDate3(month, date) {
  const dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return dates
    .slice(0, month - 1)
    .reduce((acc, number) => acc + number, date - 1);
}

// 재귀
function getTotalDate4(month, date) {
  if (month === 1) {
    return date - 1;
  }

  const dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return dates[month - 2] + getTotalDate4(month - 1, date);
}

function solution1(a, b) {
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const totalDate = getTotalDate1(a, b);

  return days[totalDate % 7];
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution(1, 1)).toBe('FRI');
    expect(solution(1, 2)).toBe('SAT');
    expect(solution(5, 24)).toBe('TUE');
  });
});

test('getTotalDate', () => {
  [
    getTotalDate1,
    getTotalDate2,
    getTotalDate3,
    getTotalDate4,
  ].forEach((getTotalDate) => {
    expect(getTotalDate(1, 2)).toBe(1);
    expect(getTotalDate(2, 21)).toBe(51);
    expect(getTotalDate(5, 24)).toBe(144);
  });
});
