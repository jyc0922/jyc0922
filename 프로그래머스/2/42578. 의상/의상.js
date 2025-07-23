function solution(clothes) {
    var answer = 0;
    
    const clothesMap = new Map();
    
    for (const [name, type] of clothes) {
        clothesMap.set(type, (clothesMap.get(type) || 0) + 1)
    }
    let total = 1;
    for (const count of clothesMap.values()) {
        total *= (count + 1)
    }
    answer = total - 1;
    
    return answer;
}