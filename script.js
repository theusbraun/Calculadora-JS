        var calculo = ''
        var regN = null
        var num1 = null
        var num2 = null
        var reg = null

            //Coleta os numeros e aloca na memoria
            function numero (codigo) {
                if(document.getElementById("tela").innerHTML == 'Escolha primeiro um numero'){
                    document.getElementById("tela").innerHTML = ''
                }
                document.getElementById("tela").innerHTML = document.getElementById("tela").innerHTML + codigo
                calculo = calculo + codigo
            }

            function acao (regra){
                // VERIFICA SE O USUARIO ESTA INFORMANDO QUE O PRIMEIRO NUMERO É NEGATIVO
                if (regra == '-' && num1 == null && regN == null ) {
                        regN = '-'
                        document.getElementById("tela").innerHTML = document.getElementById("tela").innerHTML + regN
                }
                // SE NAO FOR A PRIMEIRA OPÇÃO, ENTÃO ESTÁ PASSANDO UM CALCULO MATEMATICO. "+,-,*,/..."
                else {
                    calcular()
                    reg = regra
                    document.getElementById("tela").innerHTML = document.getElementById("tela").innerHTML + reg     
                }
            
            }

            //Coleta a regra matematica utilizada para o calculo de acordo com o parametro regra
            function calcular (){ 
                // VERIFICA SE O PRIMEIRO NUMERO É NULO, SE NÃO, ENTÃO PASSA O VALOR CAPTURADO PELA FUNÇÃO NUMERO
                if (num1 != null) {
                    num2 = parseFloat(calculo)
                    igual()
                    }
                // VERIFICA SE O PRIMEIRO NUMERO É NULO, SE SIM, ENTÃO PASSA O VALOR CAPTURADO PELA FUNÇÃO NUMERO
                if (num1 == null){
                    // SALVA O NUMERO COMO NEGATIVO CASO TENHA SIDO REALIZADO A FUNÇÃO AÇÃO PASSANDO COMO PARAMETRO(regra) COM A VARIAVEL NUM1 TENDO VALOR NULO
                    if (regN != null) {
                        num1 = -calculo 
                    }
                    // SALVA O NUMERO A SER CALCULADO
                    else {
                        num1 = parseFloat(calculo) 
                    }
                    // ZERA O VALOR DA VARIAVEL PARA ASSIM CAPTURAR O SEGUNDO NUMERO
                    calculo = ''             
                    }
                }

            function igual (resultado){
                    // CASO NÃO SEJA REALIZADO MAIS NENHUMA OPERAÇÃO PODE SER DADO O VALOR IGUAL PARA GERAR O RESULTADO, ALOCA O VALOR DO SEGUNDO NUMERO.
                    if (resultado == '=' && num1 != null){
                        num2 = parseFloat(calculo)
                    }
                    // REGRA DA RAIZ QUADRADA É SEPARADA POIS SÓ TEM UM NUMERO
                    if (resultado == '√'){

                        if (calculo == '' && num1 == null){
                            document.getElementById("tela").innerHTML = 'Escolha primeiro um numero'
                        }

                        if (num1 == null && calculo != ''){
                            num1 = parseFloat(calculo)
                            
                        }

                        if (num1 != null && calculo != '') {                        
                            calculo = num1 ** 0.5
                            document.getElementById("tela").innerHTML = calculo
                            num1 =  parseFloat(calculo)
                            calculo = ''
                        }
                    }
                    
                    if(num1 != null && num2 != null && reg != null){

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
                        num1 =  parseFloat(calculo)
                        num2 = null
                        calculo = ''
                    }   

            }
            //Remove o ultimo caracter
            function back () {
                let backspace = document.getElementById("tela").innerHTML

                backspace = backspace.slice(0,-1)
                document.getElementById("tela").innerHTML = backspace

                if (num1 != null && reg != null && num2 == null) {
                    regra = null
                }

                if (num1 != null && reg == null){
                    num1 = parseFloat(backspace)
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
                return true
            }