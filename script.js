var flag = true; //繰り返し用変数（グローバル）
function Solve() {
  // 連打防止
  document.getElementById("btn").disabled = true;

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

  // 問題を受け取る
  const tr = document.querySelectorAll("tr");
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {
      var td = tr[i].children[j].textContent
      if (td != null) {
        problem[i][j] = Number(td);
      }
    }
  }
  // テスト用
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
//   var problem = [
//     [0, 5, 6, 2, 0, 0, 4, 3, 0],
//     [4, 0, 0, 0, 5, 0, 0, 1, 2],
//     [0, 2, 1, 8, 0, 0, 0, 0, 5],
//     [0, 0, 7, 0, 0, 0, 8, 0, 0],
//     [0, 6, 5, 9, 0, 4, 3, 2, 0],
//     [0, 0, 4, 0, 0, 0, 6, 0, 0],
//     [3, 0, 0, 0, 0, 7, 1, 9, 0],
//     [5, 1, 0, 0, 9, 0, 0, 0, 3],
//     [0, 7, 9, 0, 0, 2, 5, 8, 0]
//   ]
  // console.log(problem)

  // 三次元配列の生成
  var can = [];
  for (let i = 0; i < 9; i++) {
    can[i] = [];
    for (let j = 0; j < 9; j++) {
      can[i][j] = [1,2,3,4,5,6,7,8,9]
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

  can = Block_del(can, problem)

  // 縦・横の削除
  while (flag) {
    flag = false;
    // 数字があれば候補から消す
    for (let i = 0; i < 9; i++) {      //縦座標
      for (let j = 0; j < 9; j++) {    //横座標
        for (let k = 0; k < 9; k++) {  //一列(一行）

          // 横の削除
          if (problem[i][j] != 0 && typeof (can[i][k]) == "object") {
            var remove_num = can[i][k].indexOf(problem[i][j])
            if (remove_num != -1) {
              can[i][k].splice(remove_num, 1)
              flag = true;
              break;
            }
          }

          //縦の削除
          if (problem[j][i] != 0 && typeof (can[k][i]) == "object") {
            var remove_num = can[k][i].indexOf(problem[j][i])
            if (remove_num != -1) {
              can[k][i].splice(remove_num, 1)
              flag = true;
              break;
            }
          }

          // 候補が確定したらobject->intに変換
          if (problem[i][j] == 0 && can[i][j].length == 1) {
            can[i][j] = can[i][j][0]
            problem[i][j] = can[i][j]
          }
        }
      }
    }
    if (flag == false) {
      can = Block_del(can, problem)
    }
  }
  // console.log("can")
  // console.log(can)
  // 乱数を使って答えを探す
  // 答えが確定していたら一回で返ってくる
  problem = RandomSearch(can, problem);

  // 答えをhtmlに出力する
  const tr_in = document.querySelectorAll("tr");
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {
      var td = tr_in[i].children[j]
      if (td != null) {
        td.textContent = problem[i][j]
      }
    }
  }
  // 答えをコンソールに出力
  console.log(problem);
}


// ブロックごとの要素の削除
function Block_del(can, problem) {
  // bflag = false;
  var bcnt = 0
  var start_i = 0
  var stop_i = 3
  // const block_nums0 = [];
  // const block_nums1 = [];
  // const block_nums2 = [];
  while (bcnt < 3) {
    // const ten = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const block_nums0 = [];
    const block_nums1 = [];
    const block_nums2 = [];
    // var bflag = false;
    for (start_i; start_i < stop_i; start_i++) {
      for (let j = 0; j < 3; j++) {
        if (problem[start_i][j] != 0) {
          block_nums0.push(problem[start_i][j])
        }
      }
      for (let j = 3; j < 6; j++) {
        if (problem[start_i][j] != 0) {
          block_nums1.push(problem[start_i][j])
        }
      }
      for (let j = 6; j < 9; j++) {
        if (problem[start_i][j] != 0) {
          block_nums2.push(problem[start_i][j])
        }
      }
    }
    // console.log(can)
    start_i -= 3;
    for (start_i; start_i < stop_i; start_i++) {
      for (let j = 0; j < 3; j++) {
        if (problem[start_i][j] == 0) {
          for (let k = 0; k < block_nums0.length; k++) {
            var remove_num = can[start_i][j].indexOf(block_nums0[k])
            if (remove_num != -1) {
              can[start_i][j].splice(remove_num, 1)
              flag = true;
            }
          }
        }
      }
      for (let j = 3; j < 6; j++) {
        if (problem[start_i][j] == 0) {
          for (let k = 0; k < block_nums1.length; k++) {
            var remove_num = can[start_i][j].indexOf(block_nums1[k])
            if (remove_num != -1) {
              can[start_i][j].splice(remove_num, 1)
              flag = true;
            }
          }
        }
      }
      for (let j = 6; j < 9; j++) {
        if (problem[start_i][j] == 0) {
          for (let k = 0; k < block_nums2.length; k++) {
            var remove_num = can[start_i][j].indexOf(block_nums2[k])
            if (remove_num != -1) {
              can[start_i][j].splice(remove_num, 1)
              flag = true;
            }
          }
        }
      }
    }
    stop_i += 3;
    bcnt += 1;
  }
  return can;
}

// 一つに絞れない場合、乱数で探す
function RandomSearch(can, problem) {
  var flag = true;
  var cnt = 0;
  // var result = [];
  while (flag) {
    cnt += 1;
    // 候補がいくつかある場合、乱数で候補を決める
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (can[i][j].length != undefined) {
          var idx = Math.floor(Math.random() * can[i][j].length)
          problem[i][j] = can[i][j][idx]
        }
      }
    }

    // 正解を判断する変数
    var CorCnt = 0;

    //横の重複チェック
    for (let i = 0; i < 9; i++) {
      if (ExistsSameValue(problem[i])) {
        CorCnt += 1;
      }
    }

    //縦の重複チェック
    var box = []
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        box.push(problem[j][i])
      }
      if (ExistsSameValue(box)) {
        CorCnt += 1;
      }
      box = [];
    }

    // 3*3のブロックの重複チェック
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

      if (ExistsSameValue(box1)) {
        CorCnt += 1;
      }
      if (ExistsSameValue(box2)) {
        CorCnt += 1;
      }
      if (ExistsSameValue(box3)) {
        CorCnt += 1;
      }

      box1 = [];
      box2 = [];
      box3 = [];

      stop_i += 3;
    }

    // CorCntが27になったら正解
    if (CorCnt == 27) {
      flag = false;
    }
    // 10000回ごとにCorCntを出力
    // 動いているかの確認+10を超えてたら答えが出そう
    if (cnt % 10000 == 0) {
      console.log("cnt:", cnt, "CorCnt", CorCnt);
    }
    // 百万回計算して出来なかったら抜け出す
    if (cnt == 1000000) {
      break;
    }

  }
  console.log(cnt);
  if (cnt != 1000000) {
    return problem;
  } else {
    alert("答えが見つかりませんでした。。。")
  }


}

// リセット
function Reset() {
  // 解いてボタンを押せるように
  document.getElementById("btn").disabled = false;
  // 空白を代入
  const tr_in = document.querySelectorAll("tr");
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {
      var td = tr_in[i].children[j]
      if (td != null) {
        td.textContent = "";
      }
    }
  }
}

// 重複チェック
// 重複がないとtrueを返す
// 参照:https://pisuke-code.com/js-check-duplicated-array-values/
function ExistsSameValue(a) {
  var s = new Set(a);
  return s.size == a.length;
}

// 利用方法表示
function Explain() {
  var explain = document.getElementById("explain");
  explain.animate([{ opacity: '0' }, { opacity: '1' }], 200)
  explain.style.display = "block";

}
// 利用方法を閉じる
async function Close() {
  const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  var explain = document.getElementById("explain");
  explain.animate([{ opacity: '1' }, { opacity: '0' }], 200)
  await _sleep(200)
  explain.style.display = "none";
}

//idの付与・削除
function OnclickTd(td) {
  let element = document.getElementById("target");
  element.removeAttribute("id");
  td.id = 'target'
}

//キー入力
document.addEventListener('keypress', keypress_event);
function keypress_event(e) {
  if (e.key == 0 || e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9) {
    //#targetに数字を入力する
    document.getElementById('target').innerHTML = e.key;
  }
  console.log(e);
  return false;
}
