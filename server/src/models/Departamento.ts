import { Ciudad } from "./Ciudad";

export class Departamento {
    private codigo: number;
    private nombre: string;
    private ciudad: Ciudad[] = [];

    
    constructor(codigo: number, nombre: string) {
        this.codigo = codigo;
        this.nombre = nombre;
    }

    
    agregar(ciudad: Ciudad) {
        this.ciudad.push(ciudad);
    }

    listar(): void {
        
    }


}