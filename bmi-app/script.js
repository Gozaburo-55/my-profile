//htmlから変数を引き出す
const heightInput = document.getElementById("heightInput")
const kgInput = document.getElementById("kgInput")
const calcBtn =document.getElementById("calcBtn")
const BMIresult = document.getElementById("BMIresult")
const weightresult = document.getElementById("weightresult")



//ボタンが押されたときの処理
calcBtn.addEventListener("click", function () {

    //計算情報
    const height = Number(heightInput.value)//cm
    const kg = Number(kgInput.value)//kg

    const heightM = height/100

    const weightT = (heightM*heightM)*22
    const bmi = kg/(heightM*heightM)

    //結果出力
    weightresult.textContent = `あなたの適正体重は${weightT.toFixed(1)}kgです！`; //適正体重
    BMIresult.textContent = `あなたのBMIは${bmi.toFixed(1)}です！`; //BMI
});




