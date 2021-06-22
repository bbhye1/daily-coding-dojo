function getPokemonTypesSize(nums) {
  const pokemonTypes = new Set();
  nums.forEach((number) => {
    pokemonTypes.add(number);
  });

  return pokemonTypes.size;
}

function solution(nums) {
  const maxSelection = nums.length / 2;
  const pokemonTypes = getPokemonTypesSize(nums);
  return maxSelection > pokemonTypes ? pokemonTypes : maxSelection;
}

test('solution', () => {
  expect(solution([3, 1, 2, 3])).toBe(2);
  expect(solution([3, 3, 3, 2, 2, 4])).toBe(3);
  expect(solution([3, 3, 3, 2, 2, 2])).toBe(2);
});

test('getPokemonTypesSize', () => {
  expect(getPokemonTypesSize([3, 1, 2, 3])).toEqual(3);
});
