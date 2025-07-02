function oldEnough(age: number): never | boolean {
  if (age > 59) {
    throw Error("You are too old!");
  }
  if (age <= 18) {
    return false;
  }
  return true;
}
