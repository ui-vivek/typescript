class Datas<S, N, B> {
  name: S;
  age: N;
  gender: S;
  adult: B;
  constructor(name: S, age: N, gender: S, adult: B) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.adult = adult;
  }
}

class Emp<S, N, B> extends Datas<S, N, B> {
  address: S;
  constructor(name: S, age: N, gender: S, adult: B, address: S) {
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
  "Vivek",
  24,
  "male",
  true,
  "Bihar"
);

console.log(person);
console.log(Empe);
