abstract class AbstractSusciption{
    private cost : number;
    private durationDays : number;
    private publicity : boolean;

    public constructor(c : number, d : number, p : boolean){
        this.cost = c;
        this.durationDays = d;
        this.publicity = p;
    }

    public setCost(c : number){
        this.cost = c;
    }

    public getCost() : number{
        return this.cost;
    }

    public setDurationDays(d : number){
        this.durationDays = d;
    }

    public getDurationDays() : number{
        return this.durationDays;
    }

    public setPublicity(c : boolean){
        this.publicity = c;
    }

    public getPublicity() : boolean{
        return this.publicity;
    }
}

export default AbstractSusciption