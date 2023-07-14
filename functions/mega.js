export function mega(qtde = 6, numeros = []) {
    if (qtde < 6 && qtde > 60) {
        throw 'Quantidade inválida!'
    }

    // numeros.length = quantidade de números no array
    // sort((n1, n2) => n1 - n2) ordena de forma crescente no caso o array numeros
    if (numeros.length === qtde) {
        return numeros.sort((n1, n2) => n1 - n2)
    }

    // Math.random = gerar de forma aleatória
    // parseInt = converte para interiro
    // parseInt(Math.random() * 60) = gera de 0 à 59 o + 1 gera de 1 à 60
    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    // se numeroAleatorio não pertencer a lista de numeros, significa que posso adicionar numeros aleatórios
    // chamando de forma recursiva o próximo numero
    // [...numeros] = clona o array numeros (pega todos os elementos de numeros e gera um novo array)
    // [...numeros, numeroAleatorio] = gera um novo array numeros + numerosAleatorios
    if (!numeros.includes(numeroAleatorio)) {
        return mega(qtde, [...numeros, numeroAleatorio])
        // para não repetir os numeros e gerar novos
    } else {
        return mega(qtde, numeros)
    }
}
