function solution(cacheSize, cities) {
    const lowerCities = cities.map(i => i.toLowerCase())

    let cnt = 0
    let cache = []
    
    for(const city of lowerCities){
        if(cacheSize === 0 ){
            cnt += 5
            continue
        }
        
        if(cache.includes(city)){
            cnt += 1    
            cache = cache.filter(c => c!==city)
        } else {
            cnt +=5
            if(cache.length >= cacheSize) cache.pop()
        }
        cache.unshift(city)
    }
    return cnt;
}