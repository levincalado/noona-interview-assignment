import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recommendation } from './recommendation';

@Component({
  selector: 'na-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.styl']
})
export class RecommendationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RecommendationComponent>,
    @Inject(MAT_DIALOG_DATA) public recommendation: Recommendation
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
