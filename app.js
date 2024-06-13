let listaSorteados=[]
let numeroLimite= 100
//let titulo=document.querySelector('h1');
//titulo.innerHTML= 'Jogo do número secreto';
//let paragrafo=document.querySelector('p');
//paragrafo.innerHTML='Escolha um número de 1 a 10';
let numeroSecreto=gerarNumeroAleatorio();
let tentativas=1; 


function exibirTextoNaTela(tag, texto){
    let campo=document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
        {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jojo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial()

function verificarChute() {
    let chute=document.querySelector('input').value;
    console.log(chute==numeroSecreto);
    if (chute==numeroSecreto) {
        exibirTextoNaTela('h1', 'ACERTOU!')
        let palavradiferente=tentativas>1?'tentativas':'tentativa';
        let mensagemtenta=`Isso ai! Você descobriu o número secreto! Com ${tentativas} ${palavradiferente}!`
        exibirTextoNaTela('p', mensagemtenta)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute>numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor')
        } else {
            exibirTextoNaTela('p', 'O número é maior')
        }
        tentativas++;
        limpar()
        
    }
}

function gerarNumeroAleatorio(){
    let numeroSorteado=parseInt(Math.random()*numeroLimite+1);
    let qtdElementos=listaSorteados.length;

    if (qtdElementos==numeroLimite){
        listaSorteados=[]
    };
        
    if (listaSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else{
        listaSorteados.push(numeroSorteado);
        console.log(listaSorteados)
        return numeroSorteado
    }
};

function limpar(){
    chute=document.querySelector('input')
    chute.value=''
}

function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio()
    limpar()
    tentativas=1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}