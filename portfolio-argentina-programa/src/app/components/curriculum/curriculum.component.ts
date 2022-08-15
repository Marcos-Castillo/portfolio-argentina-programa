import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  editar:boolean=false;
  pdfCurriculum = document.getElementById("pdfCurriculum");

  constructor() { }

  ngOnInit(): void {
  }

 

}
