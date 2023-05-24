var agora = new Date()
var hora = agora.getHours()
var minagora = new Date
var minagr = minagora.getMinutes()
console.log(`Agora são exatamente ${hora}:${minagr} horas é ${minagr} segundos.`)
if (hora < 12) {
    console.log ('Bom dia !')
} else if (hora <=18) {
    console.log('Boa tarde !')
} else {
    console.log('Boa noite !')
}