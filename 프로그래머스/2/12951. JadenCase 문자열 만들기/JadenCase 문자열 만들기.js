function solution(s) {
    let isString = false
    return s.split(" ").map((i) => i.split("").map((i,idx)=> {
        if(idx === 0 && !Number(i)){
            isString = true
            if(isString){
                isString = false
                return i.toUpperCase()
            } else {
            return i.toLowerCase()
            }
        }
        return i.toLowerCase()
    }).join('')).join(" ");
}