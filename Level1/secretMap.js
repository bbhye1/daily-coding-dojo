// 내가 원하는 것
// 원래 비밀지도를 해독해서 '#'과 공백으로 구성된 문자열 배열을 출력하라

// 내가 아는 것
// 한변의 길이가 n,
// 암호화된 정수배열 지도 1과 지도 2
// 벽을 1로 공백을 0으로 부호화했을때 얻어지는 이진수값의 배열이다.


// 조건
// 지도 : 한변의 길이가 n, 정사각형 배열, 각 칸은 공백 "" 또는 벽"#" 로 채워짐
// 두장의 지도 겹쳐보기 
// 지도 1 과 지도 2에서 하나라도 벽이면 전체에서 벽이다. 
// 지도 1 과 지도 2에서 모두 공백이면 전체에서 공백이다. 

// 계획
// 지도1 과 지도 2의 요소들을 각각 n개의 문자로 이루어진 2진법으로 변환한다. 
// 지도 1에 지도 2를 합친다.
// 1은 "#" 0은 " "로 변환한다.
// 변환한 배열을 출력한다. 

const getBinary = (n, arr) => {
  const binary = arr.map((a) => {
    let arr = a.toString(2).length === n
      ? a.toString(2)
      : '0'.repeat(n - a.toString(2).length) + a.toString(2);
    return arr.split('');
  });

  return binary;
}


const getSecret = (n, arr1, arr2) => {
  let secret1 = getBinary(n, arr1);
  let secret2 = getBinary(n, arr2);

  const result = secret1.map((a, i) => {
    return a.map((b, j) => {
      if (b == 1) {
        return "#"
      } else if (secret2[i][j] == 1) {
        return "#"
      }

      return " ";
    }).join('');
  });

  return result;
};

test('run', () => {
  expect(getSecret(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
    .toEqual(["#####", "# # #", "### #", "#  ##", "#####"]);
  expect(getSecret(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]))
    .toEqual(["######", "###  #", "##  ##", " #### ", " #####", "### # "]);
});
