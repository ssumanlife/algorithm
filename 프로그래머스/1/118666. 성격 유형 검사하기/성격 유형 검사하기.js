function solution(survey, choices) {
    var answer = '';
    let obj = {"R":0, "T":0,"C":0,"F":0, "J":0, "M":0, "A":0,"N":0}
    let score = [3,2,1,0,1,2,3]
    
    for(let i =0; i<choices.length; i++){
        let [a, b] = survey[i].split("")
        if(choices[i] < 4){
            obj[a] += score[choices[i]-1]

        }else if(choices[i]>4){
            obj[b] += score[choices[i]-1]
        }
    }
    
    let arr = Object.entries(obj)
    for(let i =0; i<arr.length; i+=2){
        if(arr[i][1] >= arr[i+1][1]){
            answer += arr[i][0]
        }else {
            answer += arr[i+1][0]
        }
    }
    
    return answer;
}