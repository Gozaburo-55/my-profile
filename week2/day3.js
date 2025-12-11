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
