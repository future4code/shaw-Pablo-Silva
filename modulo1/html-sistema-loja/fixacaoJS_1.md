function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let salario = 2000
for(let i = 0; i < qtdeCarrosVendidos; i++){
  let bonus = 100 + (valorTotalVendas / qtdeCarrosVendidos) * 0.05
  salario += bonus
   }
return(salario)

}