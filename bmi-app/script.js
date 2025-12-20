//htmlから変数を引き出す
const heightInput = document.getElementById("heightInput")
const kgInput = document.getElementById("kgInput")
const calcBtn =document.getElementById("calcBtn")
const BMIresult = document.getElementById("BMIresult")
const BMIjudge = document.getElementById("BMIjudge")
const weightresult = document.getElementById("weightresult")
const advice =document.getElementById("advice")

//ボタンが押されたときの処理
calcBtn.addEventListener("click", function () {

    //計算情報
    const height = Number(heightInput.value)//cm
    const kg = Number(kgInput.value)//kg

    const heightM = height/100

    const weightT = (heightM*heightM)*22
    const bmi = kg/(heightM*heightM)

    //判定情報
    let bmiText = "";
    let bmiClass = "";
    let adviceText = "";


    if (bmi < 18.5){
        bmiText = "痩せ（BMI<18.5)";
        bmiClass = "judge-under";//cssで色替えするためのラベル
        //BMIjudge.style.color = "blue" //jsのみで色変えする場合
        adviceText = "まずは食事量を少し増やして、筋トレ＋睡眠で体重を安定させよう。";

        }
    else if (bmi < 25){
        bmiText = "標準（18.5≦BMI<25）";
        bmiClass ="judge-normal";
        //BMIjudge.style.color = "green"
        adviceText = "いい感じ！週2-3回の運動で体重を維持しよう。";
        }
    else if (bmi < 30){
        bmiText = "肥満（25≦BMI<30）";
        bmiClass = "judge-over";
        //BMIjudge.style.color = "orange"
        adviceText ="まずは「毎日＋10分歩く」＋間食の見直しから。無理なく落とそう。";
        }
    else if (bmi >= 30){
        bmiText = "高度肥満（30≦BMI）";
        bmiClass = "judge-obese";
        //BMIjudge.style.color = "red"
        adviceText ="急に頑張らず、生活習慣を小さく変えるのが最優先。体調不安があれば専門家も検討。"
        }    
    
    //結果出力
    weightresult.textContent = 
    `あなたの適正体重は${weightT.toFixed(1)}kgです！`; //適正体重
    BMIresult.textContent = 
    `あなたのBMIは${bmi.toFixed(1)}です！`; //BMI
    BMIjudge.textContent = 
    `判定：${bmiText}`; //判定結果
    BMIjudge.classList.add(bmiClass);

    advice.textContent = `アドバイス：${adviceText}`


         //身長・体重が入力されていなかった場合
    if (!height ||!kg){
        BMIjudge.textContent="身長と体重を入力してください！";
        BMIjudge.style.color = "red"
        return;}

});




