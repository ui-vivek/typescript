"use strict";
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
var Data = /** @class */ (function () {
    function Data(name, age, gender, adult, salary) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.adult = adult;
        this.salary = salary;
    }
    Object.defineProperty(Data.prototype, "salary", {
        get: function () {
            if (this._salary === undefined) {
                throw new Error("Salary is not defined...!");
            }
            return this._salary;
        },
        set: function (salary) {
            if (salary < 20000) {
                console.error("Salary Can not less then 20k");
                return;
            }
            this._salary = salary;
        },
        enumerable: false,
        configurable: true
    });
    return Data;
}());
var Empy = /** @class */ (function (_super) {
    __extends(Empy, _super);
    function Empy(name, age, gender, adult, address, salary) {
        var _this = _super.call(this, name, age, gender, adult, salary) || this;
        _this.address = address;
        return _this;
    }
    return Empy;
}(Data));
var Empyee = new Empy("Rajat", 26, "male", true, "Bihar", 50000);
console.log(Empyee);
Empyee.salary = 50;
