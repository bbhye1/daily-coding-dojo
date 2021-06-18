function generateLetters(text) {
  return [...new Array(text.length)].map((_, i) => text[i]);
}

function chageLowerCase(text) {
  return text.toLowerCase();
}

function deleteSpecialText(text) {
  const letters = generateLetters(text);

  const filteredLetter = letters.filter((letter) => !'~!@#$%^&*()=+[{]}:?,<>/'.includes(letter));

  return filteredLetter.join('');
}

function changeToSingleDot(text) {
  const letters = generateLetters(text);

  return letters.reduce((acc, letter) => {
    if (acc[acc.length - 1] === '.' && letter === '.') {
      return acc;
    }

    return acc + letter;
  }, '');
}

function deleteEndDot(text) {
  const deletedFrontDot = text[0] === '.' ? text.slice(1) : text;
  const deletedEndDot = deletedFrontDot[deletedFrontDot.length - 1] === '.' ? deletedFrontDot.slice(0, deletedFrontDot.length - 1) : deletedFrontDot;
  return deletedEndDot;
}

function preventBlank(text) {
  return text.trim('') || 'a';
}

function preventOverLength(text) {
  return text.slice(0, 15);
}

function preventUnderLength(text) {
  const letters = [];

  for (let i = 0; i < 3; i++) {
    if (!text[i]) {
      letters.push(letters[letters.length - 1]);
    } else {
      letters.push(text[i]);
    }
  }

  return letters.join('');
}

function solution(newId) {
  const step1 = chageLowerCase(newId);
  const step2 = deleteSpecialText(step1);
  const step3 = changeToSingleDot(step2);
  const step4 = deleteEndDot(step3);
  const step5 = preventBlank(step4);
  const step6 = preventOverLength(step5);
  const step7 = deleteEndDot(step6);
  const step8 = step7.length > 2 ? step7 : preventUnderLength(step7);

  return step8;
}

test('solution', () => {
  expect(solution('...!@BaT#*..y.abcdefghijklm')).toBe('bat.y.abcdefghi');
  expect(solution('z-+.^.')).toBe('z--');
  expect(solution('=.=')).toBe('aaa');
  expect(solution('123_.def')).toBe('123_.def');
  expect(solution('abcdefghijklmn.p')).toBe('abcdefghijklmn');
});

test('generateLetters', () => {
  expect(generateLetters('jklm')).toEqual(['j', 'k', 'l', 'm']);
});

test('chageLowerCase', () => {
  expect(chageLowerCase('...!@BaT#*..y.abcdefghijklm')).toBe('...!@bat#*..y.abcdefghijklm');
});

test('deleteSpecialText', () => {
  expect(deleteSpecialText('...!@bat#*..y.abcdefghijklm')).toBe('...bat..y.abcdefghijklm');
  expect(deleteSpecialText('z-+.^.')).toBe('z-..');
  expect(deleteSpecialText('123_.def')).toBe('123_.def');
});

test('changeToSingleDot', () => {
  expect(changeToSingleDot('...bat..y.abcdefghijklm')).toBe('.bat.y.abcdefghijklm');
});

test('deleteEndDot', () => {
  expect(deleteEndDot('.bat.y.abcdefghijklm.')).toBe('bat.y.abcdefghijklm');
});

test('preventBlank', () => {
  expect(preventBlank(' ')).toBe('a');
  expect(preventBlank('')).toBe('a');
  expect(preventBlank('qqq')).toBe('qqq');
});

test('preventOverLength', () => {
  expect(preventOverLength('12345678910123456')).toBe('123456789101234');
});

test('preventUnderLength', () => {
  expect(preventUnderLength('12')).toBe('122');
  expect(preventUnderLength('1')).toBe('111');
});
