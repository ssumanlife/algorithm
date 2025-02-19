function solution(nums) {
    let unique = [...new Set(nums)]
    return unique.length > nums.length/2 ? nums.length/2 : unique.length
}