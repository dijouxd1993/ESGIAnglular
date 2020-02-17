//import { Pokemon } from './pokemon.js'
//import { Fight } from  './Fight.js'
const p = require("./build/pokemon.js");
const f = require("./build/Fight.js");
const a = require("./build/Attack.js");


describe('sarting',  () => {
    it('The first pkmn should attack first', function () {
        let pkmn1 = new p.Pokemon("Caninos", 5, 20,20,36,50);
        let pkmn2 = new p.Pokemon("Flagadoss", 5, 20,20,36,50);
        let fight = new f.Fight(pkmn1, pkmn2);
        expect(fight.startsFirst()).toEqual(pkmn1);
    });

    it('The Second pkmn should attack first', function () {
        let pkmn2 = new p.Pokemon("Caninos", 5, 20,20,36,50);
        let pkmn1 = new p.Pokemon("Flagadoss", 5, 20,20,36,50);
        let fight = new f.Fight(pkmn1, pkmn2);
        expect(fight.startsFirst()).toEqual(pkmn2);
    });

    it('Same speed but The First pkmn should attack first', function () {
        let pkmn2 = new p.Pokemon("Caninos", 5, 20,20,36,50);
        let pkmn1 = new p.Pokemon("Ponita", 5, 20,20,36,50);
        let fight = new f.Fight(pkmn1, pkmn2);
        expect(fight.startsFirst(() => 0,2)).toEqual(pkmn1);
    });

    it('Same speed but The Second pkmn should attack first', function () {
        let pkmn2 = new p.Pokemon("Caninos", 5, 20,20,36,50);
        let pkmn1 = new p.Pokemon("Ponita", 5, 20,20,36,50);
        let fight = new f.Fight(pkmn1, pkmn2);
        expect(fight.startsFirst(() => 0,1)).toEqual(pkmn2);
    });

    it('Ponita did not learnd Pitolet a o', function () {
        let pkmn1 = new p.Pokemon("Ponita", 5, 20,20,36,50);
        let belier = new a.Attack(85,90,'Bélier');
        let pistoletAO = new a.Attack(100,40,'Pistolet a O');

        
        pkmn1.learn(belier);

        let exits = pkmn1.attacks.some((atk) => atk == pistoletAO);
  
        expect(exits).toEqual(false);
    });



    it('Ponita learns Bélier', function () {
        let pkmn1 = new p.Pokemon("Ponita", 5, 20,20,36,50);
        let belier = new a.Attack(85,90,'Bélier');
        
        pkmn1.learn(belier);

        let exits = pkmn1.attacks.some((atk) => atk == belier);

  
        expect(exits).toEqual(true);
    });

    it('Ponita uses Bélier on Pikachu', function () {
        let pkmn1 = new p.Pokemon("Ponita", 5, 20,20,36,50);
        let belier = new a.Attack(85,90,'Bélier');
        
        let pkmn2 = new p.Pokemon("Pikachu", 5, 20,20,36,100);

        pkmn1.learn(belier);

        pkmn1.uses(belier,pkmn2, () => 1);


  
        expect(pkmn2.HP < 100).toEqual(true);
    });

    it('Ponita uses Bélier on Pikachu but misses', function () {
        let pkmn1 = new p.Pokemon("Ponita", 5, 20,20,36,50);
        let belier = new a.Attack(85,90,'Bélier');
        
        let pkmn2 = new p.Pokemon("Pikachu", 5, 20,20,36,100);

        pkmn1.learn(belier);

        pkmn1.uses(belier,pkmn2, () => 100);


  
        expect(pkmn2.HP == 100).toEqual(true);
    });



});
