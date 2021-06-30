// 배열메서드 1
function solution1(s) {
  const changeLetter = (letter, i) => (i % 2 === 0
    ? letter.toUpperCase()
    : letter.toLowerCase());

  const words = s
    .split(' ')
    .map((word) => {
      const chagedWord = word
        .split('')
        .map((letter, i) => changeLetter(letter, i)).join('');
      return chagedWord;
    })
    .join(' ');

  return words;
}

// 배열메서드 2
function solution2(s) {
  const changeLetter = (letter, i) => (i % 2 === 0
    ? letter.toUpperCase()
    : letter.toLowerCase());

  const result = s
    .split(' ')
    .reduce((acc, word) => {
      const changedWord = word
        .split('')
        .map((letter, i) => changeLetter(letter, i)).join('');
      return `${acc} ${changedWord}`;
    }, '')
    .trim();

  return result;
}

// for문
function solution3(s) {
  let changedWords = '';
  const words = s.split(' ');

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      const letter = words[i][j];

      if (j % 2 === 0) {
        changedWords += letter.toUpperCase();
      } else {
        changedWords += letter.toLowerCase();
      }
    }

    changedWords += ' ';
  }

  return changedWords.trim('');
}

// 정규표현식
function solution4(s) {
  return s
    .toUpperCase()
    .replace(/(\w)(\w)/g, (a) => a[0].toUpperCase() + a[1].toLowerCase());
}

test('solution', () => {
  [solution1, solution2, solution3, solution4].forEach((solution) => {
    expect(solution('try hello world')).toEqual('TrY HeLlO WoRlD');
  });
});
