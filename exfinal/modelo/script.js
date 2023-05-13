var valores = []

function adicionarnum(){
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    var n = Number(num.value)
    var select = document.getElementById('numadd')

    
    if (num.value.length == 0 ){
        alert('Adicione um valor!')
    }else if (n < 1 || n > 100){
        alert('Escreva um valor válido!')
    } else if (valores.indexOf(n) != -1) {
        alert(`O valor ${n} já foi adicionado anteriormente. Digite outro número.`)
    } else{
        valores.push(n)
        numadd.innerHTML += `<option>Valor ${n} adicionado.</option>`
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
    
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else{
        //ENCONTRAR O MAIOR VALOR
        var maior_valor = valores[0]
        for(var pos in valores){
            if (maior_valor > valores[pos]){
                maior_valor = maior_valor
            } else {
                maior_valor = valores[pos]
            }
        }
        //ENCONTRAR O MENOR VALOR

        var menor_valor = valores[0]
        for(var pos in valores){
            if (menor_valor < valores[pos]){
                menor_valor = menor_valor
            } else {
                menor_valor = valores[pos]
            }
        }

        //SOMA DOS NÚMEROS
        var soma = 0
        for(pos = 0; pos < valores.length; pos++){
            var soma = soma + valores[pos]
        }

        return(res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>
        <p>O maior valor informado foi o ${maior_valor}</p>
        <p>O menor valor informado foi o ${menor_valor}</p>
        <p>Somando todos os valores temos ${soma}</p>
        <p>A média dos valores digitados é ${soma/valores.length}</p>
        `)

        // res.innerHTML += `<p>O maior valor informado foi o ${maior_valor}</p>`

        // res.innerHTML += `<p>O menor valor informado foi o ${menor_valor}</p>`

        // res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`

        // res.innerHTML += `<p>A média dos valores digitados é ${soma/valores.length}</p>`
    }
}