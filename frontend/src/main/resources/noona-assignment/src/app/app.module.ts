import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { SymptomComponent } from './symptom/symptom.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    SymptomComponent,
    InstructionsComponent,
    RecommendationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [RecommendationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
