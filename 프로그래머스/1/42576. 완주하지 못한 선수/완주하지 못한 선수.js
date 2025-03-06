function solution(participant, completion) {
    let hash = new Map()
    
    participant.forEach(name => {
        hash.set(name, (hash.get(name)||0) + 1)
    })
    
    completion.forEach(name => {
        hash.set(name, hash.get(name) - 1)
    })
    
    for(let [key, value] of hash){
        if(value > 0) return key
    }
}