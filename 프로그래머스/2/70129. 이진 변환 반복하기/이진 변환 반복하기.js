function solution(s) {
    let zeroCnt = 0
    let totalCnt = 1
    
    function fn(s){
        let newArr = s.split('')
        let filtered = newArr.filter((i) => Number(i) === 1)
        
        zeroCnt += newArr.length - filtered.length
        
        if(filtered.length !== 1 && filtered[0] !== 1){
            totalCnt++
            fn(filtered.length.toString(2))
        }
        
        return totalCnt
    }
    
    return [fn(s), zeroCnt];
}