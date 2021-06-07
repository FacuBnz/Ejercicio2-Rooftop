"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Premium_1 = __importDefault(require("./suscripciones/Premium"));
var Cliente_1 = __importDefault(require("./cliente/Cliente"));
var cliente = new Cliente_1.default('facu', 38912477);
console.log(cliente);
cliente.setPack(new Premium_1.default());
console.log(cliente);
console.log(cliente.getNamePack());
