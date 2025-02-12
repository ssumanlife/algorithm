function solution(arr) {
    var num = [...arr].sort((a,b) => a-b).slice(0, 1)
    let result = arr.filter((i) => i !== Number(num))
    return result.length !== 0 ? result : [-1];
}