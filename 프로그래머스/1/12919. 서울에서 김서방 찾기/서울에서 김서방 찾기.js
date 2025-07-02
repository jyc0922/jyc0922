function solution(seoul) {
    var answer = '';
    const kim = seoul.indexOf('Kim');
    answer = `김서방은 ${kim}에 있다`;
    
    if (kim !== -1) {
        return answer;
    } else {
        return null;
    }
    
    return answer;
}