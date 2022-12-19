function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txdata')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO ao verificar os dados, tente novamente!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src' , 'criança-menino.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'jovem-homen.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'homen-adulto.png')
            }else{
                //idoso
                img.setAttribute('src' , 'homen-idoso.png')
            }

        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src' , 'criança-menina.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'jovem-mulher.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'mulher-adulto.png')
            }else{
                //idoso
                img.setAttribute('src' , 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}