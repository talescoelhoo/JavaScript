let valores = [3, 4, 6, 8, 9, 2, 2, 1]
/*
for (let pos = 0 ; pos < valores.length ; pos++ ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for (let pos in valores) {
    console.log(`A posição ${pos} tem valor ${valores[pos]} !.`)
}