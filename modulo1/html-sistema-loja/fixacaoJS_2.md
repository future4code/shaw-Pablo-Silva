function calculaPrecoTotal(quantidade) {
  let precoMaca = 1.30
  if(quantidade >= 12){
    precoMaca = 1.00
}
    
  return quantidade * precoMaca
  
  
}