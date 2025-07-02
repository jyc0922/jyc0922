// 1. 타입에 맞는 값만 허용
function printAge(age) {
    if (typeof age !== "number") {
        throw new Error("숫자만 허용됩니다.");
    }
    else {
        console.log(age);
    }
}
printAge(20);
function isString(input) {
    return typeof input === "string";
}
// 3. 반환 타입 유효성 검사
function getStatus(code) {
    if (code === 200)
        return "success";
    return "error";
}
// 4.매개 변수가 string일 때만 길이 출력하는 함수
function showLength(input) {
    if (typeof input === "string") {
        console.log("\uAE38\uC774: ".concat(input.length));
    }
    else {
        console.log("문자열이 아닙니다,");
    }
}
