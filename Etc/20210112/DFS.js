// 전위순회
const frontTreeSearch = (v) => {
  if (v > 7) {
    return;
  } else {
    console.log(v);
    frontTreeSearch(v * 2);
    frontTreeSearch(v * 2 + 1);
  }
};

// 중위순회
const middleTreeSearch = (v) => {
  if (v > 7) {
    return;
  } else {
    middleTreeSearch(v * 2);
    console.log(v);
    middleTreeSearch(v * 2 + 1);
  }
};

// 후위순회
const endTreeSearch = (v) => {
  if (v > 7) {
    return;
  } else {
    endTreeSearch(v * 2);
    endTreeSearch(v * 2 + 1);
    console.log(v);
  }
};
