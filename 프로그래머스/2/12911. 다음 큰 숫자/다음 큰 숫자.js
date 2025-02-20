function solution(n) {
    let result = n+1
    let nNum = n.toString(2).split('').filter(i =>Number(i)===1).length
    while(true){
        let resultNum = result.toString(2).split('').filter(i =>Number(i)===1).length
        if(nNum === resultNum){
            break
        }
        result++
    }
    return result;
}