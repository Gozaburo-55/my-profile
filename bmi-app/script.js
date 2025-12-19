//htmlから変数を引き出す
const Inputheight = document.getElementById("inputHeight")
const Inputkg = document.getElementById("inputKg")
const calcBtn =document.getElementById("calcBtn")
const result = document.getElementById("result")



//ボタンが押されたときの処理
calcBtn.addEventListener("click", function () {
  result.textContent = "ボタンが押された！";
});




