function solution(lottos, win_nums) {
    var answer = [];
    let zeroCnt = lottos.filter(i => i === 0).length
    let includeCnt = lottos.filter(i => win_nums.includes(i)).length
    let maxCnt = zeroCnt + includeCnt
    
    if(maxCnt > 0){
        answer.push(7-maxCnt)
    }else {
        answer.push(6)
    }
    if(includeCnt>0){
        answer.push(7-includeCnt)
    }else {
        answer.push(6)
    }
    return answer;
}