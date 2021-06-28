// 재귀: 문제가 있음
function pickThreeNumbers1(nums, count = 3) {
  if (count === 1) {
    return nums.map((a) => [a]).slice(0, 1);
  }

  const sums = [];
  const letters = [];

  nums.forEach((num, i, origin) => {
    const rest = [...origin.slice(i + 1), ...origin.slice(0, i)];
    const combination = pickThreeNumbers1(rest, count - 1);
    [...combination].forEach((com) => {
      const numbers = [num, ...com].sort((a, b) => a - b);
      const numbersString = numbers.toString();

      if (!letters.includes(numbersString)) {
        sums.push(numbers);
        letters.push(numbersString);
      }
    });
  });

  return sums;
}

// for문 정상적으로 풀림
function pickThreeNumbers2(nums) {
  const threeNumbers = [];

  for (let i = 0; i < nums.length; i++) {
    const restI = nums.slice(i + 1);
    for (let j = 0; j < restI.length; j++) {
      const restJ = restI.slice(j + 1);
      for (let k = 0; k < restJ.length; k++) {
        const threeNumber = [nums[i], restI[j], restJ[k]];
        threeNumbers.push(threeNumber);
      }
    }
  }
  return threeNumbers;
}

function sumNumbers(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

function isPrime(n) {
  const numbers = [...new Array(n)].map((_, i) => i + 1);
  const dividedNumbers = numbers
    .filter((i) => n % i === 0);

  return dividedNumbers.length === 2;
}

function solution1(nums) {
  const threeNumber = pickThreeNumbers2(nums);
  const sums = threeNumber.map((numbers) => sumNumbers(numbers));
  const primes = sums.filter((a) => isPrime(a));

  return primes.length;
}

test('solution', () => {
  [solution1].forEach((solution) => {
    expect(solution([1, 2, 3, 4])).toEqual(1);
    expect(solution([1, 2, 7, 6, 4])).toEqual(4);
  });
});

test('pickThreeNumbers', () => {
  [pickThreeNumbers1, pickThreeNumbers2].forEach((pickThreeNumbers) => {
    expect(pickThreeNumbers([1, 2, 3, 4]).length).toBe(4);
    expect(pickThreeNumbers([1, 2, 3, 4, 5]).length).toBe(10);
  });
});

test('sumNumbers', () => {
  expect(sumNumbers([1, 2, 3])).toBe(6);
  expect(sumNumbers([1, 4, 5])).toBe(10);
});

test('isPrime', () => {
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(7)).toBeTruthy();
  expect(isPrime(13)).toBeTruthy();
  expect(isPrime(4)).toBeFalsy();
  expect(isPrime(8)).toBeFalsy();
  expect(isPrime(24)).toBeFalsy();
});
