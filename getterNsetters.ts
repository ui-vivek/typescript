class Data<S, N, B> {
  private _salary: number | undefined;
  constructor(
    public name: S,
    protected age: N,
    public gender: S,
    public adult: B,
    salary: number
  ) {
    this.salary = salary;
  }
  public set salary(salary: number) {
    if (salary < 20000) {
      console.error("Salary Can not less then 20k");
      return;
    }
    this._salary = salary;
  }

  public get salary(): number {
    if (this._salary === undefined) {
      throw new Error("Salary is not defined...!");
    }
    return this._salary;
  }
}
class Empy<S, N, B> extends Data<S, N, B> {
  constructor(
    name: S,
    age: N,
    gender: S,
    adult: B,
    public address: S,
    salary: number
  ) {
    super(name, age, gender, adult, salary);
  }
}

const Empyee: Empy<string, number, boolean> = new Empy(
  "Rajat",
  26,
  "male",
  true,
  "Bihar",
  50000
);

console.log(Empyee);
Empyee.salary=50
