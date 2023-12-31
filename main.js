var jogadorDaVez, vencedorDaVez = null;
var jogadorSelecionado = document.getElementById("jogador_selecionado")
var vencedorSelecionado = document.getElementById("vencedor_selecionado")




mudarJogador("X") //iniciando com um jogador


function escolherQuadrado(id){
    if(vencedorDaVez !== null){
        return;
    }

    var quadrado = document.getElementById(id)

    if(quadrado.innerHTML !== "-"){
        return; //não executa o restante do código
    }

    quadrado.innerHTML = jogadorDaVez;
    quadrado.style.color = "#000";

    if(jogadorDaVez === "X"){
        jogadorDaVez = "O"
    } else{
        jogadorDaVez = "X"
    }

    mudarJogador(jogadorDaVez);
    checarVencedor(vencedorDaVez);
}

function mudarJogador(valor){
    jogadorDaVez = valor;
    jogadorSelecionado.innerHTML = jogadorDaVez
}


function checarVencedor(){
    var quadrado1 = document.getElementById("1");
    var quadrado2 = document.getElementById("2");
    var quadrado3 = document.getElementById("3");
    var quadrado4 = document.getElementById("4");
    var quadrado5 = document.getElementById("5");
    var quadrado6 = document.getElementById("6");
    var quadrado7 = document.getElementById("7");
    var quadrado8 = document.getElementById("8");
    var quadrado9 = document.getElementById("9");

    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1)
        return;
    }
    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4)
        return;
    }
    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7)
        return;
    }

    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1)
        return;
    }
    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2)
        return;
    }
    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3)
        return;
    }

    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1)
        return;
    }
    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3)
        return;
    }

}

function mudarVencedor(quadrado){
    vencedorDaVez = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = "Vencedor: " + vencedorDaVez;
} 

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){

    quadrado1.style.background = "green";
    quadrado2.style.background = "green";
    quadrado3.style.background = "green";
       

}

function checaSequencia(quadrado1, quadrado2, quadrado3){
    var eigual = false;

    if(quadrado1.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }

    return eigual;
}

function reiniciar(){
    vencedorDaVez = null;
    vencedorSelecionado.innerHTML = "";

    for(var i = 1; i <=9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = "#eee";
        quadrado.style.color = "#eee";
        quadrado.innerHTML = "-";
    }

    mudarJogador("X");
}