function solution(s){
    if(s.length % 2 !== 0) return 0
    let arr = []
    
    for(let i = 0; i<s.length; i++){
        arr.push(s[i])
        
        if(arr[arr.length-2] === arr[arr.length-1]){
            arr.pop()
            arr.pop()
        }
    }
    return arr.length === 0 ? 1 : 0
}