import AbstractSuscription from './AbstractSuscription';

class Free extends AbstractSuscription{

    constructor(){
        super(0, 15, true);
    }

    public getPlan(){
        return `Free`;
    }
}

export default Free