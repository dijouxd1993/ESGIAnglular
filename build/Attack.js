"use strict";
exports.__esModule = true;
var Attack = /** @class */ (function () {
    function Attack(accuracy, basePower, name) {
        this.accuracy = accuracy;
        this.basePower = basePower;
        this.name = name;
    }
    Attack.prototype.getBasePower = function () {
        return this.basePower;
    };
    Attack.prototype.getAccuracy = function () {
        return this.accuracy;
    };
    Attack.prototype.getName = function () {
        return this.name;
    };
    return Attack;
}());
exports.Attack = Attack;
