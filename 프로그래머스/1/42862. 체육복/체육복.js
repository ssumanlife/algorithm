function solution(n, lost, reserve) {
    let arr = Array(n).fill(1)
    lost.forEach((i) => arr[i-1] -= 1)
    reserve.forEach(i => arr[i-1] +=1)
    
    for(let i = 0; i<n; i++){
        if(arr[i] === 0){
            if(i>0 && arr[i-1] === 2){
                arr[i-1]--
                arr[i]++
            }else if(i<n-1 && arr[i+1] === 2){
                arr[i+1]--
                arr[i]++
            }
        }
    }

    return arr.filter(i => i>0).length
}