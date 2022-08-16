import { Educacion } from "./educacion";
import { Experiencia } from "./experiencia";
import { Proyecto } from "./proyecto";
import { Skill } from "./skill";

export interface Persona {
    id:Number;//
    nombre:String;//
    apellido:String;//
    profesion:String;//
    ubicacion:String;//
    about:String;//
    urlImg:String;//
    urlGithub:String;//
    urlLinkedin:String;//
    educacionList:Array<Educacion>;
    experienciaList:Array<Experiencia>;
    proyectoList:Array<Proyecto>;
    skillList:Array<Skill>;
}

