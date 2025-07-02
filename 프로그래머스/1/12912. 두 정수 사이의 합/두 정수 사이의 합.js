function solution(a, b) {
    var answer = 0;
    
    if (a > b) {
        for (let i = b; i < a + 1; i++) {
            answer += i;
        }
    } else if (a < b) {
        for (let j = a; j < b + 1; j++) {
            answer += j;
        }
    } else {
        answer = a;
    }
    
    return answer;
}