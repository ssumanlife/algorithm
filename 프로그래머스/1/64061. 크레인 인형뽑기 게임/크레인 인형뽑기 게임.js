function solution(board, moves) {
    let basket = []
    let arr = board.map(b => [...b])
    
    for(let i =0; i<moves.length; i++){
        let doll = arr.map((d) => d[moves[i] - 1])
        let idx = doll.findIndex((a) => a !== 0)
        if(idx !== -1){
            basket.push(doll[idx])
            arr[idx][moves[i]-1] = 0
        }
    }
    
    let cnt = 0, i = 0
    
    while(i< basket.length - 1){
        if(basket[i] === basket[i + 1]){
            cnt +=1
            basket.splice(i,2)
            i = Math.max(0, i-1)
        }else {
            i++
        }
    }
    
    return cnt*2;
}