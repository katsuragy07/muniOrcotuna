
export class Usuario{

    id: string;
    privilegios: string;
    accesos: any;
    usuario: string;
    pass: string;
    pass_old: string;
    nombre: string;
    correo: string;
    url_img: string;
    estado: string;
    area_idarea: string;

    constructor(){
        this.id = "";
        this.privilegios = "";
        this.accesos = {
            general: false,
            portadas: false,
            noticias: false,
            anuncios: false,
            resoluciones: false,
            convocatorias: false
        };
        this.usuario = "";
        this.pass = "";
        this.pass_old = "";
        this.nombre = "";
        this.correo = "";
        this.url_img = "";
        this.estado = "";
        this.area_idarea = "";
    }

}