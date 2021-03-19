
$('#funcao').click(() => { Calcular() })

function Calcular() {
    let FloatOrigem = parseFloat($("#Origem").val())
    let FloatDestino = parseFloat($("#Destino").val())
    let FloatPlano = parseFloat($("#Planos").val())
    let FloatMinutos = parseFloat($("#minutos").val())

    var PrecoTotal = FloatOrigem + FloatDestino
    var PorcentagemDoPlano = (10 / 100) * PrecoTotal
    var CalculaSobrePagar = FloatMinutos - FloatPlano

    var ValorComPlano = (FloatOrigem + FloatDestino + PorcentagemDoPlano) * CalculaSobrePagar
    console.log(ValorComPlano)

    if (ValorComPlano <= 0) {
        $('#ComPlano').val(`Com o plano R$ 0,00`)
    } else {
        $('#ComPlano').val(`Com o plano  ${ValorComPlano.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
    }

    let semPlano = (FloatOrigem + FloatDestino) * FloatMinutos
    $("#SemPlano").val(`Sem plano ${semPlano.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} `)
}






