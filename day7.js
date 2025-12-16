const nameInput = document.getElementById("nameInput");
const weightInput = document.getElementById("weightInput");
const repsInput = document.getElementById("repsInput");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");

calcBtn.addEventListener("click", async function () {
  const name = nameInput.value;
  const weight = Number(weightInput.value);
  const reps = Number(repsInput.value);

  // 最低限の入力チェック（Day7の“完成感”が出る）
  if (!name || weight <= 0 || reps <= 0) {
    result.textContent = "名前・重さ・回数を正しく入力してね！";
    return;
  }

  const response = await fetch("http://127.0.0.1:8000/calc", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, weight: weight, reps: reps }),
  });

  const data = await response.json();
  result.textContent = data.message;
});
