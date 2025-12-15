//html 要素の取得
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const result = document.getElementById("result");

//「挨拶文を作成する関数」（ロジック担当）
function createGreeting (name){
    return `${name}さん、こんにちは！`;
}

//ボタンが押されたときに実行される処理（画面担当）
greetBtn.addEventListener("click",function(){
    //nameInputの中身の数字を読み込む
    const name = nameInput.value;
    //ロジック用の関数に渡して、挨拶便を作ってもらう
    const message = createGreeting(name);
    //画面に表示
    result.textContent = message;
});

