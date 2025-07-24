function solution(array) {
    var answer = 0;
    
    let { mode, isMultipleModes } = array.reduce(
        (acc, num) => {
            acc.frequencies[num] = (acc.frequencies[num] || 0) + 1;
            const currentFreq = acc.frequencies[num]; 

            if (currentFreq > acc.maxFreq) {
                acc.maxFreq = currentFreq;     
                acc.mode = num;                
                acc.isMultipleModes = false;   
            }
            else if (currentFreq === acc.maxFreq) {
                acc.isMultipleModes = true;    
            }

            return acc;
        },
        { frequencies: {}, maxFreq: 0, mode: -1, isMultipleModes: false }
    );

    answer =  isMultipleModes ? -1 : mode;
    
    return answer;
}