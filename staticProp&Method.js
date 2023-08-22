"use strict";
var Maths = /** @class */ (function () {
    function Maths() {
    }
    Maths.areaOfSquare = function (side) {
        return side * side;
    };
    Maths.areaOfTriangle = function (base, height) {
        var area = (1 / 2) * height * base;
        return parseFloat(area.toFixed(1));
    };
    return Maths;
}());
console.log(Maths.areaOfSquare(5));
console.log(Maths.areaOfTriangle(5.561545, 6));
