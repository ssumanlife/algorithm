function solution(numbers) {
    let sum = []
    for(let i = 0; i<numbers.length; i++){
        for(let j = 0; j< numbers.length; j++){
            if(i !== j){
                sum.push(numbers[i] + numbers[j])
            }
        }
    }
    sum.sort((a,b)=> a-b)
    let result = new Set(sum)
    return [...result];
}