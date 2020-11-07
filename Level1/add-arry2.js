//  행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과출력

function solution(arr1, arr2) {
  var answer = arr1.map((a,i) => a.map((b,j) =>  b + arr2[i][j])
  );
  return answer;
}