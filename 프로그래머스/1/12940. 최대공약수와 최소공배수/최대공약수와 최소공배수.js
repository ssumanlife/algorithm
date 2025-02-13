function solution(n, m) {
    var answer = [];
    let max = Math.max(n, m)
    let min = Math.min(n, m)
    for(let i = 1; i <= max; i++){
        let x = 1
        if(n%i === m%i && n%i ===0 && m%i ===0){
            x *= i
            answer = [x]
        }
        
    }
    
    for(let j = 1; j <= max; j++){
        for(let k = 1; k <=max; k++){
            if(min*j === max*k){
                answer.push(min*j)
                break;
            }
        }
        if(answer.length > 1){
            break;
        }
    }

    return answer;
}