type PersonBank = {
    cliente: string,
    saldoTotal:number,
    debitos: Array<number>
}


const arrayBank: Array<PersonBank> = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


function negative (contas: Array<PersonBank>): Array<PersonBank> {
	const contaAtualizada = contas.map((item)=>{
		let debitoTotal = 0
		for (let i of item.debitos) {
			debitoTotal += i
		}
		return ({
			cliente: item.cliente,
			saldoTotal: item.saldoTotal - debitoTotal,
			debitos: []
		})

	})

	return contaAtualizada.filter((item)=> item.saldoTotal < 0)
}

console.table(negative(arrayBank))