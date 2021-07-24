function getMinutes1(start, end) {
  const minutes = (s) => (+s.substr(0, 2) * 60) + +s.substr(3);
  return minutes(end) - minutes(start);
}

function getMinutes2(start, end) {
  const startTime = start.split(':').map((a) => Number(a));
  const endTime = end.split(':').map((a) => Number(a));

  return ((endTime[0] - startTime[0]) * 60) + (endTime[1] - startTime[1]);
}

function split(musicNote) {
  return [...musicNote]
    .reduce((a, c) => {
      if (c === '#') {
        a[a.length - 1] = a[a.length - 1] + c;
        return a;
      }
      return [...a, c];
    }, []);
}

function getPlayedMusic(minutes, music) {
  const musicSheet = split(music);

  return [...new Array(minutes)]
    .map((a, i) => musicSheet[i % musicSheet.length]);
}

function solution(m, musicinfos) {
  const infos = musicinfos
    .map((musicinfo) => musicinfo.split(','))
    .reduce((acc, info) => {
      const minutes = getMinutes1(info[0], info[1]);
      const playedMusic = getPlayedMusic(minutes, info[3]);
      const musicNote = split(m);
      let result = false;

      for (let i = 0; i <= playedMusic.length - musicNote.length; i++) {
        const origin = musicNote.join('');
        const compare = playedMusic.slice(i, i + musicNote.length).join('');

        if (origin === compare) {
          result = true;
        }
      }
      return result ? [...acc, [info[2], minutes]] : acc;
    }, []);

  const songName = [...infos]
    .sort((a, b) => b[1] - a[1]);
  return songName[0] ? songName[0][0] : '(None)';
}

test('solution', () => {
  expect(solution('ABCDEFG', [
    '12:00,12:14,HELLO,CDEFGAB',
    '13:00,13:05,WORLD,ABCDEF',
  ])).toBe('HELLO');
  expect(solution('CC#BCC#BCC#BCC#B', [
    '03:00,03:30,FOO,CC#B',
    '04:00,04:08,BAR,CC#BCC#BCC#B',
  ])).toBe('FOO');
  expect(solution('ABC', [
    '12:00,12:14,HELLO,C#DEFGAB',
    '13:00,13:05,WORLD,ABCDEF',
  ])).toBe('WORLD');
  expect(solution('ABC', [
    '12:00,12:14,HELLO,C#DEFGAB',
    '13:00,13:05,WORLD,ABCDEF',
    '13:00,13:07,PEACE,ABCDEF',
  ])).toBe('PEACE');
  expect(solution('ABC', [
    '12:00,12:14,HELLO,C#DEFGAB',
    '13:00,13:05,WORLD,ABCDEF',
    '13:00,13:05,PEACE,ABCDEF',
  ])).toBe('WORLD');
  expect(solution('BBB', [
    '12:00,12:14,HELLO,C#DEFGAB',
    '13:00,13:05,WORLD,ABCDEF',
    '13:00,13:05,PEACE,ABCDEF',
  ])).toBe('(None)');
  expect(solution('ABC', [
    '12:00,12:14,HELLO,ABC#DABCD',
  ])).toBe('HELLO');
});

test('getMinutes', () => {
  [getMinutes1, getMinutes2].forEach((getMinutes) => {
    expect(getMinutes('12:00', '12:14')).toBe(14);
    expect(getMinutes('13:50', '14:10')).toBe(20);
  });
});

test('getPlayedMusic', () => {
  expect(getPlayedMusic(14, 'CDEFGAB')).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B']);
  expect(getPlayedMusic(10, 'C#D#E#')).toEqual(['C#', 'D#', 'E#', 'C#', 'D#', 'E#', 'C#', 'D#', 'E#', 'C#']);
});

test('split', () => {
  expect(split('CDEFGAB')).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
  expect(split('C#D#E#')).toEqual(['C#', 'D#', 'E#']);
});
