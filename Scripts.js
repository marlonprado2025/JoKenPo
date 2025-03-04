/* mapeamento do resultado */
const result = document.querySelector(".result")
/* mapeamento dos Span*/
const Mypontos = document.querySelector("#Mypontos")
const MachinePontos = document.querySelector("#MachinePontos")
/*Criando uma variavel q vai mudar o valor sempre que alguem pontuar*/
let MypontosNumber =  0
let MachinePontosNumber =  0

/* mapeamento dos botoes para cada escolha humana */
const playHuman = (escolhaHuman) => {
    playGain(escolhaHuman, playMachine())
}

/* mapeamento para cada escolha do computador */
const playMachine = () => {
    const choicesMachine = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)
    return choicesMachine[randomNumber]
}

const playGain = (human, machine) => {
    console.log('-Humano ->', human + '- Computador ->', machine)

    if (human === machine) {
        result.innerHTML = "😅Empate!"
    } else if (
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel') ||
        (human === 'papel' && machine === 'pedra')) {
           
        MypontosNumber++ //Acrescenta +1 sempre q pontuar na let la em cima
        Mypontos.innerHTML =  MypontosNumber //vai la no span Muda o valor e deixar igual ao valor dos MypontosNumber, q sempre vai mudar acrescentando +1 por causa do comando acima
        result.innerHTML = "👏 Ganhou!"
       
    }
    else {
        MachinePontosNumber++//Acrescenta mais 1 sempre q pontuar na let la em cima
        MachinePontos.innerHTML =  MachinePontosNumber //vai la no span Muda o valor e deixar igual ao valor dos MachinePontosNumber, q sempre vai mudar acrescentando +1 por causa do comando acima
        result.innerHTML = "😭 Perdeu!"
    }

}


