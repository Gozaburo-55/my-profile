const fruits = ["りんご","バナナ","みかん"];

function getFruit(index){
    return fruits[index];
}

console.log(getFruit(0)); //りんご
console.log(getFruit(2)); //みかん

function createCharacter(name,hp,attack){
    return{
        name: name,
        hp: hp,
        attack: attack
    };
}

const hero = createCharacter("轟三郎",100,30);
console.log(hero)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

const characters = [
    createCharacter("轟三郎", 100, 30),
    createCharacter("たけし", 80, 20),
    createCharacter("さぶろう", 120, 40),
];

for (let i = 0; i < characters.length; i++) {
    console.log(characters[i].name + " の攻撃力：" + characters[i].attack);
}
