function solution(n) {
    const countBit = (num) => {
        let count = 0
        while (num > 0) {
            num &= (num - 1);
            count++;
        }
        return count;
    };
    const targetCount = countBit(n);
    var answer = n + 1;
    while(true) {
        if (countBit(answer) === targetCount) {
            return answer;
        }
        answer++
    }
}