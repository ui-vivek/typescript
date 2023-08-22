"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//---------------------------sorted version
var Datas = /** @class */ (function () {
    function Datas(name, age, gender, adult) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.adult = adult;
    }
    return Datas;
}());
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    function Emp(name, age, gender, adult, address) {
        var _this = _super.call(this, name, age, gender, adult) || this;
        _this.address = address;
        return _this;
    }
    return Emp;
}(Datas));
var person = new Datas("Vivek", 24, "male", true);
var Empe = new Emp("Rajat", 26, "male", true, "Bihar");
console.log(person.name);
//console.log(person.age);  //can not access protected
console.log(Empe);
