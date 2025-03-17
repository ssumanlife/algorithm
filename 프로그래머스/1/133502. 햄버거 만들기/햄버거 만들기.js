function solution(ingredient) {
    let hamburger = 0
    
    let stack = []
    
    for(let i  of ingredient){
        stack.push(i)
        
        if(stack.length >= 4 && stack.slice(-4).join("") === "1231"){
            hamburger++
            stack.splice(-4)
        }
    }
    
    return hamburger;
}