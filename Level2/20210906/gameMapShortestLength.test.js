// DFS
function go(map, lo = [0, 0], count = 0, result) {
  const newMap = JSON.parse(JSON.stringify(map));

  if (
    lo[0] === -1
      || lo[1] === -1
      || lo[0] > newMap.length - 1
      || lo[1] > newMap[0].length - 1
  ) {
    return;
  }

  if (lo[0] === newMap.length - 1
      && lo[1] === newMap[0].length - 1) {
    count += 1;
    result.push(count);
    return;
  }

  if (newMap[lo[0]][lo[1]] === 1) {
    newMap[lo[0]][lo[1]] = 0;
    count += 1;

    go(newMap, [lo[0] - 1, lo[1]], count, result);
    go(newMap, [lo[0] + 1, lo[1]], count, result);
    go(newMap, [lo[0], lo[1] - 1], count, result);
    go(newMap, [lo[0], lo[1] + 1], count, result);
  }
}

function solution1(maps) {
  const result = [];

  go(maps, [0, 0], 0, result);
  return result.length ? Math.min(...result) : -1;
}

// BFS
function isExisted(maps, now) {
  return now[0] === maps.length - 1
    && now[1] === maps[0].length - 1;
}

function isRoad(maps, location) {
  return maps[location[0]]
    && maps[location[0]][location[1]];
}

function solution2(maps) {
  const visit = [[0, 0, 0]];

  maps[0][0] = 0;

  while (visit.length) {
    const now = visit.shift();

    now[2] += 1;

    if (isExisted(maps, now)) {
      return now[2];
    }

    [[now[0] - 1, now[1]],
      [now[0] + 1, now[1]],
      [now[0], now[1] - 1],
      [now[0], now[1] + 1],
    ].forEach((location) => {
      if (isRoad(maps, location)) {
        maps[location[0]][location[1]] = 0;
        visit.push([...location, now[2]]);
      }
    });
  }

  return -1;
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution([
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ])).toBe(11);
    expect(solution([
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ])).toBe(-1);
  });
});
