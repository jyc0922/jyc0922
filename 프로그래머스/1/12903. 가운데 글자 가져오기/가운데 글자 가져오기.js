function solution(s) {
    var answer = '';
    let n = s.length;
    
    if (n % 2 !== 0) {
    const mid = Math.floor(n / 2); 
    answer = s[mid];
    } else {
    const mid1 = n / 2 - 1;
    const mid2 = n / 2;
    answer = `${s[mid1]}${s[mid2]}`; 
    }
    
    return answer;
}