"use strict";
exports.__esModule = true;
var Fight = /** @class */ (function () {
    function Fight(pkmn1, pkmn2) {
        this.pkmn1 = pkmn1;
        this.pkmn2 = pkmn2;
    }
    Fight.prototype.startsFirst = function (customRandomizer) {
        if (customRandomizer === void 0) { customRandomizer = Math.random(); }
        if (this.pkmn1.getSpeed() > this.pkmn2.getSpeed()) {
            return this.pkmn1;
        }
        if (this.pkmn1.getSpeed() < this.pkmn2.getSpeed()) {
            return this.pkmn2;
        }
        return this.chooseRandomly(customRandomizer);
    };
    Fight.prototype.chooseRandomly = function (randomizer) {
        if (((Math.floor(randomizer) * 10)) % 2 == 0) {
            console.log('pkmn2');
            return this.pkmn2;
        }
        return this.pkmn1;
    };
    return Fight;
}());
exports.Fight = Fight;
