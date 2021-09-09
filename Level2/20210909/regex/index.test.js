// 숫자 전 : head, 최소 한글자 이상
// 그 다음 숫자가 끝날때까지: number 0 부터 99999 사이의 수,
// 나머지: tail

// head를 기준으로 사전 순 정렬, 대소문자 구분 x
// 그 다음 number 숫자 오름차순 정렬, 012 === 12(앞자리 0 제거)
// 둘 다 같으면 원래 주어진 입력 순서대로 정렬

function solution(files) {
  const compare = (a, b) => {
    a = a.match(/([^0-9]*)([0-9]*)(.*)/i);
    b = b.match(/(\D*)([0-9]*)/i);
    let result = 0;

    const [a1, a2] = [a[1].toUpperCase(), parseInt(a[2], 10)];
    const [b1, b2] = [b[1].toUpperCase(), parseInt(b[2], 10)];

    result = a1.localeCompare(b1);

    if (result === 0) {
      if (a2 < b2) {
        result = -1;
        return result;
      }

      if (a2 > b2) {
        result = 1;
      }
    }

    return result;
  };

  files.sort(compare);
  return files;
}

test('solution', () => {
  expect(solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']))
    .toEqual(['img1.png', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png']);
  expect(solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat']))
    .toEqual(['A-10 Thunderbolt II', 'B-50 Superfortress', 'F-5 Freedom Fighter', 'F-14 Tomcat']);
  expect(solution(['A- 10 Thunderbolt II', 'F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat']))
    .toEqual(['A-10 Thunderbolt II', 'A- 10 Thunderbolt II', 'B-50 Superfortress', 'F-5 Freedom Fighter', 'F-14 Tomcat']);
});
