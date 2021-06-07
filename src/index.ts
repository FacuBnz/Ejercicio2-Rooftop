import Free from './suscripciones/Free';
import Basic from './suscripciones/Basic';
import Premium from './suscripciones/Premium';
import Cliente from './cliente/Cliente'

let cliente = new Cliente('facu', 38912477);
console.log(cliente);

cliente.setPack(new Premium());
console.log(cliente);
console.log(cliente.getNamePack());
