function contar() {
    var inicio = window.document.getElementById('começo')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
         window.alert('[Erro]')
    }else {
        res.innerHTML = 'contando!'
        var ini = Number(inicio.value)
        var fi = Number(fim.value)
        var pas = Number(passo.value)
        if(pas <= 0){
            window.alert('Passo invalido, consedere o passe igual a 1')
            pas = 1
        }
        if(ini < fi) {
            for(var a = ini; a <= fi; a += pas)
            res.innerHTML +=` ${a} \u{1F923} ` 

        }else {
            for(var a = ini; a >= fi; a -= pas)
            res.innerHTML +=`${a} \u{1F923}`
        }


    }

    

}