const calculator = {
  S: (nums) => {
    nums.push(nums.pop() ** 1);
    return nums;
  },
  D: (nums) => {
    nums.push(nums.pop() ** 2);
    return nums;
  },
  T: (nums) => {
    nums.push(nums.pop() ** 3);
    return nums;
  },
  '*': (nums) => {
    const num1 = nums.pop();
    const num2 = nums.pop();

    if (num2) {
      nums.push(num2 * 2);
      nums.push(num1 * 2);
      return nums;
    }
    nums.push(num1 * 2);
    return nums;
  },
  '#': (nums) => {
    nums.push(-nums.pop());
    return nums;
  },
};

function solution2(dartResult) {
  const dartGames = dartResult.split('');

  const scores = dartGames.reduce((acc, dart, i) => {
    console.log(acc, i);
    if (Number(dart) >= 0) {
      if (dart === '0' && dartGames[i - 1] === '1') {
        acc.pop();
        return [...acc, 10];
      }
      return [...acc, Number(dart)];
    }

    return calculator[dart](acc);
  }, []);

  return scores.reduce((acc, cur) => acc + cur, 0);
}

test('solution', () => {
  [solution2].forEach((solution) => {
    expect(solution('1S2D*3T')).toEqual(37);
    expect(solution('1D2S#10S')).toEqual(9);
    expect(solution('1D2S0T')).toEqual(3);
    expect(solution('1S*2T*3S')).toEqual(23);
    expect(solution('1D#2S*3S')).toEqual(5);
    expect(solution('1T2D3D#')).toEqual(-4);
    expect(solution('1D2S3T*')).toEqual(59);
  });
});

test('calculator', () => {
  expect(calculator['*']([1, 2, 3, 4])).toEqual([1, 2, 6, 8]);
  expect(calculator['*']([1])).toEqual([2]);
  expect(calculator['#']([2])).toEqual([-2]);
  expect(calculator['S']([2])).toEqual([2]);
  expect(calculator['D']([2])).toEqual([4]);
  expect(calculator['T']([2])).toEqual([8]);
});
