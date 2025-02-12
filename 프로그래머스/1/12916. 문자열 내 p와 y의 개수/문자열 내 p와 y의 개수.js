function solution(s){
    var sArray = s.toLowerCase().split('')
    var p = sArray.filter(i => i === 'p')
    var y = sArray.filter(i => i === 'y')
    
    return p.length === y.length ? true : false;
}