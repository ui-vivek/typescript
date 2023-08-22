class Datas<S, N, B> {
  public name: S;
  protected age: N;
  gender: S;
  adult: B;
  private salary:N
  constructor(name: S, age: N, gender: S, adult: B) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.adult = adult;
  }
}

class Emp<S, N, B> extends Datas<S, N, B> {  //inheritance
  address: S;
  constructor(name: S, age: N, gender: S, adult: B, address: S) {
    // this.salary; can not access the salary because it is privat 
    super(name, age, gender, adult);
    this.address = address;
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
