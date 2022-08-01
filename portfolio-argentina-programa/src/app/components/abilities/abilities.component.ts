import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css'],
})
export class AbilitiesComponent implements OnInit {
  
  skills = [
    {
      "id": 1,
      "nombre": "HTML + CSS",
      "competencia": 90
    },
    {
      "id": 2,
      "nombre": "Java",
      "competencia": 70
    },
    {
      "id": 3,
      "nombre": "JavaScript",
      "competencia": 80
    },
    {
      "id": 4,
      "nombre": "Angular",
      "competencia": 70
    },
    {
      "id": 5,
      "nombre": "Spring Boot",
      "competencia": 50
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
