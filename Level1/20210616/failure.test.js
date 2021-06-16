function filterlastedStage(stageNumber, stages) {
  const filteredStage = stages
    .filter((i) => i >= stageNumber);

  return filteredStage;
}

function calculateFailure(stageNumber, lastStage, stages) {
  const nowStages = filterlastedStage(stageNumber, stages);

  const stagesSize = nowStages.length;

  const success = nowStages
    .filter((stage) => stage <= stageNumber)
    .length;

  return success / stagesSize;
}

function getStageFailures(N, stages) {
  const stageFailures = [...new Array(N)]
    .map((_, i) => i + 1)
    .map((stageNumber) => [stageNumber, calculateFailure(stageNumber, N + 1, stages)]);

  return stageFailures;
}

function sortStageByFailure(stageFailures) {
  return stageFailures
    .sort((a, b) => b[1] - a[1])
    .map(([stage, failure]) => stage);
}

function solution(N, stages) {
  const failures = getStageFailures(N, stages);

  return sortStageByFailure(failures);
}

test('solution', () => {
  const N = 5;
  const stage1 = [2, 1, 2, 6, 2, 4, 3, 3];
  expect(solution(N, stage1)).toEqual([3, 4, 2, 1, 5]);
  expect(solution(4, [4, 4, 4, 4])).toEqual([4, 1, 2, 3]);
});

test('calculateFailure', () => {
  expect(calculateFailure(1, 5, [2, 1, 2, 6, 2, 4, 3, 3])).toBe(1 / 8);
  expect(calculateFailure(4, 4, [4, 4, 4, 4])).toBe(1);
});

test('getStageFailures', () => {
  const N = 5;
  const stage1 = [2, 1, 2, 6, 2, 4, 3, 3];

  expect(getStageFailures(N, stage1)).toEqual([
    [1, 1 / 8],
    [2, 3 / 7],
    [3, 2 / 4],
    [4, 1 / 2],
    [5, 0 / 1],
  ]);
});

test('sortStageByFailure', () => {
  expect(sortStageByFailure([
    [1, 1 / 8],
    [2, 3 / 7],
    [3, 2 / 4],
    [4, 1 / 2],
    [5, 0 / 1],
  ])).toEqual([3, 4, 2, 1, 5]);
});

test('filterlastedStage', () => {
  expect(filterlastedStage(3, [1, 2, 3, 4])).toEqual([3, 4]);
  expect(filterlastedStage(3, [3, 3, 3, 3])).toEqual([3, 3, 3, 3]);
});
