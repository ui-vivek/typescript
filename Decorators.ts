// function dec(decoreorIs: Function) {
//     console.log("This is the decoreor");
//   }
//   @dec
//   class User {
//     uname: string;
//     uemail: string;
//     constructor(n: string, e: string) {
//       this.uname = n;
//       this.uemail = e;
//     }
//   }
// -----------------------------------we can also pass the parameters to the decorator
function dec(msg: string) {
  return (decoratorIs: Function) => {
    console.log(msg);
  };
}
@dec("This is pass via decorator")
class User {
  uname: string;
  uemail: string;
  constructor(n: string, e: string) {
    this.uname = n;
    this.uemail = e;
  }
}

const user1: User = new User("singh", "singh@gmail.com");
console.log(user1);
