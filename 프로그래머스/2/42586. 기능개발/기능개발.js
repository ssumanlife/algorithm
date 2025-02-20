function solution(progresses, speeds) {
    let day = progresses.map((i,idx) => Math.ceil((100-i)/speeds[idx]))
    let standard = day[0]
    let result=[]
    let cnt = 1
    
    for(let i = 1; i<day.length; i++){
        if( day[i]<= standard ){
            cnt++
        } else {
            result.push(cnt)
            standard=day[i]
            cnt = 1
        }
        
        if(i === day.length-1){
            result.push(cnt)
        }
        
    }

    return result;
}