class Maths {
  public static areaOfSquare(side: number): number {
    return side * side;
  }

  public static areaOfTriangle(base: number, height: number): number {
    let area= (1 / 2) * height * base;
    return parseFloat(area.toFixed(1))
  }
}

console.log(Maths.areaOfSquare(5));
console.log(Maths.areaOfTriangle(5.561545, 6));
