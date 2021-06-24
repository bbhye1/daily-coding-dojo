// reduce
function getGreatestCommonFactor1(min, max) {
  const numbers = [...new Array(Math.ceil(max / 2))].map((_, i) => i + 1);

  return numbers.reduce((acc, cur) => {
    acc = (min % cur) === 0 && max % cur === 0 ? cur : acc;
    return acc;
  }, 0);
}

// for문
function getGreatestCommonFactor2(min, max) {
  let GCF = 1;

  for (let i = Math.ceil(max / 2); i >= 1; i--) {
    if (!(min % i) && !(max % i)) {
      GCF = i;
      return GCF;
    }
  }

  return GCF;
}

// while문
function getGreatestCommonFactor3(min, max) {
  let GCF;
  let number = Math.ceil(max / 2);

  while (!GCF) {
    if (!(min % number) && !(max % number)) {
      GCF = number;
      break;
    }
    number -= 1;
  }

  return GCF;
}

// while문 유클리드 호제법
function getGreatestCommonFactor4(min, max) {
  while (min) {
    const tep = max % min;
    max = min;
    min = tep;
  }

  return max;
}

// 재귀
function getGreatestCommonFactor5(min, max, GCP = Math.ceil(max / 2)) {
  if (!(min % GCP) && !(max % GCP)) {
    return GCP;
  }

  return getGreatestCommonFactor5(min, max, GCP - 1);
}

//  유클리드 호제법

function getGreatestCommonFactor6(min, max) {
  if (max % min === 0) {
    return min;
  }

  return getGreatestCommonFactor6(max % min, min);
}

function solution1(n, m) {
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  const GCF = getGreatestCommonFactor1(min, max);
  const LCM = (min * max) / GCF;
  return [GCF, LCM];
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution(3, 12)).toEqual([3, 12]);
    expect(solution(2, 5)).toEqual([1, 10]);
  });
});

test('getGreatestCommonFactor', () => {
  [
    getGreatestCommonFactor1,
    getGreatestCommonFactor2,
    getGreatestCommonFactor3,
    getGreatestCommonFactor4,
    getGreatestCommonFactor5,
    getGreatestCommonFactor6,
  ].forEach((getGreatestCommonFactor) => {
    expect(getGreatestCommonFactor(3, 12)).toBe(3);
    expect(getGreatestCommonFactor(9, 12)).toBe(3);
  });
});
