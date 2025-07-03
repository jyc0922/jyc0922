function identity<T>(value: T) {
  console.log(value);
  return value;
}

let output = identity<string>("hello");
console.log(output);
let output2 = identity<number>(12357);
console.log(output2);
let output3 = identity<boolean>(true);
console.log(output3);

function getValue<K extends string, V>(obj: Record<K, V>, key: K) {
  return obj[key];
}

const objects = { name: "Alice", age: "20" };
let result = getValue(objects, "name");
console.log(result);
