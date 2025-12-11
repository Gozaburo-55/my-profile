// ①関数の定義
function sayHello(){
    console.log("こんにちは！");
}

// ② 関数の呼び出し
sayHello();


function introduce(name,age){
    const message = `${name}は${age}歳です`;
    return message;
}

console.log(introduce("轟三郎",28));


function introduce2(name, age) {
    return `${name}さんは${age}歳です`;
}

const message2 = introduce2("たけし", 30);
console.log(message2);


function greet(age) {
    if (age => 20)
        return "大人ですね！";

    if (age <= 19)
        return "子どもですね！";
}

console.log(greet(10));  // → 子どもですね！
console.log(greet(20));  // → 大人ですね！

