//htmlから変数を引き出す
const heightInput = document.getElementById("heightInput")
const kgInput = document.getElementById("kgInput")
const calcBtn =document.getElementById("calcBtn")
const result = document.getElementById("result")



//ボタンが押されたときの処理
calcBtn.addEventListener("click", function () {
    const height = Number(heightInput.value)//cm
    const kg = Number(kgInput.value)//kg

    const heightM = height/100
    const bmi = kg/(heightM*heightM)

    result.textContent = `あなたのBMIは${bmi.toFixed(1)}です！`;
});




