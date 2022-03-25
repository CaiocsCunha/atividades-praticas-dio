function myFunc(arr, num) {
  try {
    if (!arr && !num) {
      throw new ReferenceError('Não foi passado nenhum parâmetro')
    } else if (typeof arr !== 'object') {
      throw new TypeError('O array precisa ser do tipo object')
    } else if (typeof num !== 'number') {
      throw new TypeError('O segundo argumento precisa ser do tipo number')
    } else if (arr.length !== num) {
      throw new RangeError('O tamanho do array é diferente do numero passado')
    }
    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Esse erro é do tipo ReferenceError')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Esse erro é do tipo TypeError')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Esse erro é do tipo RangeError')
      console.log(e.message)
    } else {
      console.log('Erro indefinido: ' + e)
    }
  }
}

console.log(myFunc(['caio', 'icaro'], 'a'))
