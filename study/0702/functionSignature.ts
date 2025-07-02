type Run = (miles: number) => boolean;
let runner: Run = function (miles: number): boolean {
  if (miles > 10) {
    return true;
  } else {
    return false;
  }
};
console.log(runner(11));
console.log(runner(5));

type Greet = (name: string) => string;
const greet: Greet = (name) => `Hello, ${name}`;
console.log(greet("Tom"));

function log(message: string, user?: string) {
  console.log(`${user ?? "system"}: ${message}`);
}

log("Hello", "JavaScript");
log("Hello");
