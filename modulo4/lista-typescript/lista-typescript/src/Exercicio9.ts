function anagram(word: string) {
    const wordLength = word.length
    let total = wordLength

    if (!wordLength) {
        return 1
    } 

    for (let i = 1; i < wordLength; i++) {
        total *= i
    }
    
    return total
}

console.log(anagram('mesa'))