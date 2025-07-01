function solution(array) {
    var answer = 0;
    const frequency = {};
    for (let num of array) {
        frequency[num] = (frequency[num] || 0) + 1;
    }    
    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(key => frequency[key] === maxFreq);
    answer = parseInt(modes[0]);
    
    if (modes.length > 1) {
        return -1;
    }
    return answer;
}