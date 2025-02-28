function solution(s, skip, index) {
    let alphabet = Array.from({length: 26},(_,i) => String.fromCharCode(i+97)).filter(i => !skip.includes(i))
    let result = []

    for(let i = 0; i< s.length; i++){
        let idx = alphabet.indexOf(s[i])
        result.push(alphabet[(idx + index) % alphabet.length])
    }
    
    return result.join('')
}