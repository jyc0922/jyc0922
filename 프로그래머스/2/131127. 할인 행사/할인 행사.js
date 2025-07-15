function solution(want, number, discount) {
    var answer = 0;
    const wantMap = new Map();
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    
    for (let i = 0; i <= discount.length - 10; i++) {
        const currentDiscountMap = new Map();

        for (let j = i; j < i + 10; j++) {
            const item = discount[j];
            currentDiscountMap.set(item, (currentDiscountMap.get(item) || 0) + 1);
        }

        let isMatch = true;
        for (const [item, count] of wantMap) {
            if (!currentDiscountMap.has(item) || currentDiscountMap.get(item) < count) {
                isMatch = false;
                break; 
            }
        }

        // 모든 조건이 일치하면 가능한 날짜이므로 answer 증가
        if (isMatch) {
            answer++;
        }
    }
    return answer;
}