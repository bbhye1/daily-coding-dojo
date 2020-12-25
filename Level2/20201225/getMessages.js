const messages = {
  Enter: '님이 들어왔습니다.',
  Leave: '님이 나갔습니다.',
};

const getMessages = (record) => {
  const idSet = new Map();
  let result = [];

  record
    .map((a) => a.split(' '))
    .forEach(([type, id, name]) => {
      if (type === 'Enter' || type === 'Change') {
        idSet.set(id, name);
      }

      if (type === 'Enter' || type === 'Leave') {
        result.push([type, id]);

      }
    });

  const answer = result.map(([type, id]) => {
    return idSet.get(id) + messages[type];
  });

  return answer;
}

test('test', () => {
  expect(getMessages([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ]))
    .toEqual([
      "Prodo님이 들어왔습니다.",
      "Ryan님이 들어왔습니다.",
      "Prodo님이 나갔습니다.",
      "Prodo님이 들어왔습니다.",
    ]);
});