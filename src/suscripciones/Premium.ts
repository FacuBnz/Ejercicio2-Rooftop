import AbstractSuscription from './AbstractSuscription'

class Premium extends AbstractSuscription{
    
    constructor(){
        super(9, 30, false);
    }
    public getPlan(){
        return `Premium`;
    }
}

export default Premium