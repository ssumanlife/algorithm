function solution(brown, yellow) {
    let y = 3
    for(y; y<=(brown+yellow)/y; y++){
        var x = Math.floor((brown+yellow)/y)
        if((x-2)*(y-2) === yellow){
            break
        }
    }
    return [x,y]
}   