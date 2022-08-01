import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia = [
    {
      "id": 1,
      "puesto": "Desarrollo web",
      "ingreso": "nov. de 2021",
      "egreso": "actualidad",
      "descripcion": "Desarrollo de páginas web a base de HTML css y JavaScript"
    },
    {
      "id": 2,
      "puesto": "Técnico de reparación de PC",
      "ingreso": "feb. de 2013",
      "egreso": "actualidad",
      "descripcion": "Reparación de PC, instalación y configuración avanzada de PC y diversos SO (hardware software). Conectividad de REDES"
    },
    {
      "id": 3,
      "puesto": "Técnico de soporte de TI",
      "ingreso": "jun. de 2009",
      "egreso": "feb. de 2013",
      "descripcion": "Resolución de averías en remoto y soporte a técnicos desplazados en sede de clientes: recidenciales, Pymes y Profesionales Gestión de incidencias sobre servicios: telefonia analógica, VoIP, Centralitas Telefónicas, servicios de internet "
    },
    {
      "id": 4,
      "puesto": "Técnico de reparación de PC",
      "ingreso": "ene. de 2006",
      "egreso": "jun. de 2008",
      "descripcion": "Reparación de PC, instalación y configuración avanzada de PC y diversos SO (hardware software). Conectividad de REDES"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
