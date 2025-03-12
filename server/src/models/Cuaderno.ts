import { Documento } from "./Documento";

export class Cuaderno {
    private numero: number;
    private descripcion: string;
    private documento: Documento[];

    constructor(numero: number, descripcion: string, documento: Documento[]) {
        this.numero = numero;
        this.descripcion = descripcion;
        this.documento = documento;
        
    }
}