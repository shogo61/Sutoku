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
    can[i][j] = []
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
// console.log(can)

// ブロックごとの要素の削除
var cnt = 0
var start_i = 0
var stop_i = 3
// const block_nums1 = [];
// const block_nums3 = [];
// const block_nums2 = [];
// while (cnt < 3) {
const block_nums0 = [1,2,3,4,5,6,7,8,9];
const block_nums1 = [1,2,3,4,5,6,7,8,9];
const block_nums2 = [1,2,3,4,5,6,7,8,9];
const block_nums3 = [1,2,3,4,5,6,7,8,9];
const block_nums4 = [1,2,3,4,5,6,7,8,9];
const block_nums5 = [1,2,3,4,5,6,7,8,9];
const block_nums6 = [1,2,3,4,5,6,7,8,9];
const block_nums7 = [1,2,3,4,5,6,7,8,9];
const block_nums8 = [1,2,3,4,5,6,7,8,9];

// for (start_i; start_i < stop_i; start_i++) {
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (problem[i][j] != 0) {
      var remove_idx = block_nums0.indexOf(problem[i][j])
      if (remove_idx != -1) {
        block_nums0.splice(remove_idx, 1);
      }
    }
  }
}
for (let i = 0; i < 3; i++) {
  for (let j = 3; j < 6; j++) {
    if (problem[i][j] != 0) {
      var remove_idx = block_nums1.indexOf(problem[i][j])
      if (remove_idx != -1) {
        block_nums1.splice(remove_idx, 1);
      }
    }
  } 
}
for (let i = 0; i < 3; i++) {
  for (let j = 6; j < 9; j++) {
    if (problem[i][j] != 0) {
      var remove_idx = block_nums2.indexOf(problem[i][j])
      if (remove_idx != -1) {
        block_nums2.splice(remove_idx, 1);
      }
    }
  }
}
for (let i = 3; i < 6; i++) {
  for (let j = 0; j < 3; j++) {
    if (problem[i][j] != 0) {
      var remove_idx = block_nums3.indexOf(problem[i][j])
      if (remove_idx != -1) {
        block_nums3.splice(remove_idx, 1);
      }
    }
  }
}
for (let i = 3; i < 6; i++) {
  for (let j = 3; j < 6; j++) {
    if (problem[i][j] != 0) {
      var remove_idx = block_nums4.indexOf(problem[i][j])
      if (remove_idx != -1) {
        block_nums4.splice(remove_idx, 1);
      }
    }
  }
}
for (let i = 3; i < 6; i++) {
  for (let j = 6; j < 9; j++) {
    if (problem[i][j] != 0) {
      var remove_idx = block_nums5.indexOf(problem[i][j])
      if (remove_idx != -1) {
        block_nums5.splice(remove_idx, 1);
      }
    }
  }
}
for (let i = 6; i < 9; i++) {
  for (let j = 0; j < 3; j++) {
    if (problem[i][j] != 0) {
      var remove_idx = block_nums6.indexOf(problem[i][j])
      if (remove_idx != -1) {
        block_nums6.splice(remove_idx, 1);
      }
    }
  }
}
for (let i = 6; i < 9; i++) {
  for (let j = 3; j < 6; j++) {
    if (problem[i][j] != 0) {
      var remove_idx = block_nums7.indexOf(problem[i][j])
      if (remove_idx != -1) {
        block_nums7.splice(remove_idx, 1);
      }
    }
  }
}
for (let i = 6; i < 9; i++) {
  for (let j = 6; j < 9; j++) {
    if (problem[i][j] != 0) {
      var remove_idx = block_nums8.indexOf(problem[i][j])
      if (remove_idx != -1) {
        block_nums8.splice(remove_idx, 1);
      }
    }
  }
}
// }
console.log("0", block_nums0);
console.log("1", block_nums1);
console.log("2", block_nums2);
console.log("3", block_nums3);
console.log("4", block_nums4);
console.log("5", block_nums5);
console.log("6", block_nums6);
console.log("7", block_nums7);
console.log("8", block_nums8);


// start_i -= 3;
// for (start_i; start_i < stop_i; start_i++) {

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // console.log(start_i,j)
      if (problem[i][j] == 0) {
        for(let k=0;k<block_nums0.length;k++){
          can[i][j].push(block_nums0[k])
        }
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      // console.log(start_i,j)
      if (problem[i][j] == 0) {
        for(let k=0;k<block_nums1.length;k++){
          can[i][j].push(block_nums1[k])
        }
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      // console.log(start_i,j)
      if (problem[i][j] == 0) {
        for(let k=0;k<block_nums2.length;k++){
          can[i][j].push(block_nums2[k])
        }
      }
    }
  }
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      // console.log(start_i,j)
      if (problem[i][j] == 0) {
        for(let k=0;k<block_nums3.length;k++){
          can[i][j].push(block_nums3[k])
        }
      }
    }
  }
  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      // console.log(start_i,j)
      if (problem[i][j] == 0) {
        for(let k=0;k<block_nums4.length;k++){
          can[i][j].push(block_nums4[k])
        }
      }
    }
  }
  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      // console.log(start_i,j)
      if (problem[i][j] == 0) {
        for(let k=0;k<block_nums5.length;k++){
          can[i][j].push(block_nums5[k])
        }
      }
    }
  }
  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      // console.log(start_i,j)
      if (problem[i][j] == 0) {
        for(let k=0;k<block_nums6.length;k++){
          can[i][j].push(block_nums6[k])
        }
      }
    }
  }
  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      // console.log(start_i,j)
      if (problem[i][j] == 0) {
        for(let k=0;k<block_nums7.length;k++){
          can[i][j].push(block_nums7[k])
        }
      }
    }
  }
  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      // console.log(start_i,j)
      if (problem[i][j] == 0) {
        for(let k=0;k<block_nums8.length;k++){
          can[i][j].push(block_nums8[k])
        }
      }
    }
  }
  // }
  // stop_i += 3;
  // cnt += 1;
// }
// console.log(can)

// 横の削除
var flag = true; //繰り返し用変数
var cnt = 0; //探索回数を数える
// while(flag){
flag = false;
for (let i = 0; i < 9; i++) {      //縦座標
  for (let j = 0; j < 9; j++) {    //横座標
    for (let k = 0; k < 9; k++) {  //横一列
      if (problem[i][j] == 0 && problem[i][k] != 0) {
        var remove_num = can[i][j].indexOf(problem[i][k])
        // console.log("17",can[1][7])
        if (remove_num != -1) {
          can[i][j].splice(remove_num, 1)
          flag = true;
        }
        // console.log(remove_num);
        // console.log(i,j);
        // console.log("can:",can[i][j]);
        // console.log(i,k);
        // console.log("pro",problem[i][k]);
        // console.log();
      }
    }
  }
}
// }
console.log(can)