import { Attack } from "./Attack";

export class Pokemon {
    
    private name : string;
    private speed: number;
    private ATK : number;
    private DEF: number;
    private lvl: number;
    public HP: number;
    public attacks: Attack[];    
    

    constructor(name: string, speed: number, atk: number, def: number, lvl: number, hp: number){
        this.name = name;
        this.speed = speed;
        this.ATK = atk
        this.DEF = def;
        this.lvl = lvl;
        this.HP = hp;
        this.attacks = new Array<Attack>();
    }

    getSpeed() : number{
        return this.speed;
    }


    learn(attack : Attack) : void {
        if(this.attacks.length <= 4){
            this.attacks.push(attack);
        }else{
            throw 'You cannot learn more than 4 attacks';
        }
    }

    uses(attack: Attack, on:Pokemon, accuracyRandomizer = Math.random()) : void{
        console.log(`${this.name} uses ${attack.getName()} \n ...`)
        if(this.targetReached(attack, accuracyRandomizer)){
            on.wound(this.damagesCalculation(attack, on))
        }else{
            console.log(`${attack.getName} have failed \n ...`)
        }
    }

    wound(damages : number) : void{
        this.HP = this.HP - damages;
    }

    isKnockedOut(){
        return (this.HP <= 0);
    }

    private damagesCalculation(move: Attack, target: Pokemon) : number {
       return Math.floor(Math.floor(Math.floor(2 * this.lvl / 5 + 2) * this.ATK * move.getBasePower() / target.DEF) / 50) + 2
    }

    private targetReached(move: Attack, accuracyRandomizer : number) : boolean{
        return(accuracyRandomizer < move.getAccuracy())
    }
}


