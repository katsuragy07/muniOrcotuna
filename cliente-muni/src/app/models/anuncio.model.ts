
export class Anuncio{

    id: string;
    nombre: string;
    url_img: string;
    inicio: any;
    referencia: string;
    fecha: string;

    constructor(){
        this.id = "";
        this.nombre = "";
        this.url_img = "";
        this.referencia = "";
        this.inicio = false;
        this.fecha = ""; 
    }

}