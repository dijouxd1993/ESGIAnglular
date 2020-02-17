"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, atk, def, lvl, hp) {
        this.name = name;
        this.speed = speed;
        this.ATK = atk;
        this.DEF = def;
        this.lvl = lvl;
        this.HP = hp;
        this.attacks = new Array();
    }
    Pokemon.prototype.getSpeed = function () {
        return this.speed;
    };
    Pokemon.prototype.learn = function (attack) {
        if (this.attacks.length <= 4) {
            this.attacks.push(attack);
        }
        else {
            throw 'You cannot learn more than 4 attacks';
        }
    };
    Pokemon.prototype.uses = function (attack, on, accuracyRandomizer) {
        if (accuracyRandomizer === void 0) { accuracyRandomizer = Math.random(); }
        console.log(this.name + " uses " + attack.getName() + " \n ...");
        if (this.targetReached(attack, accuracyRandomizer)) {
            on.wound(this.damagesCalculation(attack, on));
        }
        else {
            console.log(attack.getName + " have failed \n ...");
        }
    };
    Pokemon.prototype.wound = function (damages) {
        this.HP = this.HP - damages;
    };
    Pokemon.prototype.isKnockedOut = function () {
        return (this.HP <= 0);
    };
    Pokemon.prototype.damagesCalculation = function (move, target) {
        return Math.floor(Math.floor(Math.floor(2 * this.lvl / 5 + 2) * this.ATK * move.getBasePower() / target.DEF) / 50) + 2;
    };
    Pokemon.prototype.targetReached = function (move, accuracyRandomizer) {
        return (accuracyRandomizer < move.getAccuracy());
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
