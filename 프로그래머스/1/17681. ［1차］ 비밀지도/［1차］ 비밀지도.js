function solution(n, arr1, arr2) {
    let new1 = arr1.map((num) => num.toString(2).split(''))
    let new2 = arr2.map((num) => num.toString(2).split(''))
    let result = []
    
    new1.forEach((num) => {
        if(num.length !== n) return num.unshift(...Array(n-num.length).fill('0'))
    })
    new2.forEach((num) => {
        if(num.length !== n) return num.unshift(...Array(n-num.length).fill('0'))
    })
    
    for(let i = 0; i<n; i++){
        let arr = []
        for(let j=0; j<n; j++){
            if(Number(new1[i][j]) === 0 && Number(new2[i][j]) === 0){
                arr.push(" ")
            } else {
                arr.push("#")
            }
        }
        result.push(arr)
    }

    return result.map((i) => i.join(''));
}