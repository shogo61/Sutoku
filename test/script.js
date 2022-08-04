// 問題の定義
var problem = [
  [0,1,4,6,0,8,2,7,0],
  [7,0,2,4,0,9,1,0,8],
  [6,8,0,2,0,1,0,3,5],
  [9,5,3,0,0,0,7,4,2],
  [0,0,0,0,0,0,0,0,0],
  [1,2,8,0,0,0,6,5,3],
  [8,7,0,9,0,2,0,1,6],
  [2,0,1,5,0,3,9,0,7],
  [0,9,6,1,0,7,5,2,0]
];

// 三次元配列の生成
var can = [];
var ten = [1,2,3,4,5,6,7,8,9];
for(let i=0; i<9; i++){
  can[i] = [];
for(let j=0; j<9; j++){
  can[i][j] = ten;
  }
}

// 問題が０でない部分は候補が一つなので上書き
for(let i=0;i<9;i++){
  for(let j=0;j<9;j++){
    if(problem[i][j]!=0){
      can[i][j]=problem[i][j];
    }
  }
}
// console.log(can);

// ブロックごとの要素の削除
var cnt=0
var start_i=0
var stop_i=3
var block_nums1 = [];
var block_nums3 = [];
var block_nums2 = [];
// var ten = [1,2,3,4,5,6,7,8,9];
while(cnt<3){
  block_nums1 = [1,2,3,4,5,6,7,8,9];
  block_nums3 = [1,2,3,4,5,6,7,8,9];
  block_nums2 = [1,2,3,4,5,6,7,8,9];
  for(start_i;start_i<stop_i;start_i++){
    for(let j=0;j<3;j++){
      if(problem[start_i][j] !=0){
        var remove_idx = block_nums1.indexOf(problem[start_i][j])
        if(remove_idx != -1){
          block_nums1.splice(remove_idx,1);
        }
      }
    }
    for(let j=3;j<6;j++){
      if(problem[start_i][j] !=0){
        var remove_idx = block_nums2.indexOf(problem[start_i][j])
        if(remove_idx != -1){
          block_nums2.splice(remove_idx,1);
        }
      }
    }
    for(let j=6;j<9;j++){
      if(problem[start_i][j] !=0){
        var remove_idx = block_nums3.indexOf(problem[start_i][j])
        if(remove_idx != -1){
          block_nums3.splice(remove_idx,1);
        }
      }
    }
  }
  // console.log("1",block_nums1);
  // console.log("2",block_nums2);
  // console.log("3",block_nums3);

  start_i-=3;
  for(start_i;start_i<stop_i;start_i++){
    for(let j=0;j<3;j++){
      // console.log(start_i,j)
      if(problem[start_i][j] == 0){
        can[start_i][j] = block_nums1;
      }
    }
    for(let j=3;j<6;j++){
      // console.log(start_i,j)
      if(problem[start_i][j] == 0){
        can[start_i][j] = block_nums2;
      }
    }
    for(let j=6;j<9;j++){
      // console.log(start_i,j)
      if(problem[start_i][j] == 0){
        can[start_i][j] = block_nums3;
      }
    }
  }
  stop_i+=3;
  cnt+=1;
}
console.log(can)