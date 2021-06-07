import AbstractSuscription from './AbstractSuscription'

class Basic extends AbstractSuscription{
    constructor(){
        super(3, 30, false);
    }

    public getPlan(){
        return `Basic`;
    }
}

export default Basic