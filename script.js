function calculoMedia() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var n3 = parseFloat(document.getElementById('n3').value);
    var n4 = parseFloat(document.getElementById('n4').value);

    var resultado = parseFloat((n1 + n2 + n3 + n4) / 4);

    var notaFixada = resultado.toFixed(2);

    console.log(notaFixada)

    if (notaFixada >= 6){
        var situacao = "Você está aprovado"
    } else {
        var situacao = "Você foi reprovado"
    }
    console.log(situacao)


    document.querySelector('#resultado').innerHTML = "Sua nota final  foi " + notaFixada + "<br>" + situacao;

    enviar.onclick = () => {
        calculoMedia();
    }
}