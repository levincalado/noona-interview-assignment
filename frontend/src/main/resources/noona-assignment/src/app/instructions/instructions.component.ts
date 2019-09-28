import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'na-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.styl']
})
export class InstructionsComponent implements OnInit {
  public instructions = {
    submit: [
      'Free text field for symptom description',
      'Input scale from 0 to 10 for indicating how intense the pain is',
      'Date input for when the symptom was observed'
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }
}
