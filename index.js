
function update() {
    let conta = Number(document.getElementById("yourBill").value)
    let porcentagemGorjeta = Number(document.getElementById("tipInput").value)
    let divisao = Number(document.getElementById("splitInput").value)

    let totalConta = (conta + (conta * porcentagemGorjeta)/100) / divisao
    
    let totalContaFormatado = totalConta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("tipPercent").innerHTML =  porcentagemGorjeta +'%'
    document.getElementById("splitValue").innerHTML =  divisao

    document.getElementById("totalWithTip").innerHTML = totalContaFormatado

}