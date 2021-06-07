"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Free_1 = __importDefault(require("../suscripciones/Free"));
var Cliente = /** @class */ (function () {
    function Cliente(name, dni, obj) {
        this.name = name;
        this.dni = dni;
        this.pack = (obj !== undefined) ? obj : new Free_1.default();
    }
    Cliente.prototype.setPack = function (pack) {
        this.pack = pack;
    };
    Cliente.prototype.getNamePack = function () {
        return this.pack.getPlan();
    };
    return Cliente;
}());
exports.default = Cliente;
