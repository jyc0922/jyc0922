function solution(arr) {
    var answer = 0;
    
    function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
        }
    return a;
    }
    
    function lcm(a, b) {
    if (a === 0 || b === 0) {
        return 0;
        }
    return Math.abs(a * b) / gcd(a, b);
    }
    
    if (!arr || arr.length === 0) {
        return 0;
    }

    answer = arr[0];

    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
    
    return answer;
}