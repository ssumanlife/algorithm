function solution(k, m, score) {
    let arr = []
    
    const newScore = score.sort((a,b) => b-a).slice(0,m*Math.floor(score.length/m))

    for(let i = 0; i < newScore.length; i+=m){
        let box = newScore.slice(i,i+m).sort((a,b) => a-b)
        arr.push(box[0]*m)
    }

    return arr.length !== 0 ? arr.reduce((a,b) => a+b) : 0
}