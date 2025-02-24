function solution(nums) {
    let arr = []

    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j< nums.length; j++){
            for(let k = j+1; k< nums.length; k++){
                arr.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    function fn (num){
        if(num<2) return false
        for(let i = 2; i*i<= num; i++){
            if(num%i === 0 ) return false
        }
        return true
    }
    
    return arr.filter(fn).length
}