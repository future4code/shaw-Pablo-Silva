function person(name: string, date: string) {
    const dateArray = date.split(' ')
    return `Olá me chamo ${name}, nasci no dia ${dateArray[0]} do mês de ${dateArray[1]} do ano de ${dateArray[2]} `

}

console.log(person('Pablo', '15 outubro 1993'));













