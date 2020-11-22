// 내가 원하는 것
// x의 각 요소를 n만큼 민 문자열

// 내가 아는 것
// 문자열 x,
// 미는 거리 n

// 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다

// 계획
const day = 'abcdefghijklmnopqrstuvwxyz';
const getSecret = (s, n) => {
  const result = s.split('')
    .map((a) => {
      if (a === ' ') return ' ';
      if (a.toUpperCase() === a) {
        const aa = (day.indexOf(a.toLowerCase()) + n) % day.length;
        return day[aa].toUpperCase();
      }
      return day[(day.indexOf(a) + n) % day.length];
    }).join('');

  return result;
}