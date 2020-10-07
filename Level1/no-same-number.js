function solution(arr) {
  var answer = arr.filter((item, index) => item !== arr[index + 1]);

  return answer;
}
