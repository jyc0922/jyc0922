function solution(phone_number) {
    var answer = '';
    const numStr = String(phone_number);
    
    if (numStr.length <= 4) {
    return numStr;
    }
    
    const maskedPartLength = numStr.length - 4;
    const maskedPart = '*'.repeat(maskedPartLength); 
    const unmaskedPart = numStr.slice(-4);
    answer = maskedPart + unmaskedPart;
    
    return answer;
}