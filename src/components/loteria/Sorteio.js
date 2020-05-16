
function gerarNumeros(qtde) {
    var numeros = new Array(parseInt(qtde))
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            console.log([ ...nums, novoNumero])
            return [ ...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)

    return numeros
}

function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max+1-min)) + min
    return array.includes*(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio;
}


console.log(gerarNumeros(7))