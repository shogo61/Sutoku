function Solve() {
  // 問題の定義
  var problem = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
  const tr = document.querySelectorAll("tr");
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {
      var td = tr[i].children[j].textContent
      if (td != null) {
        problem[i][j] = Number(td);
      }
    }
  }

  // var problem = [
  //   [3, 8, 1, 2, 9, 5, 4, 7, 6],
  //   [6, 5, 2, 0, 4, 7, 0, 3, 9],
  //   [9, 4, 7, 6, 3, 0, 2, 5, 0],
  //   [1, 0, 9, 5, 0, 4, 0, 6, 3],
  //   [4, 3, 6, 7, 0, 9, 5, 2, 0],
  //   [8, 0, 5, 3, 6, 0, 0, 9, 4],
  //   [7, 9, 8, 4, 5, 3, 6, 1, 2],
  //   [5, 6, 3, 0, 0, 0, 9, 4, 7],
  //   [2, 1, 4, 9, 7, 6, 3, 8, 5]
  // ]

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
  const block_nums0 = [];
  const block_nums1 = [];
  const block_nums2 = [];
  while (cnt < 3) {
    const block_nums0 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const block_nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const block_nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (start_i; start_i < stop_i; start_i++) {
      for (let j = 0; j < 3; j++) {
        if (problem[start_i][j] != 0) {
          var remove_idx = block_nums0.indexOf(problem[start_i][j])
          if (remove_idx != -1) {
            block_nums0.splice(remove_idx, 1);
          }
        }
      }
      for (let j = 3; j < 6; j++) {
        if (problem[start_i][j] != 0) {
          var remove_idx = block_nums1.indexOf(problem[start_i][j])
          if (remove_idx != -1) {
            block_nums1.splice(remove_idx, 1);
          }
        }
      }
      for (let j = 6; j < 9; j++) {
        if (problem[start_i][j] != 0) {
          var remove_idx = block_nums2.indexOf(problem[start_i][j])
          if (remove_idx != -1) {
            block_nums2.splice(remove_idx, 1);
          }
        }
      }
    }
    // console.log(can)
    start_i -= 3;
    for (start_i; start_i < stop_i; start_i++) {
      for (let j = 0; j < 3; j++) {
        if (problem[start_i][j] == 0) {
          for (let k = 0; k < block_nums0.length; k++) {
            can[start_i][j].push(block_nums0[k])
          }
        }
      }
      for (let j = 3; j < 6; j++) {
        if (problem[start_i][j] == 0) {
          for (let k = 0; k < block_nums1.length; k++) {
            can[start_i][j].push(block_nums1[k])
          }
        }
      }
      for (let j = 6; j < 9; j++) {
        if (problem[start_i][j] == 0) {
          for (let k = 0; k < block_nums2.length; k++) {
            can[start_i][j].push(block_nums2[k])
          }
        }
      }
    }
    stop_i += 3;
    cnt += 1;
  }

  // 横の削除
  var flag = true; //繰り返し用変数
  var cnt = 0; //探索回数を数える
  while (flag) {
    flag = false;
    for (let i = 0; i < 9; i++) {      //縦座標
      for (let j = 0; j < 9; j++) {    //横座標
        for (let k = 0; k < 9; k++) {  //横一列

          if (problem[i][j] == 0 && problem[i][k] != 0) {
            var remove_num = can[i][j].indexOf(problem[i][k])
            if (remove_num != -1) {
              can[i][j].splice(remove_num, 1)
              flag = true;
            }
          }

          if (problem[j][i] == 0 && problem[k][j] != 0) {
            var remove_num = can[j][i].indexOf(problem[k][i])
            if (remove_num != -1) {
              can[j][i].splice(remove_num, 1)
              flag = true;
            }
          }

          if (problem[i][j] == 0 && can[i][j].length == 1) {
            can[i][j] = can[i][j][0]
            problem[i][j] = can[i][j]
          }
        }
      }
    }

  }
  // console.log(can)
  RandomSearch(can);

  
}

// 重複チェック
// 参照:https://pisuke-code.com/js-check-duplicated-array-values/
function existsSameValue(a) {
  var s = new Set(a);
  return s.size == a.length;
}
//重複があるとfalseを返す

// 一つに絞れない場合、乱数で探す
function RandomSearch(can) {
  var flag = true;
  var cnt = 0;
  while (flag) {
    cnt += 1;
    // 候補がいくつかある場合、乱数で候補を決める
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (can[i][j].length != undefined) {
          var idx = Math.floor(Math.random() * can[i][j].length)
          problem[i][j] = can[i][j][idx];
        }
      }
    }

    // console.log(CorCnt)
    var CorCnt = 0;
    // CorCnt = 0

    //横の重複チェック
    for (let i = 0; i < 9; i++) {
      if (existsSameValue(problem[i])) {
        CorCnt++;
      }
    }

    //縦の重複チェック
    var box = []
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        box.push(problem[j][i])
      }
      if (existsSameValue(box)) {
        CorCnt++;
      }
      box = [];
    }

    var start_i = 0;
    var stop_i = 3;
    for (let bCnt = 0; bCnt < 3; bCnt++) {
      var box1 = [];
      var box2 = [];
      var box3 = [];
      for (start_i; start_i < stop_i; start_i++) {
        for (let j = 0; j < 3; j++) {
          box1.push(problem[start_i][j]);
        }
        for (let j = 3; j < 6; j++) {
          box2.push(problem[start_i][j]);
        }
        for (let j = 6; j < 9; j++) {
          box3.push(problem[start_i][j]);
        }
      }

      if (existsSameValue(box1)) {
        CorCnt++;
      }
      if (existsSameValue(box2)) {
        CorCnt++;
      }
      if (existsSameValue(box3)) {
        CorCnt++;
      }

      box1 = [];
      box2 = [];
      box3 = [];

      stop_i += 3;
    }

    if (CorCnt == 27) {
      flag = false;
    }
    if (cnt % 10000 == 0) {
      console.log("cnt:", cnt, "CorCnt", CorCnt);
    }
  }

  console.log(cnt)
  console.log(problem)
}