import Free from "../suscripcion/free/Free"

class Cliente {
    private name : string
    private dni : number
    private pack : object

    public constructor(name : string, dni : number, obj : object = {}){
        this.name = name
        this.dni = dni
        this.pack = (Object.keys(obj).length === 0) ? new Free(0,15,true): obj;
    }

    public setPack(pack : object) {
        this.pack = pack;
    }
}

export default Cliente