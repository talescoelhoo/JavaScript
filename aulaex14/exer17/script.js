function tabuada(){
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('selftab')
    if(num.value.length == 0) {
        window.alert('Digite um número')
    } else{
        var n = Number(num.value)
        var c = 0
        tab.innerHTML = ''
        while (c <= 20) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }


}