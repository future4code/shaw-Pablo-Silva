function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  final = ''
  let resposta = 0
  let tamanho = arrayDeNumeros.length
  for (let i = 0; i < tamanho; i++) {
    let posicao = arrayDeNumeros[i]
    if (posicao === numeroEscolhido)
      resposta += 1
  }


  if (resposta > 0) {
    return resposta = `O número ${numeroEscolhido} aparece ${resposta}x`

  } else {
    return final = 'Número não encontrado'
  }

}