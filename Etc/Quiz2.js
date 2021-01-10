// 딕셔너리 해쉬
// const q2 = (n, m) => {
//   const nReduced = n.split('').reduce((acc, cur) => {
//     if (!acc[cur]) {
//       acc[cur] = 1;
//     } else {
//       acc[cur] += 1;
//     }
//     return acc;
//   }, {});

//   const mReduced = m.split('').reduce((acc, cur) => {
//     if (!acc[cur]) {
//       acc[cur] = 1;
//     } else {
//       acc[cur] += 1;
//     }
//     return acc;
//   }, {});

//   for (let key in nReduced) {
//     if (nReduced[key] !== mReduced[key]) {
//       return 'NO';
//     }
//   }

//   return 'YES';
// };

// 딕셔너리 해쉬 개선방법
// const q2 = (n, m) => {
//   const nReduced = n.split('').reduce((acc, cur) => {
//     if (!acc[cur]) {
//       acc[cur] = 1;
//     } else {
//       acc[cur] += 1;
//     }
//     return acc;
//   }, {});

//   m.split('').forEach((a) => {
//     nReduced[a] -= 1;
//   });

//   for (let key in nReduced) {
//     if (nReduced[key] > 0) {
//       return 'NO';
//     }
//   }

//   return 'YES';
// };

// 리스트 해쉬
const q2 = (n, m) => {
  const str1 = new Array(52).fill(0);
  const str2 = new Array(52).fill(0);

  n.split('').forEach((a) => {
    if (a === a.toUpperCase()) {
      str1[a.charCodeAt() - 65] += 1;
    } else {
      str1[a.charCodeAt() - 72] += 1;
    }
  })

  m.split('').forEach((a) => {
    if (a === a.toUpperCase()) {
      str2[a.charCodeAt() - 65] += 1;
    } else {
      str2[a.charCodeAt() - 72] += 1;
    }
  })

  for (let a in str1) {
    if (str1[a] !== str2[a]) {
      return 'NO';
    }
  }

  return 'YES';
  // return str1 === str2 ? 'YES' : 'NO';
};

test('test', () => {
  expect(q2('AbaAeCe', 'baeeACA')).toEqual('YES');
  expect(q2('ABCDqtqtqEFqGHIJKLMNOPQRSTUVWetagdgXYabcdefghijklmnopqrstuwxyz', 'aBcdewrqwtqFghIJklMnOpqrsTuegagaeVxyYAbCDEfGHijKLmNoPQRStUwWXz')).toEqual('NO');
});
