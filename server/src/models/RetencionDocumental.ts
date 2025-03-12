import { Serie } from "./Serie";

export class RetencionDocumental {
    private codigo: number;
    private serie: Serie;

    constructor(
        codigo: number,
        serie: Serie
    ) {
        this.codigo = codigo;
        this.serie = serie;
    }
}