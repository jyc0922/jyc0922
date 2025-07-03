interface Movable {
  move(): void;
}
class Car implements Movable {
  move(): void {
    console.log("car is coming.");
  }
}
class Robot implements Movable {
  move(): void {
    console.log("robot is coming.");
  }
}
