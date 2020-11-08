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
                if (regra == '-' && num1 == null && calculo == '') {
                        regN = '-'
                        document.getElementById("tela").innerHTML = document.getElementById("tela").innerHTML + regN
                        calculo = ''    
                }
                // SE NAO FOR A PRIMEIRA OPÇÃO, ENTÃO ESTÁ PASSANDO UM CALCULO MATEMATICO. "+,-,*,/..."
                else {
                    calcular()
                    // Verifica se o usuario está trocando a regra utilizada
                    if ( reg != null){
                        reg = regra
                        document.getElementById("tela").innerHTML = num1 + reg  
                    }
                    else {
                        reg = regra
                        document.getElementById("tela").innerHTML = document.getElementById("tela").innerHTML + reg  
                    }   
                }

            }

            //Coleta a regra matematica utilizada para o calculo de acordo com o parametro regra
            function calcular (){ 

                // VERIFICA SE O PRIMEIRO NUMERO É NULO, SE NÃO, ENTÃO PASSA O VALOR CAPTURADO PELA FUNÇÃO NUMERO
                if (num1 != null && calculo != '') {
                    num2 = parseFloat(calculo)
                    igual()
                    }

                // VERIFICA SE O PRIMEIRO NUMERO É NULO, SE SIM, ENTÃO PASSA O VALOR CAPTURADO PELA FUNÇÃO NUMERO
                if (num1 == null && calculo != ''){
                    // SALVA O NUMERO COMO NEGATIVO CASO TENHA SIDO REALIZADO A FUNÇÃO AÇÃO PASSANDO COMO PARAMETRO(regra) COM A VARIAVEL NUM1 TENDO VALOR NULO
                    if (regN == '-') {
                        num1 = parseFloat(-calculo) 
                    }

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

                        if (num1 != null) {                        
                            calculo = num1 ** 0.5
                            document.getElementById("tela").innerHTML = calculo
                            num1 =  parseFloat(calculo)
                            calculo = ''
                        }
                    }
                    // REALIZA O CALCULO DAS DEMAIS REGRAS
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
                        num1 = null
                        num2 = null

                        if (parseFloat(calculo) < 0) {
                            regN = '-'
                        }

                        else {
                            regN = null
                        }   
                    }    

            }
            //Remove o ultimo caracter
            function back () {
                let backspace = document.getElementById("tela").innerHTML

                backspace = backspace.slice(0,-1)
                document.getElementById("tela").innerHTML = backspace

                // Verifica se o caracter a ser apagado é a regra de calculo
                if (num1 != null && reg != null && num2 == null) {
                    regra = null
                    calculo = num1
                    num1 = null
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