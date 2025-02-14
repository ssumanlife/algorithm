function solution(array, commands) {
    let result = []
    
    for(let i = 0; i < commands.length; i++){
        let num = commands[i]
        result.push(array.slice(num[0]-1, num[1]).sort((a,b) => a-b)[num[2]-1])
    }
    
    return result;
}