//数(number)
const age = 28;
//「ageという名前の箱を作り、28を入れている」


//文字（string）
const name = "轟三郎";
//「nameという箱に、文字”轟三郎”を入れている」

//真偽値(Boolean)
const isPT = true;
//「isPTという箱にtrue（正しい）を入れている」

//配列(Array)
const fruits = ["りんご","バナナ","みかん"];
//"複数の文字をひとまとめにする箱"
//fruits[0] → 最初の要素

//オフジェクト(object)
const person = {
    name: "轟三郎",
    age: 28,
    hobby: "ゲーム"
};
//"関連情報をまとめる箱"
//person.name → "轟三郎"

//テンプレート文字列
const message = `こんにちは、${person.name}さん！`;
//「文字の中に変数を埋め込む」

console.log(message);
//message をコンソールログに表示する


