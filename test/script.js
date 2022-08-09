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
// console.log(can);


// console.log(typeof(can[0,0]))
// console.log(typeof(can[0,1]))
// ブロックごとの要素の削除
for(let i=0;i<9;i++){
  for(let j=0;j<9;j++){
    if(problem[i][j] == 0){
      
    }
  }
}


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