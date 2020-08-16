import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {

  public titulo = 'Práctica realizada';

  constructor() { }

  ngOnInit(): void {
  }

}
