function solution(s) {
    let arr = s.split('')
    let x = s[0]
    let xCnt = 0
    let notXCnt = 0
    let result = []
    let point = 0
    
    for(let i = 0; i < arr.length; i++){
        if(x === arr[i]){
            xCnt++
        }else {
            notXCnt++
        }
        if(xCnt === notXCnt){
            result.push(arr.slice(point, i+1).join(''))
            xCnt = 0
            notXCnt = 0
            point = i+1
            x = arr[i+1]
        }
    }
    return s.length > result.join('').length ? result.length+ 1 : result.length;
}