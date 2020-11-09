var calculo = ''
var regN = null
var num1 = null
var num2 = null
var reg = null
var virgula = false

//Coleta os numeros e aloca na memoria
function numero(codigo) {
    if (document.getElementById("tela").innerHTML == 'Escolha primeiro um numero' || document.getElementById("tela").innerHTML == 'Escreva um calculo valido') {
        document.getElementById("tela").innerHTML = ''
    }

    if (virgula == false && codigo == '.') {
        document.getElementById("tela").innerHTML = document.getElementById("tela").innerHTML + codigo
        calculo = calculo + codigo
        virgula = true
    }

    else {
        if (codigo != '.' || virgula == true && codigo != '.'){
            document.getElementById("tela").innerHTML = document.getElementById("tela").innerHTML + codigo
            calculo = calculo + codigo
        }
    }
}

function acao(regra) {
    if (document.getElementById("tela").innerHTML == 'Escolha primeiro um numero' || document.getElementById("tela").innerHTML == 'Escreva um calculo valido') {
        document.getElementById("tela").innerHTML = ''
    }

    // VERIFICA SE O USUARIO ESTA INFORMANDO QUE O PRIMEIRO NUMERO É NEGATIVO
    if (regra == '-' && num1 == null && calculo == '') {
        regN = '-'
        document.getElementById("tela").innerHTML = document.getElementById("tela").innerHTML + regN
        calculo = '-'
    }
    // SE NAO FOR A PRIMEIRA OPÇÃO, ENTÃO ESTÁ PASSANDO UM CALCULO MATEMATICO. "+,-,*,/..."
    else {
        calcular()
        // Verifica se o usuario está trocando a regra utilizada
        if (reg != regra) {
            reg = regra
            document.getElementById("tela").innerHTML = num1 + reg
        }
        else {
             if (reg = regra) {

             }
             else {
                reg = regra
                document.getElementById("tela").innerHTML = document.getElementById("tela").innerHTML + reg
             }
        }
    }

}

//Coleta a regra matematica utilizada para o calculo de acordo com o parametro regra
function calcular() {

    // VERIFICA SE O PRIMEIRO NUMERO É NULO, SE NÃO, ENTÃO PASSA O VALOR CAPTURADO PELA FUNÇÃO NUMERO
    if (num1 != null && calculo != '') {
        num2 = parseFloat(calculo)
        igual()
    }

    // SALVA O NUMERO COMO NEGATIVO CASO TENHA SIDO REALIZADO A FUNÇÃO AÇÃO PASSANDO COMO PARAMETRO(regra) COM A VARIAVEL NUM1 TENDO VALOR NULO

    if (calculo == '.' || calculo == '' && num1 == null) {
        num1 = 0
    }
    if (num1 == null) {
        num1 = parseFloat(calculo)
    }
        // ZERA O VALOR DA VARIAVEL PARA ASSIM CAPTURAR O SEGUNDO NUMERO
        calculo = ''
        virgula = false
    
}

function igual(resultado) {
    // CASO NÃO SEJA REALIZADO MAIS NENHUMA OPERAÇÃO PODE SER DADO O VALOR IGUAL PARA GERAR O RESULTADO, ALOCA O VALOR DO SEGUNDO NUMERO.
    if (resultado == '=' && num1 != null) {
        num2 = parseFloat(calculo)
    }
    // REGRA DA RAIZ QUADRADA É SEPARADA POIS SÓ TEM UM NUMERO
    if (resultado == '√') {

        if (calculo == '' && num1 == null) {
            document.getElementById("tela").innerHTML = 'Escolha primeiro um numero'
        }

        if (num1 == null && calculo != '') {
            num1 = parseFloat(calculo)

        }

        if (num1 != null) {
            calculo = num1 ** 0.5
            document.getElementById("tela").innerHTML = calculo
            num1 = parseFloat(calculo)
            calculo = ''
        }
    }
    // REALIZA O CALCULO DAS DEMAIS REGRAS
    if (num1 != null && num2 != null && reg != null) {

        if (reg == '+') {
            calculo = parseFloat(num1) + parseFloat(num2)
        }
        if (reg == '-') {
            calculo = parseFloat(num1) - parseFloat(num2)
        }
        if (reg == '*') {
            calculo = parseFloat(num1) * parseFloat(num2)
        }
        if (reg == '/') {
            calculo = parseFloat(num1) / parseFloat(num2)
        }
        if (reg == '^') {
            calculo = parseFloat(num1) ** parseFloat(num2)
        }
        document.getElementById("tela").innerHTML = calculo
        reg = null
        num1 = null
        num2 = null

        if (parseFloat(calculo) < 0) {
            regN = '-'
        }

        else {
            regN = null
        }
    }    
        virgula = false
    if (isNaN(calculo) || isNaN(num1) || num1 == null && calculo == null || isFinite(num1) == false|| isFinite(calculo) == false) {
        document.getElementById("tela").innerHTML = 'Escreva um calculo valido'
        num1 = null
        calculo = ''
        reg = null
        regN = null
    }

}

//Remove o ultimo caracter
function back() {

    if (document.getElementById("tela").innerHTML == 'Escolha primeiro um numero' || document.getElementById("tela").innerHTML == 'Escreva um calculo valido') {

    }

    else {
        let backspace = document.getElementById("tela").innerHTML.slice(0, -1)
        document.getElementById("tela").innerHTML = backspace
        // Verifica se o caracter a ser apagado é a regra de calculo
        if (num1 != null && reg != null && calculo == '') {
            reg = null
            calculo = backspace
            num1 = null
        }
        if (num1 != null && reg != null && calculo != '') {
            calculo = calculo.slice(0, -1)
        }
        if (num1 == null) {
            calculo = backspace
        }
        if (virgula == true && Number.isInteger(parseFloat(calculo)) == true || calculo == '') {
            calculo = calculo * 1
            virgula = false
            if (num1 == null) {
                document.getElementById("tela").innerHTML = calculo
            }
            
            if (num1 != null && reg != null) {
                document.getElementById("tela").innerHTML = num1 + reg + calculo
            }
        }
    }
}

//LIMPA TODOS OS DADOS
function limpar() {
    document.getElementById("tela").innerHTML = ''
    calculo = ''
    num1 = null
    num2 = null
    reg = null
    regN = null
    virgula = false
    return true
}