$("#botao-placar").click(mostraPlacar)

function inserePlacar() {
    // find ele pega os elementos filhos 
    var corpoTabela = $(".placar").find("tbody")
    var usuario = "Zura"
    var numPalavras = $("#contador-de-palavras").text()

    var linha = novaLinha(usuario, numPalavras)

    linha.find(".botao-remover").click(removeLinha)
        // add no começo
        corpoTabela.prepend(linha);
 
    // add no final 
    // corpoTabela.append(linha);


}
function novaLinha(usuario, palavras) {
    // criar linha 
    var linha = $("<tr>")
    var colunaUsuario = $("<td>").text(usuario)
    var colunaPalavras = $("<td>").text(palavras)
    var colunaRemover = $("<td>")

    var link = $("<a>").addClass("botao-remover").attr("href", "#")
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete")


    link.append(icone)
    colunaRemover.append(link)

    linha.append(colunaUsuario)
    linha.append(colunaPalavras)
    linha.append(colunaRemover)

    return linha

}

function removeLinha() {
   
        event.preventDefault()
        $(this).parent().parent().remove()
}
    
function mostraPlacar() {
    // mostra e esconde 
    // $(".placar").toggle()

    // mostra 
    // $(".placar").show()

    // esconde 
    // $(".placar").hide()

    // mostra com animação 
    // $(".placar").slideDown(3000)

    // esconde com animação 
    // $(".placar").slideUp(3000)

    // monstra e esconde com Animação

    $(".placar").slideToggle(700)


}