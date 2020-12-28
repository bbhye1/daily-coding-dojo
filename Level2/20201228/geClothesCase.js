const getClothesCase = (clothes) => {
  const reduced = clothes.reduce((acc, cur) => {
    if (!acc[cur[1]]) {
      acc[cur[1]] = 2;
      return acc;
    }

    acc[cur[1]] += 1;
    return acc;
  }, {})

  const answer = Object.values(reduced).reduce((acc, cur) => acc * cur) - 1;

  return answer;
}

test('test', () => {
  expect(getClothesCase([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])).toEqual(5);
  expect(getClothesCase([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])).toEqual(3);
});