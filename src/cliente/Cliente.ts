import Basic from "../suscripciones/Basic"
import Free from "../suscripciones/Free"
import Premium from "../suscripciones/Premium"

class Cliente {
    private name : string
    private dni : number
    private pack : Basic | Premium | Free

    public constructor(name : string, dni : number, obj?: Basic | Premium){
        this.name = name
        this.dni = dni
        this.pack = (obj !== undefined) ? obj : new Free();
    }

    public setPack(pack : Basic | Premium | Free) {
        this.pack = pack;
    }

    public getNamePack() : string{
       return this.pack.getPlan();
    }
}

export default Cliente