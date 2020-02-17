import { Pokemon } from  './build/pokemon.js'

export class Fight{

    private pkmn1: Pokemon;
    private pkmn2: Pokemon;


    constructor(pkmn1: Pokemon, pkmn2: Pokemon){
        this.pkmn1 = pkmn1;
        this.pkmn2 = pkmn2;
    }
    startsFirst( customRandomizer = Math.random()) : Pokemon {
        if(this.pkmn1.getSpeed() > this.pkmn2.getSpeed()){
            return this.pkmn1;
        }
        
        if(this.pkmn1.getSpeed() < this.pkmn2.getSpeed()){
            return this.pkmn2;
        }

        return this.chooseRandomly(customRandomizer);
    }

    private chooseRandomly(randomizer:number) {
        if(((Math.floor(randomizer)*10))%2 == 0){
            console.log('pkmn2')
            return this.pkmn2;
        }
        return this.pkmn1;
    }

    start():void {
        let firstToPlay  = this.startsFirst();
    
        
        

    }

    

}