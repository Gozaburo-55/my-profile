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
