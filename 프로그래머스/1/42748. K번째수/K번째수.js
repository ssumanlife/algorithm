function solution(array, commands) {
    let result = commands.map((num,idx) => (
        array.slice(num[0]-1, num[1]).sort((a,b) => a-b)[num[2]-1]
    ))
    
    return result;
}