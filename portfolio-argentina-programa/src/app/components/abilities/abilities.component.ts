import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css'],
})
export class AbilitiesComponent implements OnInit {
  variableGeneral = [
    {
      name: 'HTML',
      porcentaje: 90,
    },
    {
      name: 'CSS',
      porcentaje: 90,
    },
    {
      name: 'CSS',
      porcentaje: 90,
    },
    {
      name: 'CSS',
      porcentaje: 90,
    },

    /*
      <p class="shadow">
    <ngb-progressbar type="primary" [value]="90" [striped]="true" [animated]="true" height="1.5rem"
      ><span class="fs-6">HTML</span></ngb-progressbar
    >
  </p>
  <p class="shadow">
    <ngb-progressbar type="primary" [value]="90" [striped]="true" [animated]="true" height="1.5rem"
      ><span class="fs-6">CSS</span></ngb-progressbar
    >
  </p>
  <p class="shadow">
    <ngb-progressbar type="primary" [value]="70" [striped]="true" [animated]="true" height="1.5rem"
      ><span class="fs-6">JavaScript</span></ngb-progressbar
    >
  </p>
  <p class="shadow">
    <ngb-progressbar type="primary" [value]="60" [striped]="true" [animated]="true" height="1.5rem"
      ><span class="fs-6">JAVA</span></ngb-progressbar
    >
  </p>
  */
  ];
  constructor() {}

  ngOnInit(): void {}
}
