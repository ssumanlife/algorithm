function solution(d, budget) {
    let result = 0
    d.sort((a,b) => a - b)
    let arr = [...d,0]
    let sum = d[0]
    for(let i = 0; i < d.length; i++){
        if(sum + arr[i+1] <= budget){
            sum += arr[i+1]
            result++
        }
    }
    
    return result;
}