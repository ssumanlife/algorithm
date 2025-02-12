function solution(x) {
    let sum = (x + '').split('').reduce((a,b)=> Number(a) + Number(b))
    return x % sum === 0 ? true : false;
}