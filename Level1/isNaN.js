function solution(s) {
  const filterd = s.split('').filter((item) => Number(item + 1));
  const result = (s.length === 4 || s.length === 6) && s.length === filterd.length;
  return result;
}


