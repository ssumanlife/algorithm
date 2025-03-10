function solution(X, Y) {
    let cntX = {}, cntY={}
    
    for(let num of X) cntX[num] = (cntX[num] || 0) + 1
    for(let num of Y) cntY[num] = (cntY[num] || 0) + 1
    
    let result = []
    
    for(let i = 9; i>=0; i--){
        if(cntX[i] && cntY[i]){
            result.push(String(i).repeat(Math.min(cntX[i], cntY[i])))
        }
    }

    if(result.length === 0) return "-1"
    if(+(result.join('')) === 0) return "0"
    return result.join('')
}