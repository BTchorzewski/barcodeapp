export const recodePolishCharacters = function(senstence) {
    
    const polishCharacters = {
        211: "O",
    243: "o",
    260: "A",
    261: "a",
    262: "C",
    263: "c",
    280: "E",
    281: "e",
    321: "L",
    322: "l",
    323: "N",
    324: "n",
    346: "S",
    347: "s",
    377: "Z",
    378: "z",
    379: "Z",
    380: "z"
    }

    // const p = ["ą", "Ą", "ć", "Ć", "ę", "Ę", "ł", "Ł", "ń", "Ń", "ó", "Ó", "ś", "Ś", "ź", "Ź", "ż", "Ż"]
    // const p2 = {
    //     ą:"ą".charCodeAt(),
    //     Ą:"Ą".charCodeAt(), 
    //     ć:"ć".charCodeAt(), 
    //     Ć:"Ć".charCodeAt(), 
    //     ę:"ę".charCodeAt(), 
    //     Ę:"Ę".charCodeAt(), 
    //     ł:"ł".charCodeAt(), 
    //     Ł:"Ł".charCodeAt(), 
    //     ń:"ń".charCodeAt(), 
    //     Ń:"Ń".charCodeAt(), 
    //     ó:"ó".charCodeAt(), 
    //     Ó:"Ó".charCodeAt(), 
    //     ś:"ś".charCodeAt(), 
    //     Ś:"Ś".charCodeAt(), 
    //     ź:"ź".charCodeAt(), 
    //     Ź:"Ź".charCodeAt(), 
    //     ż:"ż".charCodeAt(), 
    //     Ż:"Ż".charCodeAt()
    // }

    // console.log({p2})

    const polishKeys = Object.keys(polishCharacters)
    const numbersOfPolishCharacters = polishKeys.map(char=>{
        return Number.parseInt(char)
    })
    console.log({numbersOfPolishCharacters})
    const depolishedSentence = senstence.split("").map(character=>{
        const k = character.charCodeAt();
        if(numbersOfPolishCharacters.includes(k)) {
            return polishCharacters[k]
        }
        return character;
    }).join("");
    


    return depolishedSentence;
}