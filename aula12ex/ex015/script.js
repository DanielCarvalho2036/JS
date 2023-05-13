function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var anonasc = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (anonasc.value.length == 0 || anonasc.value > anoatual){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var sex = document.getElementsByName('radsex')
        var idade = anoatual - Number(anonasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 11){
                //CRIANÇA
                img.setAttribute('src', 'homemcriança.png')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'homemadulto.png')
            } else{
                //IDOSO
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (sex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 11){
                //CRIANÇA
                img.setAttribute('src', 'mulhercriança.png')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'mulheradulta.png')
            } else{
                //IDOSO
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}