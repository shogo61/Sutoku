// 問題の定義
var problem = [
  [0, 1, 4, 6, 0, 8, 2, 7, 0],
  [7, 0, 2, 4, 0, 9, 1, 0, 8],
  [6, 8, 0, 2, 0, 1, 0, 3, 5],
  [9, 5, 3, 0, 0, 0, 7, 4, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 8, 0, 0, 0, 6, 5, 3],
  [8, 7, 0, 9, 0, 2, 0, 1, 6],
  [2, 0, 1, 5, 0, 3, 9, 0, 7],
  [0, 9, 6, 1, 0, 7, 5, 2, 0]
];

// 三次元配列の生成
var can = [];
for (let i = 0; i < 9; i++) {
  can[i] = [];
  for (let j = 0; j < 9; j++) {
    can[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
}

// 問題が０でない部分は候補が一つなので上書き
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (problem[i][j] != 0) {
      can[i][j] = problem[i][j];
    }
  }
}


// const block_nums0 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const block_nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const block_nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ten = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var cnt = 0;
var start_i = 0;
var stop_i = 3;
while (cnt < 3) {
  for (start_i; start_i < stop_i; start_i++) {
    for (let j = 0; j < 3; j++) {
      for (let idx = 0; idx < 9; idx++) {
        if (problem[start_i][j] != 0) {
          var block_nums0 = ten.filter(function (item) {

            return problem[start_i][j].includes(ten[idx]);

          });
        }
      }
    }
    for (let j = 3; j < 6; j++) {
      for (let idx = 0; idx < 9; idx++) {
        if (problem[start_i][j] != 0) {
          var block_nums0 = ten.filter(function (item) {
  
            return problem[start_i][j].includes(ten[idx]);
  
          });
        }
      }
    }
    for (let j = 6; j < 9; j++) {
      for (let idx = 0; idx < 9; idx++) {
        if (problem[start_i][j] != 0) {
          var block_nums0 = ten.filter(function (item) {
  
            return problem[start_i][j].includes(ten[idx]);
  
          });
        }
      }
    }
    cnt++;
    stop_i += 3;
  }