
export class Tramite{

    id: string;
    codigo: string;
    doc_tipo: string;
    doc_nro: string;
    solicitante: string;
    telefono: string;
    email: string;
    asunto: string;
    destinatario: string;
    estado: number;
    fecha: string;
    id_area: string;
    nombre_area: string;
    url_document: string;

    constructor(){
        this.id = "";
        this.codigo = "";
        this.doc_tipo = "";
        this.doc_nro = "";
        this.solicitante = "";
        this.telefono = "";
        this.email = "";
        this.asunto = "";
        this.destinatario = "";
        this.estado = 0;
        this.fecha = "";
        this.id_area = "";
        this.nombre_area = "";
        this.url_document = ""; 
    }

}