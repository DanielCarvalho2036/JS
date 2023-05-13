function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    res.innerHTML = ''

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
    } else{
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            window.alert('[Passo Inválido] Considerando Passo = 1')
            p = 1
        }

        if(i < f){
            for(num = i; num <= f; num += p){
                res.innerHTML += `${num} ➡️`
            }
            res.innerHTML += '🏴'
        } else if (i > f){
            for(num = i; num >= f; num -= p){
                res.innerHTML += `${num} ➡️`
            }
            res.innerHTML += '🏴'
        } else{
            window.alert('Escreva valores diferentes para Início e Fim!')
        }
    }
}