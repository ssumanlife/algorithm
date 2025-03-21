function solution(players, callings) {
    let rank = {}
    
    players.forEach((player, i) => rank[player] = i)
    
    for(const calling of callings){
        const idx = rank[calling]
        if(idx > 0){
            const prevPlayer = players[idx - 1]
            players[idx - 1] = calling
            players[idx] = prevPlayer
            
            rank[calling]--
            rank[prevPlayer]++
        }
    }
    
    return players;
}