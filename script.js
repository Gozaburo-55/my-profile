function changeMessage() {
    document.getElementById("msg").
    textContent= "ボタンが押されたよ！";}

function showAlert() {alert("こんにちは！");}

console.log("javascriptが動いています！");

const fruits = ["りんご","バナナ","みかん"];
console.log(fruits[0]); //りんご
console.log(fruits[2]); //みかん

const person = {name:"轟三郎", age: 100 , hobby: "x"};
console.log(person.name); 
console.log(person.hobby); 

function showData() {
    document.getElementById("dataArea").textContent =
    person.name + "(趣味：" + person.hobby +") " ; }