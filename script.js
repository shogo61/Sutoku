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
// console.log()

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
while(cnt<3){
  block_nums1 = [];
  block_nums3 = [];
  block_nums2 = [];
  for(start_i;start_i<stop_i;start_i++){
    for(let j=0;j<3;j++){
      if(problem[start_i][j] !=0){
        block_nums1.push(problem[start_i][j]);
      }
    }
    for(let j=3;j<6;j++){
      if(problem[start_i][j] !=0){
        block_nums2.push(problem[start_i][j]);
      }
    }
    for(let j=6;j<9;j++){
      if(problem[start_i][j] !=0){
        block_nums3.push(problem[start_i][j]);
      }
    }
  }

  console.log(block_nums1);
  console.log(block_nums2);
  console.log(block_nums3);
  // console.log(typeof(can[0][0]));
  

  start_i -= 3;
  for(start_i;start_i<stop_i;start_i++){
    for(let j=0;j<3;j++){
      for(let idx=0;idx<block_nums1.length;idx++){
        can[start_i][j].splice(block_nums1[idx],1);
      }
    }
    for(let j=3;j<6;j++){
      if(problem[start_i][j]==0){
        can[start_i][j].splice(block_nums2[idx],1);
      }
    }
    for(let j=6;j<9;j++){
      if(problem[start_i][j]==0){
        can[start_i][j].splice(block_nums3[idx],1);
      }
    }
  }

  stop_i+=3;
  cnt+=1;
}
// console.log(can)


