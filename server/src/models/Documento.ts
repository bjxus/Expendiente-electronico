export class Documento {
    private nombre: string;
    private fechaCreacion: Date;
    private fechaIncorporacion: Date;
    private orden: number;
    private numeroPaginas: number;
    private paginaInicio: number;
    private paginaFin: number;
    private formato: string;
    private tamano: string;
    private origen: string;
    private observaciones: string;

    constructor(
        nombre: string,
        fechaCreacion: Date,
        fechaIncorporacion: Date,
        orden: number,
        numeroPaginas: number,
        paginaInicio: number,
        paginaFin: number,
        formato: string,
        tamano: string,
        origen: string,
        observaciones: string
    ) {
        this.nombre = nombre;  
        this.fechaCreacion = fechaCreacion;
        this.fechaIncorporacion = fechaIncorporacion;
        this.orden = orden;
        this.numeroPaginas = numeroPaginas;
        this.paginaInicio = paginaInicio;
        this.paginaFin = paginaFin;
        this.formato = formato;
        this.tamano = tamano;
        this.origen = origen;
        this.observaciones = observaciones;
        
    }
    
}