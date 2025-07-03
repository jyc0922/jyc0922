function solution(n) {
    var answer = 0;
    
    if (n % Math.sqrt(n) === 0){
        answer = Math.pow(Math.sqrt(n) + 1, 2);
    } else {
        answer = -1;
    }
    return answer;
}