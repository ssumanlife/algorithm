function solution(n) {
    let x = 0
    for(let i = 1; i <= n; i ++){
        if(i*i === n){
            x = i
            break;
        }
    }
    return x !== 0 ? (x+1)*(x+1) : -1;
}