// class Datas<S, N, B> {
//   public name: S;
//   protected age: N;
//   gender: S;
//   adult: B;
//   private salary:N
//   constructor(name: S, age: N, gender: S, adult: B) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.adult = adult;
//   }
// }

//---------------------------sorted version
class Datas<S, N, B> {
  private salary: N;
  constructor(
    public name: S,
    protected age: N,
    public gender: S,
    public adult: B
  ) {}
}
class Emp<S, N, B> extends Datas<S, N, B> {
  constructor(name: S, age: N, gender: S, adult: B, public address: S) {
    super(name, age, gender, adult);
  }
}

const person: Datas<string, number, boolean> = new Datas(
  "Vivek",
  24,
  "male",
  true
);
const Empe: Emp<string, number, boolean> = new Emp(
  "Rajat",
  26,
  "male",
  true,
  "Bihar"
);

console.log(person.name);
//console.log(person.age);  //can not access protected
console.log(Empe);
