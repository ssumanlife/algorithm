function solution(number, limit, power) {
    let total = 0
    for(let i = 1; i<=number; i++){
        let cnt = 0
        for(let j =1; j*j<= i; j++){
            if(i%j === 0) {
                cnt++
                if(j !== i/j) cnt++
            }
        }
        total += cnt > limit ? power : cnt
    }
    return total
}