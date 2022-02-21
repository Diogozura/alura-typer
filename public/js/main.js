// var frase = jQuery(".frase")

var tempoInical = $("#tempo-digitacao").text()
var campo = $(".campo-digitacao")


// quando toda a pagina for carregada ele vai rodar as function
// $(document).ready(function () opção 1 

$(
    function () {
        atualizaTamanhoFrase()
        inicalizaContadores()
        inicializaCronometro()
        $("#botao-reiniciar").click(reiniciaJogo)
        inializaMarcadores()
    });

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numeroDePalavras = frase.split(" ").length
    var tamanhoDaFrase = $("#tamanho-da-frase")

    tamanhoDaFrase.text(numeroDePalavras)
}


// console.log(tamanhoDaFrase) 

function inicalizaContadores() {

    campo.on("input", function () {
        // .val é o o value 
        var conteudo = campo.val()
        // /\S+/ evita roubar 
        var qtdPalavras = conteudo.split(/\S+/).length - 1
        // console.log(qtdPalavras)

        // pega o id e já substitui com o valor desejado 
        $("#contador-de-palavras").text(qtdPalavras)

        var qtdCaracteres = conteudo.length
        $("#contador-de-caracteres").text(qtdCaracteres)
    })
}


//
function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text()

    // focus é para ter certeza que a pessoa entrou no campo 
    campo.one("focus", function () {

        var cronometroId = setInterval(function () {
            tempoRestante--
            // console.log(tempoRestante)
            $("#tempo-digitacao").text(tempoRestante)
            if (tempoRestante < 1) {

                clearInterval(cronometroId)

                // criar um Object css 
                //    campo.css("background-color", "#d3d3d3");

                // adiciconar uma classe CSS 
                //    campo.addClass("campo-desativado")

                // liga e desliga o css 
                finalizaJogo()
            }

        }, 1000)
    })

}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar()
}

function inializaMarcadores() {
    var frase = $("p").text()
    campo.on("input", function () {

        var digitado = campo.val()

        // ele comprara com o tamanho da string 
        var comparevel = frase.substr(0, digitado.length)

        if (digitado == comparevel) {
            campo.addClass("borda-correto");
            campo.removeClass("borda-errado");
        } else {
            campo.addClass("borda-errado");
            campo.removeClass("borda-correto");
        }


    })
}

function reiniciaJogo(e) {
    // opção 1
    // campo.removeAttr("disabled", true);

    // opção 2 
    campo.attr("disabled", false)
    // 
    campo.val(" ")
    $("#contador-de-palavras").text("0")
    $("#contador-de-caracteres").text("0")
    $("#tempo-digitacao").text(tempoInical)
    inicializaCronometro()

    // remove a class
    // campo.removeClass("campo-desativado");
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-correto");
    campo.removeClass("borda-errado");
};


