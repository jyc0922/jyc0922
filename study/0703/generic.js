function identity(value) {
    console.log(value);
    return value;
}
var output = identity("hello");
console.log(output);
var output2 = identity(12357);
console.log(output2);
var output3 = identity(true);
console.log(output3);
function getValue(obj, key) {
    return obj[key];
}
var objects = { name: "Alice", age: "20" };
var result = getValue(objects, "name");
console.log(result);
