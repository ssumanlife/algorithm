function solution(arr, divisor) {
    var result = arr.filter(i => Number(i) % divisor === 0)
    return result.length !== 0 ? result.sort((a,b)=>a-b) : [-1];
}