var amigo = {nome: 'José', 
sexo: 'M', 
idade: 15, 
peso: 70,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

amigo.engordar(5)

console.log((amigo))