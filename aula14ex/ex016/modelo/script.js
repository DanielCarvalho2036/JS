function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML = 'Contando: '
    }

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (p <= 0){
        window.alert('[Passo Inválido] Considerando PASSO 1')
        p = 1
    }

    if (i < f){
        //Contagem Crescente
        for(num = i; num <= f; num+= p){
            res.innerHTML += `${num} \u{1F449}`
        }
    } else if (i > f){
        //Contagem Regressiva
        for(num = i; num >= f; num -= p){
            res.innerHTML += `${num} 👉`
        }
    } else{
        window.alert('Coloque valores diferentes!')
    }
    res.innerHTML += '🏴'
}