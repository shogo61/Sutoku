//idの付与・削除
function onclickTd(td){
  let element = document.getElementById("target");
  element.removeAttribute("id");
  td.id = 'target'
}

//キー入力
document.addEventListener('keypress', keypress_event);
function keypress_event(e) {
  if(e.key == 0 || e.key==1 || e.key==2 || e.key==3 || e.key==4 || e.key==5 || e.key==6 || e.key==7 || e.key==8 || e.key==9){
    //#targetに数字を入力する
    document.getElementById('target').innerHTML = e.key;
  }
  console.log(e);
	return false; 
}
