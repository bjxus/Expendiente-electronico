import { Cuaderno } from "./Cuaderno";
import { RetencionDocumental } from "./RetencionDocumental";

export class ExpedienteElectronico {
    private id: number;
    private expedienteFisico: boolean;
    private soporteFisicoExpendiente: boolean;
    public cuadernos: Cuaderno[];
    public retencionDocumental: RetencionDocumental;

    constructor(id: number, expedienteFisico: boolean, soporteFisicoExpendiente: boolean, cuadernos: Cuaderno[], retencionDocumental: RetencionDocumental ) {
        
        this.id = id;
        this.expedienteFisico = expedienteFisico;
        this.soporteFisicoExpendiente = soporteFisicoExpendiente;
        this.cuadernos = cuadernos;
        this.retencionDocumental = retencionDocumental;

    }
}