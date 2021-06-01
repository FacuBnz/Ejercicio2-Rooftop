"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Free_1 = __importDefault(require("./suscripcion/free/Free"));
var Basic_1 = __importDefault(require("./suscripcion/basic/Basic"));
var Premium_1 = __importDefault(require("./suscripcion/premium/Premium"));
var Cliente_1 = __importDefault(require("./cliente/Cliente"));
var susbFree = new Free_1.default(0, 15, true);
var susbBasic = new Basic_1.default(3, 30, false);
var susbPrem = new Premium_1.default(9, 30, false);
console.log(susbFree);
console.log(susbBasic);
console.log(susbPrem);
var cliente = new Cliente_1.default('facu', 38912477);
console.log(cliente);
cliente.setPack(susbPrem);
console.log(cliente);
