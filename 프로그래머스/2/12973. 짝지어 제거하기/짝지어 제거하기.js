function solution(s)
{
    var answer = -1;
    const stack = [];
    for (const char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    //console.log('Hello Javascript')
    answer = stack.length === 0 ? 1 : 0;

    return answer;
}