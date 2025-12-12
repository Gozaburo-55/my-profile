const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

console.log(msg);

btn.addEventListener("click",function(){
    msg.textContent = "ボタンが押されたよ！"
});

let isRed = false;

btn.addEventListener("click", function(){
    if(isRed){
        msg.style.color = "black";
        isRed = false;
    } else{
        msg.style.color = "red";
        isRed = true;
    }
})
