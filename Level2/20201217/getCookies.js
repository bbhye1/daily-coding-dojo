
// 처음 풀이
const getArray = (cookies, selectedCookie) => {
  const result = [];

  if (selectedCookie === 1) {
    return cookies.map((a) => [a]);
  }

  cookies.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(index + 1)];
    const combination = getArray(rest, selectedCookie - 1);
    const sum = combination.map((a) => [fixed, ...a]);
    result.push(...sum);
  });

  return result;
};


const getCookies = (cookies, k) => {
  const answer = [];
  for (let i = cookies.length; i > 0; i--) {
    const cookieList = getArray(cookies, i);

    cookieList.forEach((cookieMethod) => {
      const sortedCookieMethod = [...cookieMethod].sort((a, b) => a - b);

      let isTrue = true;
      cookieMethod.forEach((a, i) => {
        if (a !== sortedCookieMethod[i]) {
          isTrue = false
          return;
        }
      });

      if (isTrue) {
        answer.push(cookieMethod);
      }
    })
  }
  const answerLength = answer[0].length;
  const sortedAnswer = answer
    .filter((a) => a.length === answerLength)
    .sort();

  return sortedAnswer[k - 1];
};

test('run', () => {
  expect(getCookies([1, 4, 2, 6, 5, 3], 2)).toEqual([1, 2, 5]);
});