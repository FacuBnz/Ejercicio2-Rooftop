import Free from './suscripcion/free/Free';
import Basic from './suscripcion/basic/Basic';
import Premium from './suscripcion/premium/Premium';
import Cliente from './cliente/Cliente'

const susbFree = new Free(0,15,true);

const susbBasic = new Basic(3,30,false);

const susbPrem = new Premium(9,30,false);

console.log(susbFree)
console.log(susbBasic)
console.log(susbPrem)

let cliente = new Cliente('facu', 38912477);
console.log(cliente);

cliente.setPack(susbPrem);
console.log(cliente);


