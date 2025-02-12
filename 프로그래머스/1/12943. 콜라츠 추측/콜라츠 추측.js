function solution(num) {
    let result = 0
    let n = num
    while(n !== 1){
        if(n%2 === 0){
            n /= 2 
            result++
        } else {
            n = (n*3)+1
            result++
        }
        if(n===1) break;
    }
    return result >= 500 ? -1 : result;
}