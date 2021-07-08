function solution1(s) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  const result = [...s].reduce((acc, letter) => {
    if (Number(letter) >= 0) {
      acc[1] = `${acc[1]}${letter}`;
      return acc;
    }

    acc[0] += letter;

    if (numbers.includes(acc[0])) {
      const number = numbers.findIndex((a) => a === acc[0]);
      acc[0] = '';
      acc[1] = `${acc[1]}${number}`;
    }

    return acc;
  }, ['', '']);

  return +result[1];
}

function solution2(s) {
  const numbers = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  const result = [...s].reduce((acc, cur) => {
    if (Number(cur) >= 0) {
      return [acc[0], `${acc[1]}${cur}`];
    }

    acc[0] += cur;
    const number = numbers[acc[0]];
    return number ? ['', acc[1] + number] : acc;
  }, ['', '']);

  return +result[1];
}

function solution3(s) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  const result = numbers
    .reduce((acc, cur, i) => acc.replace(new RegExp(cur, 'g'), i), s);

  return +result;
}

function solution4(s) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  const result = numbers
    .reduce((acc, cur, i) => acc.replaceAll(cur, i), s);

  return +result;
}

test('solution', () => {
  [solution1, solution2, solution3, solution4].forEach((solution) => {
    expect(solution('one4seveneight')).toBe(1478);
    expect(solution('one')).toBe(1);
    expect(solution('onezero')).toBe(10);
    expect(solution('onezerozero')).toBe(100);
    expect(solution('onezero0one')).toBe(1001);
    expect(solution('23four5six7')).toBe(234567);
    expect(solution('2three45sixseven')).toBe(234567);
    expect(solution('one4seveneight')).toBe(1478);
    expect(solution('123')).toBe(123);
  });
});
