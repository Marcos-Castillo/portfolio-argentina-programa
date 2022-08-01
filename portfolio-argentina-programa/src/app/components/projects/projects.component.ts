import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
 proyectos=[
  {
    "id": 1,
    "titulo": "Juego del ahorcado Challenge Alura",
    "descripcion": "../../../assets/img/ahorcadp.png",
    "urlRepositorio": "https://github.com/Marcos-Castillo/Oracle-ONE---ahorcado",
    "link": "https://marcos-castillo.github.io/Oracle-ONE---ahorcado/"
  },
  {
    "id": 2,
    "titulo": "Primera practica HTML con CSS",
    "descripcion": "../../../assets/img/practica.png",
    "urlRepositorio": "https://github.com/Marcos-Castillo/practica-html",
    "link": "https://marcos-castillo.github.io/practica-html/"
  },
  {
    "id": 3,
    "titulo": "Encriptador de texto Challenge Alura",
    "descripcion": "../../../assets/img/codigoSecreto.png",
    "urlRepositorio": "https://github.com/Marcos-Castillo/Oracle-ONE---encriptador",
    "link": "https://marcos-castillo.github.io/Oracle-ONE---encriptador/"
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
