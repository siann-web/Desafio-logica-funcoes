function Ranking(name, victory, lose){
    let saldo = victory - lose;
    for(saldo; saldo <= 10; saldo){
        return (`O herói ${name} tem o saldo de ${saldo} e está no nível de Ferro`);
        break
    }
    for(saldo; saldo <= 20 && saldo > 10; saldo){
        return (`O herói ${name} tem o saldo de ${saldo} e está no nível Bronze`);
        break
    }
    for(saldo; saldo <= 50 && saldo > 20; saldo){
        return (`O herói ${name} tem o saldo de ${saldo} e está no nível Prata`);
        break
    }
    for(saldo; saldo <= 80 && saldo > 50; saldo){
        return (`O herói ${name} tem o saldo de ${saldo} e está no nível Ouro`);
        break
    }
    for(saldo; saldo <= 90 && saldo > 80; saldo){
        return (`O herói ${name} tem o saldo de ${saldo} e está no nível Diamante`);
        break
    }
    for(saldo; saldo <= 100 && saldo > 90; saldo){
        return (`O herói ${name} tem o saldo de ${saldo} e está no nível Lendário`);
        break
    }
    for(saldo; saldo > 100; saldo){
        return (`O herói ${name} tem o saldo de ${saldo} e está no nível Imortal`);
        break
    }
}


let victory = Ranking('Ruan',76, 27);


console.log(victory);