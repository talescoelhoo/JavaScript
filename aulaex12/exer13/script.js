function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        foto.src = 'foto2.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18 ) {
        //BOA TARDE!
        foto.src = 'foto1.png'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE
        foto.src = 'foto3.png'
        document.body.style.background = '#222246'
    }
}
