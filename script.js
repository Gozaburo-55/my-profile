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

function changeColor()
    {const text = document.getElementById("colorText");
    text.style.color = "red"; }

document.getElementById("eventBtn").addEventListener("click",function() 
    {document.getElementById("eventMsg").textContent = "イベントで変わったよ！"; });

// ボタンを取得してイベントを登録
document.getElementById("sendButton").addEventListener("click", sendName);

// 名前を FastAPI に送る関数
async function sendName() {
    const nameValue = document.getElementById("nameInput").value;

    const response = await fetch("http://127.0.0.1:8000/hello-name", {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({ name: nameValue })
    });

    const data = await response.json();
    document.getElementById("apiResult").textContent = data.message;
}