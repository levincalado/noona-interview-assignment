import { Component, OnInit } from '@angular/core';
import { SymptomService } from './symptom.service';

@Component({
  selector: 'na-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  public instructions = {
    submit: [
      'Free text field for symptom description',
      'Input scale from 0 to 10 for indicating how intense the pain is',
      'Date input for when the symptom was observed'
    ]
  };

  constructor(
    private symptomService: SymptomService
  ) {}

  ngOnInit(): void {
    this.symptomService.symptoms();
  }
}
