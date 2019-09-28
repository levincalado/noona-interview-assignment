import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RecommendationComponent } from '../recommendation/recommendation.component';
import { SymptomService } from './symptom.service';
import { Symptom } from './symptom';

@Component({
  selector: 'na-symptom',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.styl']
})
export class SymptomComponent implements OnInit {
  pastSymptomsReport: Symptom[];
  symptomForm: FormGroup;

  constructor(
    private symptomService: SymptomService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    this.getPastSymptomsReport();
    this.symptomForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
      intensity: new FormControl(0),
      dateObserved: new FormControl(new Date(), [Validators.required])
    })
  }

  getPastSymptomsReport() {
    this.symptomService
      .getSymptoms()
      .subscribe(result => {
        result.sort((a: Symptom, b: Symptom) => {
          // sort descending by createdDate
          return <any>new Date(b.createdDate) - <any>new Date(a.createdDate);
        });

        this.pastSymptomsReport = result;
      });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.symptomForm.controls[controlName].hasError(errorName);
  }

  submit(symptomFormValue) {
    if (this.symptomForm.valid) {
      const { description, intensity, dateObserved } = symptomFormValue;
      const symptom: Symptom = new Symptom(description, intensity, dateObserved);

      this.symptomService
        .postSymptom(symptom)
        .subscribe(result => {
          const recommendationDialog = this.dialog.open(RecommendationComponent, {
            width: '275px',
            data: result
          });

          recommendationDialog.afterClosed().subscribe(() => {
            this.getPastSymptomsReport();
            this.symptomForm.reset();
          });
        });
    }
  }

  clear() {
    this.symptomForm.reset();
    this.symptomForm.markAsPristine();
    this.symptomForm.markAsUntouched();
  }

  deleteSymptom(selectedItems) {
    selectedItems.map(item => {
      this.symptomService
        .deleteSymptom(item.value.id)
        .subscribe(result => {
          this.snackBar.open('Delete success!', 'Dismiss', { duration: 3000 });
          this.getPastSymptomsReport();
        });
    });
  }
}
