function solution(new_id) {
    const step1 = (id) => id.toLowerCase()

    const step2 = (id) => {
        const char = "abcdefghijklmnopqrstuvwxyz0123456789-_."
        let result = ""
        for(let i = 0 ; i<id.length; i++){
            if(char.includes(id[i])){
                result += id[i]
            }
        }
        return result
    }
    
    const step34 = (id) => {
        let arr = id.split("")
        for(let i =0; i<arr.length; i++){
            if(arr[i] ==="." && arr[i+1] ==="."){
                arr.splice(i, 1)
                i--
            }
        }
        if(arr[0] ===".") arr.shift()
        if(arr[arr.length-1] === ".") arr.pop()
        return arr.join("")
    }
    
    const step5 = (id) => id ==="" ? "a" : id.length >= 16 ? id.slice(0,15) : id
          
    const step6 = (id) => {
        while(id.length < 3){
            id += id[id.length-1]
        }
        return id
    }
    
    return step6(step5(step34(step5(step34(step2(step1(new_id)))))));
}