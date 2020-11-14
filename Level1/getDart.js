// 내가 원하는 것
// 총 점수

// 내가 아는 것
// dartResult: 점수|보너스|옵션

// 다트를 세번 던지는 기회
// 각 기회마다 얻을 수 있는 점수 0~10
// 점수 + Single(S), Double(D), Triple(T) 영역이 존재 
//  각 영역 당첨시 점수에서 1제곱, 2제곱, 3제곱으로 계산된다.
// 옵션으로 스타상(*), 아차상(#) 존재
//  스타상은 해당점수 와 바로 이전점수를 2배로 만든다.
//  아차상은 해당점수를 마이너스로 만든다.
//  스타상이 첫번째로 나오면 스타상 점수만 2배로 만든다.
//  스타상과 다른 스타상의 효과는 중첩할 수 있다.
//  스타상과 아차상의 효과는 중접할 수 있다. 아차상의 점수 두배 (-2배) 
//  Single(S), Double(D), Triple(T)는 점수마다 하나씩 존재
//  스타상과 아차상은 점수마다 둘중하나만 존재하고 없을 수도 있다. 

// 조건
// 점수는 0에서 10 사이의 정수이다.
// 보너스는 S, D, T 중 하나이다.
// 옵선은 *이나 # 중 하나이며, 없을 수도 있다.

// 계획
// 각 배열로 만든다.
// 숫자면 배열에 넣고 보너스면 배열의 마지막 요소에 **보너스
// 옵션이면 '*'이면 마지막요소와 그 전요소에 *2, "#"이면 해당요소 *-1;

const calculate = {
  S: 1,
  D: 2,
  T: 3,
  '*': 2,
  '#': -1,
}

const getDart = (dartResult) => {
  let result = [];

  const arr = dartResult.split('');
  arr.forEach((a, i) => {
    if (!calculate[arr[i - 1]] && a == 0) {
      result[result.length - 1] = 10;
    } else if (!calculate[a]) {
      result.push(a);
    }

    if (a === 'S' || a === 'D' || a === 'T') {
      result[result.length - 1] = result[result.length - 1] ** calculate[a];
    }

    if (a === '*') {
      result[result.length - 1] = result[result.length - 1] * 2;
      result[result.length - 2] = result[result.length - 2] * 2;
    }

    if (a === '#') {
      result[result.length - 1] = result[result.length - 1] * -1;
    }
  })

  const sum = eval(result.join('+'));
  return sum;
}

test('run', () => {
  expect(getDart('1S2D*3T')).toEqual(37);
  expect(getDart('1D2S#10S')).toEqual(9);
  expect(getDart('1D2S0T')).toEqual(3);
  expect(getDart('1S*2T*3S')).toEqual(23);
  expect(getDart('1D#2S*3S')).toEqual(5);
  expect(getDart('1T2D3D#')).toEqual(-4);
  expect(getDart('1D2S3T*')).toEqual(59);
});