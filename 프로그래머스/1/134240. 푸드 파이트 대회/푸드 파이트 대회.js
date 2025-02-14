function solution(food) {
    let foodArr = []
    for(let i = 1; i<food.length; i++){
        if(food[i] / 2 > 0){
            foodArr.push(...(Array(Math.floor(food[i]/2)).fill(i)))
        }
    }
    return [...foodArr, 0, ...[...foodArr].reverse()].join('')
}