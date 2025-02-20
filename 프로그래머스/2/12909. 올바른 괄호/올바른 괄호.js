function solution(s){
    let sArr = s.split('()').map((i) => i.split("")).join('').split('')
    let left = 0
    let right = 0
    let result = true
    for(let i = 0; i<sArr.length; i++){
        if(sArr[i] === '(') left++
        if(sArr[i] === ')') right++
        if(left !== 0 && sArr[i] === ')'){
            left--
            right--
            result = true
        }
    }
    console.log(sArr)
    if(left !== right || sArr[0] === ')' || sArr[sArr.length-1] === '(') result = false
    return result;
}