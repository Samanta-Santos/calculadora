//passo 1: clicar e aparecer no input
//passo 2: fazer a conta
//passo 3: clicar em igual e aparecer o resultado
//passo 4: limpar
//passo 5: uso dos parenteses e não repetir sinais
//passo 6: botão excluir

var conta = document.querySelector('#conta')
var res = document.querySelector('#res')
var parent = true
var control = false

//passo 1
function clicar(mostrar) {
    if (mostrar == "()") {
        if (parent) {
            mostrar = "("
            parent = false
        } else {
            mostrar = ")"
            parent = true
        }
    }

    //passo 5
    let num = parseInt(mostrar)
    if (isNaN(num) && mostrar != "(") {
        if (control) {
            excluir()
        } else {
            control = true
        }
    } else {
        control = false
    }
    conta.value += mostrar
}

//passo 2 e 3
function resultado() {
    if (conta.value != "") {
        res.innerHTML = eval(conta.value)
        conta.value = res.innerHTML
        control = false
        parent = true
    }
}

//passo 4
function limpar() {
    conta.value = ""
    res.innerHTML = ""
}

//passo 6
function excluir() {
    let novoValor = conta.value
    novoValor = novoValor.substring(0, novoValor.length - 1)
    conta.value = novoValor
    res.innerHTML = ""
}





