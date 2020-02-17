

export class Attack {
    constructor(private accuracy : number, private basePower :number, private name : string){}

    getBasePower() : number{
        return this.basePower;
    }

    getAccuracy() : number{
        return this.accuracy;
    }

    getName() : string{
        return this.name;
    }
}