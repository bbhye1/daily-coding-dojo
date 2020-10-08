function solution(a, b, s = 0) {
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) s += i
  return s;
}
solution(3, 5);

function solution(a, b) {
  return (a + b) * (Math.abs(b - a) + 1) / 2;
}