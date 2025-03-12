import { TipoDocumental } from "./TipoDocumental";

export class Serie {
    private codigo: number;
    private nombre: string;
    private tipoDocumental: TipoDocumental;

    constructor(codigo: number, nombre: string, tipoDocumental: TipoDocumental) {

        this.codigo = codigo;
        this.nombre = nombre;
        this.tipoDocumental = tipoDocumental;
    }
}