// 정리정리~~
/*
현재 위치에 선다.
count(탐색 카운트)를 하나 추가한다.

지금 현재 서있는 위치에서
위 아래 왼 오 를 탐색해서 '1'이라면 대기열에 추가한다.
과거의 위치라면 탐색 안한다.

대기열에서 꺼내서 다시 큐에 추가한다.
이때 현재의 위치는 과거의 위치로 기록한다.

이걸 현재의 위치가 [n-1, m-1] 때까지 반복하고
그러면 이때의 count 반환
*/

function solution(n, m, miro) {
  // 미로를 배열로 만들어주기
  const miroArray = miro
    .map((a) => a
      .toString()
      .split(''));

  const queue = [[0, 0, 1]];
  let answer = 0;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();
    if (x === n - 1 && y === m - 1) {
      answer = count;
    }

    miroArray[x][y] = '0';

    if (miroArray[x - 1] && miroArray[x - 1][y] === '1') {
      queue.push([x - 1, y, count + 1]);
    }

    if (miroArray[x + 1] && miroArray[x + 1][y] === '1') {
      queue.push([x + 1, y, count + 1]);
    }

    if (miroArray[x][y - 1] && miroArray[x][y - 1] === '1') {
      queue.push([x, y - 1, count + 1]);
    }

    if (miroArray[x][y + 1] && miroArray[x][y + 1] === '1') {
      queue.push([x, y + 1, count + 1]);
    }
  }

  return answer;
}

test('solution', () => {
  expect(solution(4, 6, [
    101111,
    101010,
    101011,
    111011,
  ])).toBe(15);
  expect(solution(4, 6, [
    110110,
    110110,
    111111,
    111101,
  ])).toBe(9);
  expect(solution(7, 7, [
    1011111,
    1110001,
    1000001,
    1000001,
    1000001,
    1000001,
    1111111,
  ])).toBe(13);
  expect(solution(2, 25, [
    1011101110111011101110111,
    1110111011101110111011101,
  ])).toBe(38);
});
