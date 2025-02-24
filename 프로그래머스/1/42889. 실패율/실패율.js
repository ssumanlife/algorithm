function solution(N, stages) {
    let percent = {}
    let result = []
    for(let i =1; i<=N; i++){
        let user = stages.filter(s => s >= i)
        let notClear = stages.filter(s => s == i)
        percent[i] = user.length === 0 ? 0: notClear.length/user.length
    }
    
    return Object.entries(percent).sort((a,b) => b[1]-a[1]||a[0]-b[0]).map(i => parseInt(i[0]))
}