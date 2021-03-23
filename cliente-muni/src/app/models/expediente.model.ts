
export class Expediente{

    nro: string;
    codigo: string;
    solicitante: string;
    asunto: string;
    destinatario: string;
    estado: number;
    fecha: string;

    constructor(){
        this.nro = "";
        this.codigo = "";
        this.solicitante = "";
        this.asunto = "";
        this.destinatario = "";
        this.estado = 0;
        this.fecha = "";
    }

}