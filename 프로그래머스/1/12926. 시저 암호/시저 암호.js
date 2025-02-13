function solution(s, n) {
    let arr = Array.from({length:26},(_,i) => String.fromCharCode(i+97))
    let arrX2 = [...arr, ...arr]
    let sArr = s.split('')
    let result = []
    
    for(let i = 0; i < sArr.length; i++){
        if(sArr[i] !== ' '){
            if(sArr[i] === sArr[i].toLowerCase()){
                let idx = arrX2.indexOf(sArr[i])
                result.push(arrX2.slice(idx+n, idx+n+1)[0])
            } else {
                let idx = arrX2.indexOf(sArr[i].toLowerCase())
                result.push(arrX2.slice(idx+n, idx+n+1)[0].toUpperCase())
            }
        } else {
            result.push(' ')
        }
    }
    
    
    return result.join('');
}