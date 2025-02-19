function solution(nums) {
    let unique = [...new Set(nums)]
    if(unique.length > nums.length/2){
        return nums.length/2
    }
    return unique.length
}