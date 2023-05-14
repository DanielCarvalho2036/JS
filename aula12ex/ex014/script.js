function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#FF7527'
    } else if (hora <= 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#CD968F'
    } else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = 'rgb(36, 24, 107)'
    }
}