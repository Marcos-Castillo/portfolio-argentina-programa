import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educacion = [
    {
      "id": 1,
      "titulo": "Desarollador Front-end",
      "descripcion": "ONE Formación Front-end - Esta formación forma parte del Programa ONE, una alianza entre Alura Latam y Oracle. tecnologías de la Web (HTML, CSS y JavaScript) diseño web resposivo.",
      "expedicion": "Expedición: abr. 2022",
      "credencial": "https://app.aluracursos.com/degree/certificate/fd776307-7988-4b01-a9a6-e644c5b7e98c"
    },
    {
      "id": 2,
      "titulo": "Fundamentos y lógica de programación",
      "descripcion": "Fundamentos básicos de la programación. Programación imperativa y estructura de datos mediante el lenguaje JavaScript. Programación Orientada a Objetos Como introducción al paradigma de objetos con Ruby.",
      "expedicion": "Expedición: dic. 2021",
      "credencial": "https://mumuki.io/argentina-programa/certificates/verify/7P5LNiCqiOnTZA_1"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
