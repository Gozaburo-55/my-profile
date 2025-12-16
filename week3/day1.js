const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const sendBtn = document.getElementById("sendBtn");
const result = document.getElementById("result");

sendBtn.addEventListener("click",async function(){
    const name = nameInput.value
    const job = jobInput.value

    if(!name||!job){
        result.textContent = "名前・職業を入力してね！";
        return;
    }

    const response = await fetch ("http://127.0.0.1:8000/profile",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({name:name,job:job}),
    });

    const data = await response.json();
    result.textContent = data.message;
});

