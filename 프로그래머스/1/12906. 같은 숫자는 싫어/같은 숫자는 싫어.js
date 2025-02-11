function solution(arr)
{
    var answer = []
    arr.forEach((i,idx) => {
        if(i !== arr[idx+1]){
            answer.push(i)
        }
    })
    
    return answer;
}