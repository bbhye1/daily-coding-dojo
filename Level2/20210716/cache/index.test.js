function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  const [, cachetime] = cities
    .reduce((acc, city) => {
      const cityName = city.toUpperCase();
      const [set, time] = acc;

      if (set.has(cityName)) {
        set.delete(cityName);
        return [set.add(cityName), time + 1];
      }

      if (set.size >= cacheSize) {
        const oldest = set.values().next().value;
        set.delete(oldest);
      }

      return [set.add(cityName), time + 5];
    }, [new Set(), 0]);

  return cachetime;
}

test('solution', () => {
  expect(solution(3, ['Jeju'])).toBe(5);
  expect(solution(3, ['Jeju', 'Seoul'])).toBe(10);
  expect(solution(3, ['Jeju', 'Seoul', 'LA'])).toBe(15);
  expect(solution(3, ['Jeju', 'Seoul', 'LA', 'NewYork'])).toBe(20);
  expect(solution(3, ['Jeju', 'Seoul', 'LA', 'Jeju'])).toBe(16);
  expect(solution(20, ['Jeju', 'Seoul', 'LA', 'Jeju'])).toBe(16);
  expect(solution(3, ['Jeju', 'Seoul', 'LA', 'Seoul'])).toBe(16);
  expect(solution(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])).toBe(50);
  expect(solution(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul'])).toBe(21);
  expect(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])).toBe(25);
  expect(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork'])).toBe(16);
});
