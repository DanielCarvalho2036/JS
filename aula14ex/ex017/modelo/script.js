function tabuada(){
    var num = document.getElementById('num')
    var tabuada = document.getElementById('tabuada')
    var res = document.getElementById('res')

    tabuada.innerHTML = ''

    if (num.value.length == 0){
        alert('Digite um número')
    } else{
        var n1 = Number(num.value)
        if(n1 < 0){
            window.alert('Escreva um número válido!')
        } else{
            for(c = 1; c <= 10; c++){
                var item = document.createElement('option')
                item.value = `tabuada${c}`
                item.text = `${n1} x ${c} = ${n1*c}`
                tabuada.appendChild(item)
            }
        }
    }
}