class Calculator {
  add(a: number, b: number): number {
    console.log(a + b);
    return a + b;
  }
  add(a: string, b: string): string {
    console.log(a + b);
    return a + b;
  }
  //   add(a: number | string, b: number | string) {
  //     if (typeof a === "number" && typeof b === "number") {
  //       return a + b;
  //     } else if (typeof a === "string" && typeof b === "string") {
  //       return a + b;
  //     }
  //   }
}
