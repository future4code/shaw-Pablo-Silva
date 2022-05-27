enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function listFilme (name: string, yearBid: number, gender: string, punctuation?: number) {
    if(punctuation === undefined) {
        return `Nome do filme: ${name}. Ano de Lançamento: ${yearBid}. Gênero: ${gender}.`

    }else {
        return `Nome do filme: ${name}. Ano de Lançamento: ${yearBid}. Gênero: ${gender}. Pontuação: ${punctuation}`
    }       
}

console.log(listFilme('Tropa de Elite', 2008, GENERO.ACAO, 55 ))

 