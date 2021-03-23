
export class Movimiento{

    id_mov: string;
    codigo: string;
    solicitante: string;
    asunto: string;
    destinatario: string;
    estado_mov: number;
    fecha: string;
    nombre_area: string;

    constructor(){
        this.id_mov = "";
        this.codigo = "";
        this.solicitante = "";
        this.asunto = "";
        this.destinatario = "";
        this.estado_mov = 0;
        this.fecha = "";
        this.nombre_area = "";
    }

}