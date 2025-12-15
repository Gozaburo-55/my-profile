const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("inputName");
const result = document.getElementById("result");


sendBtn.addEventListener("click",async function(){
    const name = input.value;

    const response = await fetch("http/127.0.0.1:8000/hello",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({name:name})
    });
    const data = await response.json();
    result.textContent = data.message;
});


