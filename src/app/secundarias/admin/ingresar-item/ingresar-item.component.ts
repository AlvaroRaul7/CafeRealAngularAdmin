import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-ingresar-item',
  templateUrl: './ingresar-item.component.html',
  styleUrls: ['./ingresar-item.component.css']
})
export class IngresarItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
    $('.stepper').mdbStepper();
})
  }

}